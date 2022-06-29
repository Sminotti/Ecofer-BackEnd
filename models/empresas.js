import { query } from "../utils/bd";
const T_EMPRESAS = "empresas";

const get = () =>
  query(
      "SELECT emp.id, emp.razonSocial, emp.nombreFantasia, emp.cuil, emp.direccionE, emp.codPostalE FROM ?? as emp WHERE habilitado = 1",
      [T_EMPRESAS]
    )
    .then((result) => result)
    .catch((e) => e);

const single = (id) =>
  query(
      "SELECT emp.id, emp.razonSocial, emp.nombreFantasia, emp.cuil, emp.direccionE, emp.codPostalE FROM ?? as emp WHERE habilitado = 1 and emp.id = ?",
      [T_EMPRESAS, id]
    )
    .then((result) => result)
    .catch((e) => e);

const create = (obj) =>
  query("INSERT INTO ?? SET ?", [T_EMPRESAS, obj])
    .then((response) => response)
    .catch((e) => e);

const del = (id) =>
  query("UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", [
      T_EMPRESAS,
      id,
    ])
    .then((response) => response)
    .catch((e) => e);

export default { get, single, create, del };
