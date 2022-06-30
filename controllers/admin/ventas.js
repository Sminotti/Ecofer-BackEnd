import { get, single as singleVentas, create as createVentas, del as delVentas } from "./../../models/ventas.js";

const all = async (req, res) => {
  try {
    console.log(req.session.idUser);
    console.log(req.id);
    const ventas = await get();
    res.json(ventas);
  } catch (e) {
    console.log(e);
  }
};

const single = async (req, res) => {
  const { id } = req.params;
  const [venta] = await singleVentas(id);
  res.json(venta);
};

const create = async (req, res) =>
createVentas(req.body)
    .then((resultado) => resultado)
    .catch((e) => console.log(e));

const del = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  delVentas(id);
};

export { all, single, create, del };