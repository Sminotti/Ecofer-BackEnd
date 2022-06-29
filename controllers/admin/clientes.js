import model from "../../models/clientes";
import default from "../../models/cliimagenes";
const { get: getImgClientes } = default;
import _default from "../../models/empresas";
const { get: getEmpresas } = _default;
import __default from "../../models/personas";
const { get: getPersonas } = __default;



const all = async (req, res) => {
  try {
    const clientes = await model.get(); // [{}]
    const imgClientes = await getImgClientes(); // [{}]
    const empresas = await getEmpresas(); // [{}]
    const personas = await getPersonas(); // [{}]
     //res.json(clientes, imgclientes, empresas, personas);
    res.render("adminClientes", { clientes, imgClientes, empresas, personas });
  } catch (error) {
    console.log(error);
  }
};

const single = async (req, res) => {
  try {
   
    const { id } = req.params;
    const [imgCliente] = await model.single(id);
    const [cliente] = await model.single(id);
    const [persona] = await model.single(id);
    const [empresa] = await model.single(id);
    //res.json(cliente, imgcliente, empresa, imgEmpresa);
    res.render("adminCliente", { cliente, imgCliente, empresa, persona });
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  
  const idFile = await service.createCliente(req.body, req.file);
  res.redirect("/admin/clientes/all");
};

const del = async (req, res) => {
  try {
    const { id } = req.params;
    await model.del(id);
    res.redirect("/admin/clientes/all");
  } catch (error) {
    console.log(error);
  }
};

const singleUpdate = async (req, res) => {
  try{
    
    const { id } = req.params;
    const [updateImgCliente] = await model.single(id);
    const [updateCliente] = await model.single(id);
    const [updatePersona] = await model.single(id);
    const [updateEmpresa] = await model.single(id);
    //res.json(updateImgCliente, updateCliente, updatePersona, updateEmpresa);
    res.render("adminUpdateProducto", { updateImgCliente, updateCliente, updatePersona, updateEmpresa });
  } catch (error) {
    console.log(error);
  }
};


const update = async (req, res) =>{
  model
    .update(req.body, req.params.id)
    .then((resultado) => res.redirect("/admin/clientes/all"))
    .catch((e) => console.log(error));
    
};


export default { all,create,del,singleUpdate,single,update};