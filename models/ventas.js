const { response } = require("express");
const pool = require("../utils/bd");
const T_VENTAS = "ventas";
const T_PRODUCTOS = "productos";
const T_CLIENTES = "clientes";

const get = async () => {
    const query =
    "SELECT ventas.id ventas.factura, ventas.montoBruto, ventas.montoNeto, ventas.impuestos as otrosImpuestos, ventas.iva, ventas.idCliente, cli.id FROM ?? JOIN ?? as prod ON ventas.idProductos = prod.id JOIN ?? as cli ON ventas.idCliente = cli.id WHERE habilitado = ?";
    const params = [T_VENTAS, T_PRODUCTOS,T_CLIENTES, true];
    return await pool.query(query, params);
  };
  const single = async (id) => {
    const query =
    "SELECT ventas.id ventas.factura, ventas.montoBruto, ventas.montoNeto, ventas.impuestos as otrosImpuestos, ventas.iva, ventas.idCliente, cli.id FROM ?? JOIN ?? as prod ON ventas.idProductos = prod.id JOIN ?? as cli ON ventas.idCliente = cli.id WHERE habilitado = ? and ventas.id = id";
    const params = [T_VENTAS, T_PRODUCTOS,T_CLIENTES, true, id];
    return await pool.query(query, params);
  };

  const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_VENTAS, obj])
    .then((result) => result)
    .catch((e) => e);

    const del = (id) =>
  pool
    .query("UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", [
        T_VENTAS,
      id,
    ])
    .then((result) => result)
    .catch((e) => e);

module.exports = { get, single, create, del };
