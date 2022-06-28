const express = require("express");
const router = express.Router();
const model = require("./../models/clientes");
const { get: getImgClientes } = require("./../models/cliimagenes");

const all = async (req, res) => {
  try {
    const clientes = await model.get(); // [{}]
    const imgClientes = await getImgClientes(); // [{}]
    //res.json(clientes,imgClientes);
    res.render("clientes", { clientes, imgClientes });
  } catch (e) {
    res.render("error");
  }
};

const single = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const [cliente] = await model.single(id);
  //res.json(client,imgClientes);
  res.render("cliente", { cliente, imgClientes });
};
router.get("/single/:id", single);
router.get("/all", all);

module.exports = router;
