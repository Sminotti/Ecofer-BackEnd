var express = require("express");
const router = express.Router();

const {all} = require("../controllers/admin/usuarios");
//const {index} = require("../controllers/index");

//router.get("/",index);
router.get("/",all);
module.exports = router;
 