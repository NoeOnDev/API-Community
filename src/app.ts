import express from 'express';
import { UserFactory } from './factories/UserFactory';

const app = express();
app.use(express.json());

const userFactory = new UserFactory();
app.use('/api/users', userFactory.getRouter());

export default app;
