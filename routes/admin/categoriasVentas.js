import { Router } from "express";
const router = Router();

import { all, create, del } from "../../controllers/admin/categoriasVentas.js";;

router.post("/create", create);
router.get("/", all);
router.get("/del/:id", del);

export default router;
