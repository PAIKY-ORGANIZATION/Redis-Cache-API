import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import { writeFileSync } from 'fs';

export const reqLogger = async(req: Request, res: Response, next: NextFunction)=>{

    // console.log( req.headers['x-client-ip']);
    // console.log(req.headers['x-forwarded-for']?.split(',')[0]?.trim());
    // console.log(req.headers['cf-connecting-ip']);
    // console.log(req.headers['true-client-ip']);
    // console.log(req.headers['x-real-ip']);
    // console.log(req.headers['x-cluster-client-ip']);
    // console.log(req.connection?.remoteAddress);
   console.log(req.socket?.remoteAddress);
    
    
    
    

    const country = axios.get('https://country.is/')

    const log  = 




    console.log();
    // writeFileSync()
    next()
}