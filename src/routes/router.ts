import { Router } from "express";
import { validate } from "../middleware/validateBody.js";
import { getCharacters } from "../controllers/cache-characters.js";
import { clearCharactersCache } from "../controllers/clear-characters-cache.js";


export const router = Router();


// router.post('/signup', validate(signup, signupSchema) )

router.get('/get-characters', validate(getCharacters))

router.delete('/clear-characters-cache', validate(clearCharactersCache))
