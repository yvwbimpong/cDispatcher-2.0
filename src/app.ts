import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { AuthRouter, UserRouter } from './routes';

dotenv.config();

const app: Express = express();

const BASE_ROUTE = '/api/v1';

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/status', (req: Request, res: Response) => {
  res.status(200).send({ success: true });
});

app.use(BASE_ROUTE, [AuthRouter, UserRouter]);

export default app;
