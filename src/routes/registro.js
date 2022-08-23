import { Router } from "express";
const router = Router();

import multer from "multer"; // agrega al req ( el file para poder subir archivos) req.file
const config = { dest: `./public/tmp` };//creo una variable con el destino temporal
const upload = multer(config);//se lo agrego a otra variable llamando a multer

import { create, verifyEmail } from "../controllers/registro.js";

router.get("/");

router.get("/create", (req, res) => res.json({req:req.body,file:req.file}));
router.post("/create", upload.single("uid"), create); // aca tendria que recibir la imagen desde angular

router.get("/verify",verifyEmail);

export default router;
