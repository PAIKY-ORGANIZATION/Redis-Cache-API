import './bootstrap.js'



import express from 'express';
import { errorMiddleware } from 'custom-exceptions-express';


import { router as usersRouter } from './routes/reddis-app-router.js';
import { router as loggerRouter } from './routes/logger-router.js';
import { reqLogger } from './middleware/req-logger-middleware.js';

const app = express();
app.use(express.json());

//Custom middleware
app.use(reqLogger)

//Routes
app.use('/api',  usersRouter);
app.use('/api',  loggerRouter);

//Error Middleware
app.use(errorMiddleware) // Optional, recommended

// I exported the app for testing in vitest without running the server:
export default app
