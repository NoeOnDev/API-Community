import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './config/ormConfig';
import { env } from './config/env';

const app = express();
const port = env.port;

AppDataSource.initialize().then(() => {
    console.log('Database connected');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});