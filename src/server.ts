import 'reflect-metadata';
import express from 'express';
import usersRouter from './routes/usersRouter';
import './database';

const app = express();

app.use(express.json());
app.use('/user', usersRouter.router)

app.listen(3000, () => console.log('Server is running on port: 3000'))