const express = require("express");
const router = express.Router();

const multer = require("multer"); // agrega al req ( el file para poder subir archivos) req.file
const config = { dest: `./public/tmp` };//creo una variable con el destino temporal
const upload = multer(config);//se lo agrego a otra variable llamando a multer
const service = require("../../services/proveedores");

const {all,single,singleUpdate,update,create,del}= require("../../controllers/admin/proveedores");

router.get("/", all);
router.get("/del/:id", del);
router.get("/single/:id", single);

router.get("/create", (req, res) => console.log("proveedor creado exitosamente"));
router.post("/create", upload.single("uid"), create); 
//router.post("/create", create);

router.get("/singleUpdate/:id", singleUpdate);
router.post("/update/:id", update);


module.exports = router;