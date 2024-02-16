import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import ConfigurationApp from '../config/config-app';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
      load: [ConfigurationApp],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
