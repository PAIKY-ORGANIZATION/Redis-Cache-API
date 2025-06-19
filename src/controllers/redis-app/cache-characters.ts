import axios from 'axios';
import { Request, Response } from 'express';
import { redisClient } from '../../lib/redis.js';
import { characterKey } from '../../lib/character_redis_key.js';


export const getCharacters = async(_req: Request, res: Response)=>{
    
    const start = Date.now()

    // Check if the data is in cache
    const cachedData = await redisClient.get(characterKey) //A string, example: 'Morty Smith'

    if (cachedData) { // If the data is in cache, send it immediately and return.
        const response = {
            isCached: true,
            durationMs: (Date.now() - start).toString() + 'ms', // Example: '123ms' 
            character: cachedData
        }
        res.json(response)
        return
    }

    // If the data is not in cache:
    //1. Get the data from the API
    //2. Set the data in cache
    //3. Send the data
    const APIresponse = await axios.get<RickAndMortyAPIresponse>('https://rickandmortyapi.com/api/character')

    const data = APIresponse.data.results[1].name //A string, example: 'Morty Smith'

    await redisClient.set(characterKey, data)

    const serverResponse = {
        isCached: false,
        durationMs: (Date.now() - start).toString() + 'ms', // Example: '123ms' 
        character: data
    }

    res.json(serverResponse)
}