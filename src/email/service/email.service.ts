import { BadRequestException, Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as process from 'process';
import { UserService } from '../../user/service/user.service';

@Injectable()
export class EmailService {
  private ses: AWS.SES;
  private emailPath = `${process.env.ENVIRONMENT}/email/recovery`;

  constructor(private readonly userService: UserService) {
    this.ses = new AWS.SES({
      region: process.env.REGION,
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    });
  }

  async sendRecoveryEmail(email: string): Promise<void> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('email não encontrado.');
    }
    const params: AWS.SES.SendEmailRequest = {
      Source: process.env.EMAIL_SOURCE,
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: {
          Data: 'Password Recovery',
        },
        Body: {
          Html: {
            Data: this.getHtml(user.email),
          },
        },
      },
    };

    try {
      await this.ses.sendEmail(params).promise();
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new Error('Failed to send email');
    }
  }

  private getHtml(email: string) {
    return `<h1>Recuperação de senha</h1>
            <p>Olá,</p>
            <p>Você solicitou que sua senha fosse resetada, para escolher sua nova senha clique aqui:</p>
            <p><a href="${this.emailPath}/${email}">Redefinir senha</a></p>
            <p>Se você não solicitou uma recuperação de senha, ignore este e-mail.</p>
            <p>Atenciosamente,</p>
            <p>Equipe Kanboom</p>`;
  }
}
