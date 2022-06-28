const { response } = require("express");
const pool = require("../utils/bd");
const T_USUARIOS = "usuarios";
const T_USUARIOS_IMAGES = "usuariosimagen";
const T_EMPRESAS = "empresas";
const T_PERSONAS = "personas";

const get = () =>
  pool
    .query(
      "SELECT * FROM ?? JOIN ?? ON usuarios.idPersona = personas.id JOIN ?? ON usuarios.idEmpresa = empresas.id JOIN ?? ON usuariosimagen.idUsuarios = usuarios.id WHERE usuarios.habilitado = ?",
      [T_USUARIOS, T_PERSONAS, T_EMPRESAS, T_USUARIOS_IMAGES, true]
    )
    .then((response) => response)
    .catch((e) => e);

const single = (id) =>
  pool
    .query(
      "SELECT * FROM ?? JOIN ?? ON usuarios.idPersona = personas.id JOIN ?? ON usuarios.idEmpresa = empresas.id JOIN ?? ON usuariosimagen.idUsuarios = usuarios.id WHERE usuarios.habilitado = ? and usuarios.id = ?",
      [(T_USUARIOS, T_PERSONAS, T_EMPRESAS, T_USUARIOS_IMAGES, true, id)]
    )
    .then((response) => response)
    .catch((e) => e);

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_USUARIOS, obj])
    .then((response) => response)
    .catch((e) => e);

const createImages = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_USUARIOS_IMAGES, obj])
    .then((response) => response)
    .catch((e) => e);

const update = ({ linkUnico = "", id, data }) =>
  pool
    .query("UPDATE ?? SET ? WHERE confirmacionCorreo = ? OR id = ?", 
    [T_USUARIOS, data, linkUnico, id,]
    )
    .then((result) => result)
    .catch((e) => e);

module.exports = { create, createImages, get, single, update };
