const express = require("express");
const router = express.Router();

const multer = require("multer"); // agrega al req ( el file para poder subir archivos) req.file
const config = { dest: `./public/tmp` };//creo una variable con el destino temporal
const upload = multer(config);

const {all,single,create,singleUpdate,update,del}= require("../../controllers/admin/productos");



router.get("/", all)//saque el /all
router.get("/del/:id", del);
router.get("/single/:id", single); 

router.get("/create", (req, res) => res.json({req:req.body,file:req.file}));
router.post("/create", upload.single("uid"), create); // aca tendria que recibir la imagen desde angular

 router.get("/singleUpdate", (req, res) => res.json({req:req.body,file:req.file}));

 router.get("/singleUpdate/:id",singleUpdate);
 router.post("/update/:id",  upload.single("uid"), update);


module.exports = router;
 