import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/users/user.model';

@Module({
  imports: [
    UsersModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'root',
      password: 'password',
      database: 'testjs',
      models: [User],
      autoLoadModels: true,
      synchronize: true,
      logging: false,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
