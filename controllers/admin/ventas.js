import model from "./../../models/ventas";
//const { get: getProductos } = require("./../../models/productos");

const all = async (req, res) => {
  try {
    console.log(req.session.idUser);
    console.log(req.id);
    const ventas = await model.get();
    //const productos = await getProductos();
    res.json(ventas);
    // res.render("adminventas", { ventas });
  } catch (e) {
    // res.sendStatus(500)
    console.log(e);
    //res.render('error')
  }
};

const single = async (req, res) => {
  const { id } = req.params;
  const [venta] = await model.single(id);
  res.json(venta);
  // res.render("venta", { venta });
};

const create = async (req, res) =>
  model
    .create(req.body)
    .then((resultado) => res.redirect("/admin/ventas/all"))
    .catch((e) => console.log(e));

const del = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  model.del(id);
  // res.redirect("/admin/ventas/all");
};

export default { all,single,create,del};