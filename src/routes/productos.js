import { Router } from "express";
const router = Router();

import { all, single, filtrarProductos } from "../controllers/productos.js";
import { all as allCat } from "../controllers/admin/categoriasProd.js";

router.get("/single/:id", single);
router.get("/", all);

router.get("/categoria/:categoria", filtrarProductos);

export default router;
