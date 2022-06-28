const model = require("../../models/categoriasProd");

const all = async (req, res) => {
  try {
    const categoriasProd = await model.get(); // [{}]
    res.json(categoriasProd);
  } catch (e) {
    console.log(e);
  }
};

const create = async (req, res) =>
  model
    .create(req.body)
    .then((resultado) => console.log("se creo exitosamente"))
    .catch((e) => console.log(e));

const del = async (req, res) => {
  try {
    const { id } = req.params;
    await model.del(id);

    console.log("eliminado exitosamente");
  } catch (error) {
    console.log(error);
  }
};

const singleUpdate = async (req, res) => {
  const { id } = req.params;
  const [updateCat] = await model.single(id);
  res.json(updateCat);
};

const update = async (req, res) => {
  model
    .update(req.body, req.params.id)
    .then((resultado) => console.log("se actualizo exitosamente"))
    .catch((e) => console.log(e));
  console.log(req.body);
};

module.exports = { all, create, singleUpdate, update, del };
