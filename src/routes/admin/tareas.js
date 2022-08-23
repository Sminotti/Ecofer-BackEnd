import { Router } from "express";
const router = Router();

import { allTarea, createTarea, delTarea } from "../../controllers/admin/tareas.js";

router.get("/", allTarea);

router.post("/create", createTarea);

router.get("/del/:id", delTarea);

export default router;
