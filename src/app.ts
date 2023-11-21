import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/Student/student.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

//applications route

app.use('/api/v1/students', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'server is running' });
});

export default app;
