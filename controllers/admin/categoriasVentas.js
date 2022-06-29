import model from "../../models/categoriasVentas";

const all = async (req, res) => {
  console.log(req.params);
  try {
    const categoriasVentas = await model.get(); // [{}]
    //res.json(categoriasVentas);
    res.render("adminCategoriasVentas", { categoriasVentas });
  } catch (e) {
   console.log(e);
  }
};

const create = async (req, res) =>
  model
    .create(req.body)
    .then((resultado) => res.redirect("/admin/categoriasVentas/all"))
    .catch((e) => console.log(e));

const del = async (req, res) => {
  try {
    const { id } = req.params;
    await model.del(id);
    res.redirect("/admin/categoriasVentas/all");
  } catch (error) {
    console.log(e);
  }
};

export default { all,create,del};