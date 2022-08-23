import { Router } from "express";
const router = Router();

import { all } from "../controllers/about.js";

router.get("/",all);
export default router;