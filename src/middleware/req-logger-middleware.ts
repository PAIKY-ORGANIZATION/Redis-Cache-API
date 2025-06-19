import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import { writeFileSync } from 'fs';

export const reqLogger = async(req: Request, res: Response, next: NextFunction)=>{


    console.log(req.socket?.remoteAddress);
    console.log(req.ip);
    
    
    
    

    const country = axios.get('https://country.is/')

    const log  = 




    console.log();
    // writeFileSync()
    next()
}