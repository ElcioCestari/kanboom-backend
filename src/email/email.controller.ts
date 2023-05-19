import { Controller, Post, Body } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { EmailService } from './service/email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  create() {
    return this.emailService.sendRecoveryEmail('createEmailDto');
  }
}
