import {createClient} from "redis";


export const redisClient =  createClient({
    socket: {
        host: process.env.REDIS_HOST!,
        port: Number(process.env.REDIS_PORT)!  
    }
})

try{
    await redisClient.connect();
}catch(e){
    throw new Error('Cannot reach Redis on ' + process.env.REDIS_HOST + ':' + process.env.REDIS_PORT)
}