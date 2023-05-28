import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as process from 'process';

@Injectable()
export class EmailService {
  private ses: AWS.SES;

  constructor() {
    this.ses = new AWS.SES({
      region: process.env.REGION,
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    });
  }

  async sendRecoveryEmail(email: string): Promise<void> {
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
            Data: '<h1>Test email</h1>',
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
}
