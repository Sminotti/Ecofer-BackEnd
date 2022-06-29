import { Router } from "express";
const router = Router();

import { all, single, create, del } from "../../controllers/admin/ventas";

router.get("/all", all);
router.get("/single", single)
router.post("/create", create);
router.get("/del/:id", del);

export default router;
