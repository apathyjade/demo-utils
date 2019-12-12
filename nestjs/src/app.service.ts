import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('Client') private readonly client: ClientProxy) {}
  getHello(): Observable<string> {
    return this.client.send<string>({ cmd: 'sum' }, '{}');
  }
  async getOk(url: string): Promise<string> {
    return url + 'ok';
  }
}
