import { Router } from "express";
const router = Router();


import { all, create, singleUpdate, update, del } from "../../controllers/admin/categoriasProd.js";


router.get("/", all);
router.get("/del/:id", del);

router.post("/create", create);

router.get("/singleUpdate/:id", singleUpdate);
router.post("/update/:id", update);

export default router;
