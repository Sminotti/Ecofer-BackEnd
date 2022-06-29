import pool from "../utils/bd.js";
const T_PERSONAS = "personas";

const get = () =>
  pool.query("SELECT * FROM ?? WHERE habilitado = 1 and id = ?", [T_PERSONAS])
    .then((result) => result)
    .catch((e) => e);

const single = (id) =>
pool.query("SELECT * FROM ?? WHERE habilitado = 1", [T_PERSONAS, id])
    .then((result) => result)
    .catch((e) => e);

const create = (obj) =>
pool.query("INSERT INTO ?? SET ?", [T_PERSONAS, obj])
    .then((response) => response)
    .catch((e) => e);

const del = (id) =>
pool.query("UPDATE SET ?? SET habilitado = 0, eleminado = 1 where id = ?", [
      T_PERSONAS,
      id,
    ])
    .then((response) => response)
    .catch((e) => e);

export default { get, single, create, del };
