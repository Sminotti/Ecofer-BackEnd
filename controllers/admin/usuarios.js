import model from "../../models/usuarios";
import default from "../../models/empresas";
const { get: getEmpresas } = default;
import _default from "../../models/personas";
const { get: getPersonas } = _default;
import __default from "../../models/usuariosimagen";
const { get: getImgUsuarios } = __default;

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

export default { all,single};