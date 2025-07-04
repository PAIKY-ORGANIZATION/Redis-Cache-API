import { Request, Response } from 'express';
import { characterKey } from '../../lib/character_redis_key.js';
import { redisClient } from '../../lib/redis.js';

export const clearCharactersCache = async(_req: Request, res: Response)=>{
    await redisClient.del(characterKey)
    res.json({message: 'Cache cleared'})
}