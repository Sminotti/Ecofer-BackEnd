import { Router } from "express";
const router = Router();

import { all, single } from "../../controllers/admin/usuarios.js";

router.get("/single/:id", single);
router.get("/", all);

export default router;
