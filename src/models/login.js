import pool from "../utils/bd.js";
const T_USUARIOS = "usuarios";
const T_USUARIOSIMAGEN = "usuariosimagen";
const T_PERSONA = "personas";

const auth = ({ usuario, password }) =>
  pool
    .query(
      "SELECT usuarios.id,usuarios.idPersona,usuarios.idEmpresa,usuarios.role,usuarios.usuario,personas.nombre,personas.apellido,usuariosimagen.uid FROM ?? JOIN ?? ON usuariosimagen.idUsuarios = usuarios.id JOIN ?? ON usuarios.idPersona = personas.id WHERE usuario = ? and password = ? and usuarios.habilitado = 1 and usuarios.eliminado = 0",
      [T_USUARIOS, T_USUARIOSIMAGEN, T_PERSONA,usuario, password]
    )
    .then((response) => response)
    .catch((e) => e);

export default auth;
