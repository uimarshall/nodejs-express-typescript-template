import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send(
    'Express + TypeScript Configurations + Linting + found solution, better'
  );
});
app.get('/greet', (req: Request, res: Response) => {
  res.send('Hello Guys');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
