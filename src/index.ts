import express from 'express';
import cors from 'cors';
import verbRoutes from './routes/verbRoutes';
import { env } from './config/env';

const app = express();
const port = env.port;

app.use(cors());
app.use(express.json());

app.use('/api', verbRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
