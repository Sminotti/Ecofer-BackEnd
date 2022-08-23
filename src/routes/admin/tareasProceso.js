import { Router } from "express";
const router = Router();

import { allProceso, createProceso, delProceso } from "../../controllers/admin/tareasProceso";

router.post("/create", createProceso);
router.get("/", allProceso);
router.get("/del/:id", delProceso);

export default router;