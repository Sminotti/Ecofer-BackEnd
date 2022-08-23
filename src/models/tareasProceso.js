import pool from "../utils/bd";
const T_TAREAS_PROCESO = "tareaProceso";

const get = () =>
pool.query("SELECT * FROM ?? WHERE habilitado = 1", [
    T_TAREAS_PROCESO,
        ])
    .then((response) => response)
    .catch((e) => e);

const del = (id) =>
pool.query("UPDATE INTO ?? SET habilitado = 0,eliminado = 1 WHERE id = ?", [
    T_TAREAS_PROCESO,id
  ])
    .then((response) => response)
    .catch((e) => e);

const create = (obj) =>
pool.query("INSER INTO ?? SET ?", [T_TAREAS_PROCESO, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

export {
  get,
  create,
  del,
};