import { Router } from "express";
const router = Router();



import { all, single, filtrarProductos } from "../controllers/productos.js";


router.get("/single/:id",single);
router.get("/", all);//saque el /all
router.get("/categoria/:categoria", filtrarProductos);

export default router;
