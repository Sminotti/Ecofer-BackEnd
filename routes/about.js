import { Router } from "express";
const router = Router();

import { all } from "../controllers/about";

router.get("/",all);
export default router;