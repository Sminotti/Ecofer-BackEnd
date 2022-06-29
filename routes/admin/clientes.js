import { Router } from "express";
const router = Router();

import multer from "multer"; // agrega al req ( el file para poder subir archivos) req.file
const config = { dest: `./public/tmp` };//creo una variable con el destino temporal
const upload = multer(config);//se lo agrego a otra variable llamando a multer
//import service from "../../services/clientes";

import { all, create, del, singleUpdate, single, update } from "../../controllers/admin/clientes.js";


router.get("/all", all)
router.get("/del/:id", del);
router.get("/single/:id", single);

router.get("/create", (req, res) => res.render("adminClientes"));
router.post("/create", upload.single("uid"), create); 

router.get("/singleUpdate/:id", singleUpdate);
router.post("/update/:id", update);


export default router;
