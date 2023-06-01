import { Controller, Param, Post } from '@nestjs/common';
import { EmailService } from './service/email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/recovery/:email')
  create(@Param('email') email: string) {
    return this.emailService.sendRecoveryEmail(email);
  }
}
