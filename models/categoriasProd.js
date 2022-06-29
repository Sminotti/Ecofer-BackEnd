import { query } from "../utils/bd.js";
const T_CATEGORIASPROD = "categoriaproductos";
//const bd = require("../utils/dbknex");

const get = () =>
  query("SELECT catProd.id, catProd.agExtintor, catProd.clase, catProd.descripcion, catProd.fuegos, catprod.aplicativos FROM ?? as catProd WHERE habilitado = 1", [
      T_CATEGORIASPROD,
    ])
    .then((resultado) => resultado)
    .catch((e) => e);

/*const get =()=>
    bd(process.env.T_CATEGORIAPRODUCTOS)
      .select("id","nombre", "descripcion")
      .where({habilitado: 1});*/

const single = (id) =>
  query("SELECT catProd.id, catProd.agExtintor, catProd.clase, catProd.descripcion, catProd.fuegos, catprod.aplicativos FROM ?? as catProd WHERE habilitado = 1 and catProd.id = ?", [
      T_CATEGORIASPROD,id
    ])
    .then((resultado) => resultado)
    .catch((e) => e);

const create = (obj) =>
  query("INSERT INTO ?? SET ?", [T_CATEGORIASPROD, obj])
    .then((resultado) => resultado)
    .catch((e) => e);

const del = (id) =>
  query("UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", [T_CATEGORIASPROD,id,])
    .then((resultado) => resultado)
    .catch((e) => e);

const update = (obj,id) =>
  query("UPDATE ?? SET ? where id = ?", [T_CATEGORIASPROD, obj, id])
    .then((resultado) => resultado)
    .catch((e) => e);

export default { get, create, del, update, single };
