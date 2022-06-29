
import { query } from "../utils/bd.js";
const T_USUARIOS = "usuarios";
const T_USUARIOSIMAGEN = "usuariosimagen";

const auth = ({ usuario, password }) =>
  query(
      "SELECT usuarios.id,usuarios.idPersona,usuarios.idEmpresa,usuarios.role,usuarios.usuario,usuarios.password,usuariosimagen.uid FROM ?? JOIN ?? ON usuariosimagen.idUsuarios = usuarios.id WHERE usuario = ? and password = ? and usuarios.habilitado = 1 and usuarios.eliminado = 0",
      [T_USUARIOS, T_USUARIOSIMAGEN, usuario, password]
    )
    .then((response) =>response)
    .catch((e) => e);


export default { auth };
