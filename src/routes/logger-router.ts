import { Router } from "express";
import { validate } from "../middleware/validateBody.js";
import { clearRequestLogs, getRequestLogs } from "../controllers/request-logs.js";
//*types:





export const router = Router();


router.get('/getrequestlogs', validate(getRequestLogs) )

router.delete('/clearrequestlogs', clearRequestLogs)

