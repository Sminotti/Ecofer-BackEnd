const express = require("express");
const router = express.Router();

const {allProceso,createProceso,delProceso}= require("../../controllers/admin/tareasProceso");

router.post("/create", createProceso);
router.get("/", allProceso);
router.get("/del/:id", delProceso);

module.exports = router;