import { get, create as createVentas, del as delVentas } from "../../models/categoriasVentas.js";

const all = async (req, res) => {
  console.log(req.params);
  try {
    const categoriasVentas = await get(); // [{}]
    //res.json(categoriasVentas);
    res.render("adminCategoriasVentas", { categoriasVentas });
  } catch (e) {
    console.log(e);
  }
};

const create = async (req, res) =>

  createVentas(req.body)
    .then((resultado) => res.redirect("/admin/categoriasVentas/all"))
    .catch((e) => console.log(e));

const del = async (req, res) => {
  try {
    const { id } = req.params;
    await delVentas(id);
    res.redirect("/admin/categoriasVentas/all");
  } catch (error) {
    console.log(e);
  }
};

export { all, create, del };