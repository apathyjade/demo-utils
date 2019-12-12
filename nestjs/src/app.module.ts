import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ClientsModule, ClientProxy, Transport } from '@nestjs/microservices';
import { ClientModule } from './client/client.module';
import { GraphQLModule } from '@nestjs/graphql';
// import { AuthorResolver } from './user/user.resolver'

@Module({
  imports: [
    UserModule,
    // ClientsModule.register([
    //   { name: 'Client', transport: Transport.TCP },
    // ]),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes('cats');
  // }
}
