import './bootstrap.js'



import express from 'express';
import { errorMiddleware } from './middleware/error-middlewate.js';
import { router } from './routes/router.js';

const app = express();
app.use(express.json());

app.use((req, _res, next)=>{
    console.log(req.path, req.body);
    
    next()
})



app.use('/api',  router);
app.use(errorMiddleware)



//* I exported the app for testing vitest:
export default app
