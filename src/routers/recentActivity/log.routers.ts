import { Router } from "express";
import { getLogActivityPage } from "../../controllers/logActivity/log.controllers.js";

const log_router = Router();

log_router.get("/log", getLogActivityPage)

export default log_router
