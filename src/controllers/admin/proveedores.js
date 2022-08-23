import { get, del as delProv, create as createProv, update as updateProv } from "../../models/proveedores.js";

const all = async (req, res) => {
  try {
    const proveedores = await get(); // [{}]
    res.json(proveedores);
  } catch (e) {
    console.log(e)
  }
};

const single = async (req, res) => {
  const { id } = req.params;
  const [proveedor] = await get(id); // [{}]
  res.json(proveedor);
};

const create = async (req, res) =>
  createProv(req.body)
    .then((resultado) => console.log("se creo exitosamente"))
    .catch((e) => console.log(e));

const singleUpdate = async (req, res) => {
  const { id } = req.params;
  const [updateProveedor] = await single(id);
  res.json(updateProveedor);
};

const update = async (req, res) => {
  updateProv(req.body, req.params.id)
    .then((resultado) => console.log("se actualizo correctamente"))
    .catch((e) => console.log(e));
  console.log(req.body)
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