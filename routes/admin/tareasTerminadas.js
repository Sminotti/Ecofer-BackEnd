const express = require("express");
const router = express.Router();

const {allTerminada,createTerminada,delTerminada}= require("../../controllers/admin/tareasTerminadas");

router.post("/create", createTerminada);
router.get("/", allTerminada);
router.get("/del/:id", delTerminada);

module.exports = router;