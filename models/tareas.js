import { query } from "../utils/bd";
const T_TAREAS ="tareaslista";

const get = () =>
  query("SELECT * FROM ?? WHERE habilitado = 1", [
T_TAREAS,
    ])
    .then((response) => response)
    .catch((e) => e);

const del = (id) =>
  query("UPDATE INTO ?? SET habilitado = 0,eliminado = 1 WHERE id = ?", [
      T_TAREAS,id
    ])
    .then((response) => response)
    .catch((e) => e);

const create = (obj) =>
  query("INSER INTO ?? SET ?", [T_TAREAS, obj])
    .then((response) => response)
    .catch((e) => e);

export default {
  get,
  create,
  del,
};
