const model = require("../../models/proveedores");


const all = async (req, res) => {
  console.log("se muestra" )
  try {
    const proveedores = await model.get(); // [{}]
    res.json(proveedores);
    //res.render("adminProveedores", {proveedores});
  } catch (e) {
    // res.render("error");
    console.log(e)
  }
};

const single = async (req, res) => {
  const { id } = req.params;
  const [proveedor] = await model.get(id); // [{}]
  res.json(proveedor);
  //res.render("adminProveedor", { proveedor });
};

const create = async (req, res) =>
  model
    .create(req.body)
    .then((resultado) => console.log("se creo exitosamente"))
    .catch((e) => console.log(e));

// const create = async (req, res) => {
//     const idFile = await service.createProveedores(req.body, req.file);
//     res.redirect("/admin/proveedores/all");
// };

const singleUpdate = async (req, res) => {
    const { id } = req.params;
    const [updateProveedor] = await model.single(id);
    res.json(updateProveedor);
    //res.render("adminUpdateProveedor", { updateProveedor });
};

const update = async (req, res) =>{
  model
    .update(req.body, req.params.id)
    .then((resultado) => console.log("se actualizo correctamente"))
    .catch((e) => console.log(e));
    console.log(req.body)
};

const del = async (req, res) => {
  try {
    const { id } = req.params;
    await model.del(id);
    // res.redirect("/admin/proveedores/all");
  } catch (error) {
    // res.render("error");
    console.log(error);
  }
};

module.exports = { all,single,singleUpdate,update,create,del};