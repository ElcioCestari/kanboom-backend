import {Injectable} from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import {CreateEmailDto} from "../dto/create-email.dto";

@Injectable()
export class EmailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'TODO',
                pass: 'TODO',
            },
        });
    }

    async sendRecoveryEmail(dto: string): Promise<void> {
        const mailOptions = {
            from: 'todo@gmail.com',
            to: 'todo@gmail.com',
            subject: 'Password Recovery',
            text: `Click the following link to reset your password: `,
        };

        await this.transporter.sendMail(mailOptions);
    }
}
