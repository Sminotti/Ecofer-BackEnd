var express = require("express");
const router = express.Router();

const {all} = require("../controllers/about");

router.get("/",all);
module.exports = router;