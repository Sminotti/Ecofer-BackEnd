import { Router } from "express";
const router = Router();

import { all, createTarea, delTarea } from "../../controllers/admin/tareas.js";

router.get("/", all);// se carga el arra de cliente y tareas

router.post("/create", createTarea);

router.get("/del/:id", delTarea);

export default router;
