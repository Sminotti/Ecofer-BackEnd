import { query } from "../utils/bd.js";
const T_CATEGORIAVENTAS = "categoriaventas";

const get = () =>
  query("SELECT categoriaventas.id, categoriaventas.nombre FROM ?? WHERE habilitado = 1", [
      T_CATEGORIAVENTAS,
    ])
    .then((result) => result)
    .catch((e) => e);

const create = (obj) =>
  query("INSERT INTO ?? SET ?", [T_CATEGORIAVENTAS, obj])
    .then((response) => response)
    .catch((e) => e);

const del = (id) =>
  query("UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", [T_CATEGORIAVENTAS,id,])
    .then((response) => response)
    .catch((e) => e);



export default { get, create, del };
