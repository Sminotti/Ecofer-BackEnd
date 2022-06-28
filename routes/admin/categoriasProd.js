const express = require("express");
const router = express.Router();


const {all,create,singleUpdate,update,del}= require("../../controllers/admin/categoriasProd");


router.get("/", all);
router.get("/del/:id", del);

router.post("/create", create);

router.get("/singleUpdate/:id", singleUpdate);
router.post("/update/:id", update);

module.exports = router;
