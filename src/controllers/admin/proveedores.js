import {
  get,
  del as delProv,
  create as createProv,
  single as singleProv,
  update as updateProv,
} from "../../models/proveedores.js";

const all = async (req, res) => {
  try {
    const proveedores = await get(); // [{}]
    res.json(proveedores);
  } catch (e) {
    console.log(e);
  }
};

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const proveedor = await singleProv(id); // [{}]
    res.json(proveedor);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) =>
  createProv(req.body)
    .then((resultado) => resultado)
    .catch((e) => console.log(e));

const singleUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const [updateProveedor] = await single(id);
    console.log("proveedor:",updateProveedor)
    res.json(updateProveedor);  
  } catch (error) {
    console.log(error);
  }
  
};

const update = async (req, res) => {
  updateProv(req.body, req.params.id)
    .then((resultado) => resultado)
    .catch((e) => console.log(e));
  console.log(req.body);
};

const del = async (req, res) => {
  try {
    const { id } = req.params;
    await delProv(id);
  } catch (error) {
    console.log(error);
  }
};

export { all, single, singleUpdate, update, create, del };
