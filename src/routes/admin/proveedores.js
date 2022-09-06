import { Router } from "express";
const router = Router();

import multer from "multer"; // agrega al req ( el file para poder subir archivos) req.file
const config = { dest: `./public/tmp` };//creo una variable con el destino temporal
const upload = multer(config);//se lo agrego a otra variable llamando a multer

import { all, singleUpdate, update, create, del } from "../../controllers/admin/proveedores.js";

router.get("/", all);
router.get("/del/:id", del);

router.get("/create", (req, res) => res.json({req:req.body,file:req.file}));
router.post("/create", upload.single("uid"), create); 

router.get("/singleUpdate", (req, res) => res.json({req:req.body,file:req.file}));

router.get("/singleUpdate/:id", singleUpdate);
router.post("/update/:id", update);


export default router;