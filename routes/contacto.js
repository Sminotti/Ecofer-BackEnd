import { Router } from "express";
const router = Router();

import { sendEmail } from "../controllers/contacto.js";

router.get("/", (req, res) => res.render("contacto"));
router.post("/sendEmail", sendEmail);

export default router;
