const { response } = require("express");
const pool = require("../utils/bd");
const T_PROVEEDORES = "proveedores";

const get = () =>
  pool
    .query("SELECT prov.id, prov.razonSocial, prov.nombreFantasia, prov.contacto, prov.direccion, prov.codPostal, prov.cuil, prov.telefono, prov.localidad, prov.observacionesProv FROM ?? as prov WHERE prov.habilitado = 1" , [
      T_PROVEEDORES
    ])
    .then((response) => response)
    .catch((e) => e);

const single = (id) =>
  pool
    .query("SELECT prov.id, prov.razonSocial, prov.nombreFantasia, prov.contacto, prov.direccion, prov.codPostal, prov.cuil, prov.telefono, prov.localidad, prov.observacionesProv FROM ?? as prov WHERE prov.habilitado = 1 and prov.id = ?", [
        T_PROVEEDORES,id
     ])
    .then((response) => response)
    .catch((e) => e);

    const del = (id) =>
    pool
      .query("UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", [
        T_PROVEEDORES,
        id,
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
    .catch((e) => e);

const update = (obj,id) =>
  pool
    .query("UPDATE ?? SET ? where id = ?", [T_PROVEEDORES, obj, id])
    .then((response) => response)
    .catch((e) => e);

module.exports = { get, single, del, create, createImages, update };
