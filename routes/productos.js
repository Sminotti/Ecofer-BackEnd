const express = require("express");
const router = express.Router();



const {all,single,filtrarProductos} = require("../controllers/productos");


router.get("/single/:id",single);
router.get("/", all);//saque el /all
router.get("/categoria/:categoria", filtrarProductos);

module.exports = router;
