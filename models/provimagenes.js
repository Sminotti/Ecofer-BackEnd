import { response } from "express";
import { query } from "../utils/bd";
const T_PROVEEDORES = "proveedores";
const T_IMGPROVEEDORES= "proveedoresimagen";

const get = () =>
  query("SELECT provImg.id, provImg.uid as imagenProveedor, ProvImg.idProveedor, prov.id, prov.razonSocial, prov.nombreFantasia as nombreProv, prov.contacto, prov.direccion, prov.codPostal, prov.cuil, prov.telefono, prov.localidad, prov.observacionesProv FROM ?? as provImg JOIN ?? as prov ON provImg.idProveedor = prov.id WHERE prov.habilitado = 1", [
      T_IMGPROVEEDORES, T_PROVEEDORES
    ])
    .then((response) => response)
    .catch((e) => e);

const single = (id) =>
  query("SELECT provImg.id, provImg.uid as imagenProveedor, ProvImg.idProveedor, prov.id, prov.razonSocial, prov.nombreFantasia as nombreProv, prov.contacto, prov.direccion, prov.codPostal, prov.cuil, prov.telefono, prov.localidad, prov.observacionesProv FROM ?? as provImg JOIN ?? as prov ON provImg.idProveedor = prov.id WHERE prov.habilitado = 1 and prov.id = ?", [
      IMGPROVEEDORES, T_PROVEEDORES,id
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
    .catch((e) => console.log(e));

const del = (id) =>
  query("UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", [T_PROVEEDORES,id])
    .then((response) => response)
    .catch((e) => e);

const update = (obj,id) =>
  query("UPDATE ?? SET ? where id = ?", [T_PROVEEDORES, obj, id])
    .then((response) => response)
    .catch((e) => e);

export default { get, single, create, createImages, del, update };
