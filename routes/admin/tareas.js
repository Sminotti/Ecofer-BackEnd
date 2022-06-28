const express = require("express");
const router = express.Router();

const {allTarea,createTarea,delTarea}= require("../../controllers/admin/tareas");

router.get("/", allTarea);

router.post("/create", createTarea);

router.get("/del/:id", delTarea);

module.exports = router;
