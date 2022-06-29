import { Router } from "express";
const router = Router();

 
import { faqs } from "../controllers/faqs.js";

router.get("/",faqs);
export default router;