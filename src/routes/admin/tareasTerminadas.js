import { Router } from "express";
const router = Router();

import { allTerminada, createTerminada, delTerminada } from "../../controllers/admin/tareasTerminadas";


router.get("/", allTerminada);
router.post("/create", createTerminada);
router.get("/del/:id", delTerminada);

export default router;