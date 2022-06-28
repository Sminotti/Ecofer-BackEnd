const express = require("express");
const router = express.Router();

const {all,single,create,del}= require("../../controllers/admin/ventas");

router.get("/all", all);
router.get("/single", single)
router.post("/create", create);
router.get("/del/:id", del);

module.exports = router;
