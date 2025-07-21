import './bootstrap.js'



import express from 'express';
import { errorMiddleware } from 'custom-exceptions-express';


import { router as usersRouter } from './routes/redis-app-router.js';
import { router as loggerRouter } from './routes/logger-router.js';
import reqLoggerExpress  from 'req-logger-express';

const app = express();
app.use(express.json());

//Custom middleware
app.use(reqLoggerExpress('Redis_Cache_API')) //* This appName will be for Postgres

//Routes
app.use('/api',  usersRouter);
app.use('/api',  loggerRouter);

//Error Middleware
app.use(errorMiddleware) // Optional, recommended

// I exported the app for testing in vitest without running the server:
export default app
