var express = require("express");
const router = express.Router();

 
const {faqs} = require("../controllers/faqs");

router.get("/",faqs);
module.exports = router;