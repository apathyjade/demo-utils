import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('/base')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): Observable<string> {
    return this.appService.getHello();
  }
  @Get('/ok')
  @MessagePattern({ cmd: 'sum' })
  async getOk(data: string): Promise<string> {
    return await this.appService.getOk(data);
  }
}
