const pool = require ("../utils/bd");
const T_TAREAS ="tareaslista";

const get = () =>
  pool
    .query("SELECT * FROM ?? WHERE habilitado = 1", [
T_TAREAS,
    ])
    .then((response) => response)
    .catch((e) => e);

const del = (id) =>
  pool
    .query("UPDATE INTO ?? SET habilitado = 0,eliminado = 1 WHERE id = ?", [
      T_TAREAS,id
    ])
    .then((response) => response)
    .catch((e) => e);

const create = (obj) =>
  pool
    .query("INSER INTO ?? SET ?", [T_TAREAS, obj])
    .then((response) => response)
    .catch((e) => e);

module.exports = {
  get,
  create,
  del,
};
