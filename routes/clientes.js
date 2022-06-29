import { Router } from "express";
const router = Router();
import { get, single as _single } from "./../models/clientes.js";
import { get as getImgClientes } from "./../models/cliimagenes.js";

const all = async (req, res) => {
  try {
    const clientes = await get(); // [{}]
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
  const [cliente] = await _single(id);
  //res.json(client,imgClientes);
  res.render("cliente", { cliente, imgClientes });
};
router.get("/single/:id", single);
router.get("/all", all);

export default router;
