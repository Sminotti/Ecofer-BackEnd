import { Router } from "express";
const router = Router();

 
import { faqs } from "../controllers/faqs";

router.get("/",faqs);
export default router;