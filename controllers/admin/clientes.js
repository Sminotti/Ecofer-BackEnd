import { get as getClientes, single as singleClientes, del as delClientes, update as updateClientes } from "../../models/clientes.js";
import { get as getImgClientes, single as singleCliImag } from "../../models/cliimagenes.js";
import { get as getEmpresas, single as singleEmpresas } from "../../models/empresas.js";
import { get as getPersonas, single as singlePersonas } from "../../models/personas.js";

const all = async (req, res) => {
  try {
    const clientes = await getClientes(); // [{}]
    const imgClientes = await getImgClientes(); // [{}]
    const empresas = await getEmpresas(); // [{}]
    const personas = await getPersonas(); // [{}]

    res.json(clientes, imgClientes, empresas, personas);
  } catch (error) {
    console.log(error);
  }
};

const single = async (req, res) => {
  try {

    const { id } = req.params;
    const [imgCliente] = await singleCliImag(id);
    const [cliente] = await singleClientes(id);
    const [persona] = await singlePersonas(id);
    const [empresa] = await singleEmpresas(id);

    res.json(cliente, imgCliente, empresa, persona);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {

  const idFile = await service.createCliente(req.body, req.file);
  //res.redirect("/admin/clientes/all");
};

const del = async (req, res) => {
  try {
    const { id } = req.params;
    await delClientes(id);

  } catch (error) {
    console.log(error);
  }
};

const singleUpdate = async (req, res) => {
  try {

    const { id } = req.params;
    const [updateImgCliente] = await singleCliImag(id);
    const [updateCliente] = await singleClientes(id);
    const [updatePersona] = await singlePersonas(id);
    const [updateEmpresa] = await singleEmpresas(id);
    //res.json(updateImgCliente, updateCliente, updatePersona, updateEmpresa);
    res.render("adminUpdateProducto", { updateImgCliente, updateCliente, updatePersona, updateEmpresa });
  } catch (error) {
    console.log(error);
  }
};


const update = async (req, res) => {
  updateClientes(req.body, req.params.id)
    .then((resultado) => console.log("Se actualizo correctamente") )
    .catch((e) => console.log(error));
};


export { all, create, del, singleUpdate, single, update };