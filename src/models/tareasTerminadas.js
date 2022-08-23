import pool from "../utils/bd";
const T_TAREAS_TERMINADAS = "tareaTerminada";

const get = () =>
pool.query("SELECT * FROM ?? WHERE habilitado = 1", [
    T_TAREAS_TERMINADAS,
        ])
    .then((response) => response)
    .catch((e) => e);

const del = (id) =>
pool.query("UPDATE INTO ?? SET habilitado = 0,eliminado = 1 WHERE id = ?", [
    T_TAREAS_TERMINADAS,id
  ])
    .then((response) => response)
    .catch((e) => e);

const create = (obj) =>
pool.query("INSER INTO ?? SET ?", [T_TAREAS_TERMINADAS, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

export {
  get,
  create,
  del,
};