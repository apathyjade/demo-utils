import { Controller, Get, Header } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller('/user')
export class UserController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'user';
  }
  @Get('ok')
  getOk(): string {
    return 'user ok';
  }
}
