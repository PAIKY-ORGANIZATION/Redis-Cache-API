import {  expect, test, beforeAll } from "vitest";
import request from 'supertest'
import app from "../app-setup.js";
import { redisClient } from "../lib/redis.js";
import { characterKey } from "../lib/character_redis_key.js";




beforeAll(async() => {
    await redisClient.flushAll()  // Ensure the cache is empty. Fair test.
})

test('Cache should be empty', async () => {
    const cachedData = await redisClient.get(characterKey)
    expect(cachedData).toBeNull()
})

test('Should send Axios request and receive valid data', async()=>{

    const result = await request(app).get('/api/get-characters').send().expect(200)

    expect(result.body).toEqual(
        
        {
            message: 'success',
            success: true,
            data: {
                isCached: false,
                    durationMs: expect.any(String), 
                character: 'Morty Smith'
            }
        })
})
        
        
        

test('Should have cached data on request to "/api/get-characters"', async ()=>{
    const cachedData = await redisClient.get(characterKey)
    expect(cachedData).toBe('Morty Smith')
})

test('Should clear cache on request to "/api/clear-characters-cache"', async ()=>{
    await request(app).delete('/api/clear-characters-cache').send().expect(200)
    const cachedData = await redisClient.get(characterKey)
    expect(cachedData).toBeNull()
    // expect(cachedData).toBe('ADASDASDASD') //¡ JUST TO  TEST FAILURE ON AWS ON PURPOSE
})