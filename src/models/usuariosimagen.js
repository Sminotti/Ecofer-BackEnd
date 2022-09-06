import pool from "../utils/bd.js";
const T_USUARIOS = "usuarios";
const T_USUARIOS_IMAGES = "usuariosimagen";

const get = () =>
  pool
    .query(
      "SELECT usuarios.id,usuariosimagen.id FROM ?? JOIN ?? ON usuariosimagen.idUsuarios = usuarios.id WHERE habilitado = ?",
      [T_USUARIOS, T_USUARIOS_IMAGES, true]
    )
    .then((resultado) => resultado)
    .catch((e) => e);

const single = (id) =>
  pool
    .query("SELECT * FROM ?? JOIN ?? ON ")
    .then((resultado) => resultado)
    .catch((e) => e);

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_USUARIOS, obj])
    .then((result) => result)
    .catch((e) => e);

const createImages = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_USUARIOS_IMAGES, obj])
    .then((result) => result)
    .catch((e) => e);

export { create, createImages, get, single };
