import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5433,
            username: 'root',
            password: 'password',
            database: 'test',
            models: [User],
            autoLoadModels: true,
            synchronize: true,
            logging: false,
        }),
    ],
})
export class DatabaseModule {}