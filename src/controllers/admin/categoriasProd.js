import {
  get,
  create as createCatProd,
  single,
  update as updateCatProd,
  del as delCatProd,
} from "../../models/categoriasProd.js";

const all = async (req, res) => {
  try {
    const categoriasProd = await get(); // [{}]
    console.log("categorias:",categoriasProd);
    res.json(categoriasProd);
  } catch (e) {
    console.log(e);
  }
};

const create = async (req, res) =>
  createCatProd(req.body)
    .then((resultado) => resultado)
    .catch((e) => console.log(e));

const del = async (req, res) => {
  try {
    const { id } = req.params;
    await delCatProd(id);
    console.log("eliminado exitosamente");
  } catch (error) {
    console.log(error);
  }
};

const singleUpdate = async (req, res) => {
  const { id } = req.params;
  const [updateCat] = await single(id);
  res.json(updateCat);
};

const update = async (req, res) => {
  updateCatProd(req.body, req.params.id)
    .then((resultado) => resultado)
    .catch((e) => console.log(e));
  console.log(req.body);
};

export { all, create, singleUpdate, update, del };
