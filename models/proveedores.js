import { response } from "express";
import { query } from "../utils/bd.js";
const T_PROVEEDORES = "proveedores";

const get = () =>
  query("SELECT prov.id, prov.razonSocial, prov.nombreFantasia, prov.contacto, prov.direccion, prov.codPostal, prov.cuil, prov.telefono, prov.localidad, prov.observacionesProv FROM ?? as prov WHERE prov.habilitado = 1" , [
      T_PROVEEDORES
    ])
    .then((response) => response)
    .catch((e) => e);

const single = (id) =>
  query("SELECT prov.id, prov.razonSocial, prov.nombreFantasia, prov.contacto, prov.direccion, prov.codPostal, prov.cuil, prov.telefono, prov.localidad, prov.observacionesProv FROM ?? as prov WHERE prov.habilitado = 1 and prov.id = ?", [
        T_PROVEEDORES,id
     ])
    .then((response) => response)
    .catch((e) => e);

    const del = (id) =>
    query("UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", [
        T_PROVEEDORES,
        id,
      ])
      .then((response) => response)
      .catch((e) => e);

const create = (obj) =>
  query("INSERT INTO ?? SET ?", [T_PROVEEDORES,obj])
    .then((response) => response)
    .catch((e) => e);

const createImages = (obj) =>
  query("INSERT INTO ?? SET ?", [T_IMGPROVEEDORES, obj])
    .then((response) => response)
    .catch((e) => e);

const update = (obj,id) =>
  query("UPDATE ?? SET ? where id = ?", [T_PROVEEDORES, obj, id])
    .then((response) => response)
    .catch((e) => e);

export default { get, single, del, create, createImages, update };
