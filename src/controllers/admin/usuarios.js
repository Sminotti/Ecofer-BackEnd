import { get as getUsuarios, single as singleUsuarios } from "../../models/usuarios.js";
import { get as getEmpresas, single as singleEmpresa } from "../../models/empresas.js";
import { get as getPersonas, single as singlePersona } from "../../models/personas.js";
import { get as getImgUsuarios, single as singleImgUsuario } from "../../models/usuariosimagen.js";

const all = async (req, res) => {
  try {
    console.log(req.params);
    const usuarios = await getUsuarios(); // [{}]
    const imgUsuarios = await getImgUsuarios(); // [{}]
    const empresas = await getEmpresas();
    const personas = await getPersonas();
    //res.json(usuarios, imgUsuarios, empresas, personas);
    res.status(200).json(usuarios, imgUsuarios,empresas,personas);
  } catch (e) {
    console.log(e);
  }
};

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const [usuario] = await singleUsuarios(id);
    const [persona] = await singlePersona(id); // [{}]
    const [empresa] = await singleEmpresa(id); // [{}]
    const [imgUsuario] = await singleImgUsuario(id);
    console.log(usuario);

    res.json(usuario, persona, empresa, imgUsuario);
  } catch (e) {
    console.log(e);
  }
};

export { all, single };
