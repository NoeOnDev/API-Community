import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5433,
            username: 'root',
            password: 'password',
            database: 'test',
            autoLoadModels: true,
            synchronize: true,
            logging: false,
        }),
    ],
})
export class DatabaseModule {}