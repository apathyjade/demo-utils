import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/base')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/ok')
  @Header('a', 'b')
  @Header('c', 'b')
  getOk(): string {
    return this.appService.getOk();
  }
}
