import pool from "../utils/bd.js";
const T_VENTAS = "ventas";
const T_PRODUCTOS = "productos";
const T_CLIENTES = "clientes";

const get = () =>
  pool.query(
    "SELECT ventas.id ventas.factura, ventas.montoBruto, ventas.montoNeto, ventas.impuestos as otrosImpuestos, ventas.iva, ventas.idCliente, cli.id FROM ?? JOIN ?? as prod ON ventas.idProductos = prod.id JOIN ?? as cli ON ventas.idCliente = cli.id WHERE habilitado = ?",
    [T_VENTAS, T_PRODUCTOS, T_CLIENTES, true]
  )
    .then((response) => response)
    .catch((e) => e);

const single = (id) =>
  pool.query(
    "SELECT ventas.id ventas.factura, ventas.montoBruto, ventas.montoNeto, ventas.impuestos as otrosImpuestos, ventas.iva, ventas.idCliente, cli.id FROM ?? JOIN ?? as prod ON ventas.idProductos = prod.id JOIN ?? as cli ON ventas.idCliente = cli.id WHERE habilitado = ? and ventas.id = id",
    [T_VENTAS, T_PRODUCTOS, T_CLIENTES, true, id]
  )
    .then((response) => response)
    .catch((e) => e);

const create = (obj) =>
pool.query(
  "INSERT INTO ?? SET ?", [T_VENTAS, obj]
)
    .then((result) => result)
    .catch((e) => e);

const del = (id) =>
pool.query(
  "UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", 
  [ T_VENTAS, id,]
  )
    .then((result) => result)
    .catch((e) => e);

export { get, single, create, del };
