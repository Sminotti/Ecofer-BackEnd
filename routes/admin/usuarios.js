const express = require("express");
const router = express.Router();

const {all,single}= require("../../controllers/admin/usuarios");

router.get("/single/:id", single);
router.get("/", all);

module.exports = router;
