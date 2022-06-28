const { response } = require("express");
const pool = require("../utils/bd");
const T_PROVEEDORES = "proveedores";
const T_IMGPROVEEDORES= "proveedoresimagen";

const get = () =>
  pool
    .query("SELECT provImg.id, provImg.uid as imagenProveedor, ProvImg.idProveedor, prov.id, prov.razonSocial, prov.nombreFantasia as nombreProv, prov.contacto, prov.direccion, prov.codPostal, prov.cuil, prov.telefono, prov.localidad, prov.observacionesProv FROM ?? as provImg JOIN ?? as prov ON provImg.idProveedor = prov.id WHERE prov.habilitado = 1", [
      T_IMGPROVEEDORES, T_PROVEEDORES
    ])
    .then((response) => response)
    .catch((e) => e);

const single = (id) =>
  pool
    .query("SELECT provImg.id, provImg.uid as imagenProveedor, ProvImg.idProveedor, prov.id, prov.razonSocial, prov.nombreFantasia as nombreProv, prov.contacto, prov.direccion, prov.codPostal, prov.cuil, prov.telefono, prov.localidad, prov.observacionesProv FROM ?? as provImg JOIN ?? as prov ON provImg.idProveedor = prov.id WHERE prov.habilitado = 1 and prov.id = ?", [
      IMGPROVEEDORES, T_PROVEEDORES,id
     ])
     .then((response) => response)
    .catch((e) => e);

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_PROVEEDORES,obj])
    .then((response) => response)
    .catch((e) => e);

const createImages = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_IMGPROVEEDORES, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

const del = (id) =>
  pool
    .query("UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", [T_PROVEEDORES,id])
    .then((response) => response)
    .catch((e) => e);

const update = (obj,id) =>
  pool
    .query("UPDATE ?? SET ? where id = ?", [T_PROVEEDORES, obj, id])
    .then((response) => response)
    .catch((e) => e);

module.exports = { get, single, create, createImages, del, update };
