const { response } = require("express");
const pool = require("../utils/bd");
const T_CLIENTES = "clientes";
const T_CLIENTES_IMAGENES = "clientesimagen";
const T_PERSONAS = "personas";
const T_EMPRESAS = "empresas";


const get = () => 
  pool 
  .query( 
    "SELECT cliImg.id ,cliImg.uid as nombreImagen, cliImg.idCliente, cli.id FROM ?? as cliImg JOIN ?? as cli ON clidImg.idCliente = cli.id JOIN ?? as per ON  cli.idPersona = per.id JOIN ?? as emp ON cli.idEmpresa = emp.id where cli.habilitado = 1",
    [T_CLIEMTES_IMAGENES,T_CLIENTES,T_PERSONAS, T_EMPRESAS]
  )
  .then((resultado) => resultado)
  .catch((e) =>e);


  const single = (id) => 
  pool 
  .query( 
    "SELECT cliImg.id ,cliImg.uid as nombreImagen, cliImg.idCliente, cli.id FROM ?? as cliImg JOIN ?? as cli ON clidImg.idCliente = cli.id JOIN ?? as per ON  cli.idPersona = per.id JOIN ?? as emp ON cli.idEmpresa = emp.id where cli.habilitado = 1 AND cli.habilitado = 1",
    [T_CLIEMTES_IMAGENES,T_CLIENTES,T_PERSONAS, T_EMPRESAS]
  )
  .then((resultado) => resultado)
  .catch((e) =>e);

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_CLIENTES, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

const createImages = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_CLIENTES_IMAGENES, obj])
    .then((response) => response)
    .catch((e) => console.log(e));


    const update = (obj, id) =>
    pool
      .query("UPDATE ?? SET ? where id = ?", [T_CLIENTES, obj, id])
      .then((resultado) => resultado)
      .catch((e) => e);
  
  module.exports = { create, createImages, get, single, update };
