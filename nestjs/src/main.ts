import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.createMicroservice(AppModule, {
  //   transport: Transport.TCP,
  //   options: {
  //     port: 3000,
  //     retryAttempts: 5,
  //     retryDelay: 200,
  //   },
  // });
  // app.listen(() => global.console.log('Microservice is listening'));
  const appClient = await NestFactory.create(AppModule);
  await appClient.listen(8018);
}
bootstrap();
