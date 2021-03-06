import { response } from "express";
import pool from "./../utils/bd.js";
const T_CLIENTES = "clientes";
const T_PERSONAS = "personas";
const T_EMPRESAS = "empresas";
const T_CLIENTES_IMAGENES = "clientesimagen";

const get = () => 
pool.query(
    "SELECT cli.id , per.id, per.nombre as nombrepersona, per.apellido as apellidosPersona, per.dni as dniPersona, per.cuit as cuitPersona, per.mail as mailPersona, per.telefono as telPersona, emp.id, emp.razonSocial as titularEmpresa, emp.nombreFantasia as nombreEmpresa, emp.cuil as cuilEmpresa, emp.direccion as direccionEmpresa, emp.codPostal as codposEmpresa FROM ?? as cli JOIN ?? as per ON cli.idPersonas = personas.id JOIN ?? as emp ON cli.idEmpresas = empresas.id where doc.habilitado = ?",
    [T_CLIENTES, T_PERSONAS, T_EMPRESAS, true]
  )
  .then((resultado) => resultado)
  .catch((e) =>e);

const single = (id) => 
pool.query (
    "SELECT cli.id , per.id, per.nombre as nombrepersona, per.apellido as apellidosPersona, per.dni as dniPersona, per.cuit as cuitPersona, per.mail as mailPersona, per.telefono as telPersona, emp.id, emp.razonSocial as titularEmpresa, emp.nombreFantasia as nombreEmpresa, emp.cuil as cuilEmpresa, emp.direccion as direccionEmpresa, emp.codPostal as codposEmpresa FROM ?? as cli JOIN ?? as per ON cli.idPersonas = personas.id JOIN ?? as emp ON cli.idEmpresas = empresas.id where doc.habilitado = ? and doc.id = ?",
    [T_CLIENTES, T_PERSONAS, T_EMPRESAS, true, id]
  )
  .then((resultado) => resultado)
  .catch((e) =>e);

const create = (obj) =>
pool.query("INSERT INTO ?? SET ?", [T_CLIENTES, obj])
    .then((result) => result)
    .catch((e) => e);

const createImages = (obj) =>
pool.query("INSERT INTO ?? SET ?", [T_CLIENTES_IMAGENES, obj])
    .then((result) => result)
    .catch((e) => e);

const del = (id) =>
pool.query("UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", [
      T_CLIENTES,
      id,
    ])
    .then((result) => result)
    .catch((e) => e);

const update = (obj, id) =>
pool.query(
      "UPDATE ?? JOIN ?? ON clientes.idPersonas = personas.id JOIN ?? ON clientes.idEmpresas = empresas.id JOIN ?? ON clientesimagen.idCliente = clientes.id  SET ? where clientes.id = ?",
      [T_CLIENTES, T_PERSONAS, T_EMPRESAS, T_CLIENTES_IMAGENES, obj, id]
    )
    .then((resultado) => resultado)
    .catch((e) => console.log(e));

export { get, single, create, createImages, del, update };
