import 'reflect-metadata';
import { AppDataSource } from './config/ormConfig';
import { env } from './config/env';
import app from './app';

const port = env.port;

AppDataSource.initialize().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch((error) => {
    console.log(`Error while connecting to the database: ${error}`);
});
