import { response } from "express";
import pool from "../utils/bd.js";
const T_USUARIOS = "usuarios";
const T_USUARIOS_IMAGES = "usuariosimagen";


const get = () =>
pool.query("SELECT usu.id,usuImg.id, usuImg.uid as imagenUsuario FROM ?? as usuImg JOIN ?? as usu ON usuImg.idUsuarios = usu.id WHERE habilitado = 1"[  
      T_USUARIOS,T_USUARIOS_IMAGES
    ])
    .then((resultado) => resultado)
    .catch((e) => e);

const create = (obj) =>
pool.query("INSERT INTO ?? SET ?", [T_USUARIOS, obj])
    .then((result) => result)
    .catch((e) => e);

const createImages = (obj) =>
pool.query("INSERT INTO ?? SET ?", [T_USUARIOS_IMAGES, obj])
    .then((result) => result)
    .catch((e) => e);


export { create, createImages, get };