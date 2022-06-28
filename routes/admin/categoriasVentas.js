const express = require("express");
const router = express.Router();

const {all,create,del} = require("../../controllers/admin/categoriasVentas");;

router.post("/create", create);
router.get("/", all);
router.get("/del/:id", del);

module.exports = router;
