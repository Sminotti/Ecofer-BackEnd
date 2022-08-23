import pool from "../utils/bd.js";
const T_EMPRESAS = "empresas";

const get = () =>
  pool.query(
      "SELECT emp.id, emp.razonSocial, emp.nombreFantasia, emp.cuil, emp.direccionE, emp.codPostalE FROM ?? as emp WHERE habilitado = 1",
      [T_EMPRESAS]
    )
    .then((result) => result)
    .catch((e) => e);

const single = (id) =>
  pool.query(
      "SELECT emp.id, emp.razonSocial, emp.nombreFantasia, emp.cuil, emp.direccionE, emp.codPostalE FROM ?? as emp WHERE habilitado = 1 and emp.id = ?",
      [T_EMPRESAS, id]
    )
    .then((result) => result)
    .catch((e) => e);

const create = (obj) =>
  pool.query("INSERT INTO ?? SET ?", [T_EMPRESAS, obj])
    .then((response) => response)
    .catch((e) => e);

const del = (id) =>
  pool.query("UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", [
      T_EMPRESAS,
      id,
    ])
    .then((response) => response)
    .catch((e) => e);

export { get, single, create, del };
