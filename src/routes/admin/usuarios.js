import { Router } from "express";
const router = Router();

import { all, single } from "../../controllers/admin/usuarios.js";

router.get("/", all);
router.get("/single/:id", single);

export default router;
