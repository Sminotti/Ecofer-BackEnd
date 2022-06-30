import pool from "../utils/bd.js";
const T_CATEGORIASPROD = "categoriaproductos";

const get = () =>
  pool.query("SELECT catProd.id, catProd.agExtintor, catProd.clase, catProd.descripcion, catProd.fuegos, catprod.aplicativos FROM ?? as catProd WHERE habilitado = 1", [
      T_CATEGORIASPROD,
    ])
    .then((resultado) => resultado)
    .catch((e) => e);

const single = (id) =>
pool.query("SELECT catProd.id, catProd.agExtintor, catProd.clase, catProd.descripcion, catProd.fuegos, catprod.aplicativos FROM ?? as catProd WHERE habilitado = 1 and catProd.id = ?", [
      T_CATEGORIASPROD,id
    ])
    .then((resultado) => resultado)
    .catch((e) => e);

const create = (obj) =>
pool.query("INSERT INTO ?? SET ?", [T_CATEGORIASPROD, obj])
    .then((resultado) => resultado)
    .catch((e) => e);

const del = (id) =>
pool.query("UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", [T_CATEGORIASPROD,id,])
    .then((resultado) => resultado)
    .catch((e) => e);

const update = (obj,id) =>
pool.query("UPDATE ?? SET ? where id = ?", [T_CATEGORIASPROD, obj, id])
    .then((resultado) => resultado)
    .catch((e) => e);

export { get, create, del, update, single };
