const model = require("../../models/usuarios");
const { get: getEmpresas} = require("../../models/empresas");
const { get: getPersonas} = require("../../models/personas");
const { get: getImgUsuarios } = require("../../models/usuariosimagen");

const all = async (req, res) => {
  try {
    console.log(req.params);
    const usuarios = await model.get(); // [{}]
    const imgUsuarios = await getImgUsuarios(); // [{}]
    const empresas= await getEmpresas();
    const personas= await getPersonas();
    res.json(usuarios, imgUsuarios,empresas,personas);
   // res.status(200).json(usuarios, imgUsuarios,empresas,personas);
  } catch (e) {
    console.log(e);
  }
};

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const [usuario] = await model.single(id);
    const [persona] = await model.single(id); // [{}]
    const [empresa] = await model.single(id); // [{}]
    const [imgUsuario] = await model.single(id);
    console.log(usuario);
    
    res.json(usuario, persona, empresa, imgUsuario);
   
  } catch (e) {
    console.log(e);
  }
};

module.exports = { all,single};