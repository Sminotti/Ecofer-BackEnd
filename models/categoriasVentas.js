const pool = require("../utils/bd");
const T_CATEGORIAVENTAS = "categoriaventas";

const get = () =>
  pool
    .query("SELECT categoriaventas.id, categoriaventas.nombre FROM ?? WHERE habilitado = 1", [
      T_CATEGORIAVENTAS,
    ])
    .then((result) => result)
    .catch((e) => e);

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_CATEGORIAVENTAS, obj])
    .then((response) => response)
    .catch((e) => e);

const del = (id) =>
  pool
    .query("UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", [T_CATEGORIAVENTAS,id,])
    .then((response) => response)
    .catch((e) => e);



module.exports = { get, create, del };
