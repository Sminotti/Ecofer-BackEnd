import { register } from "./../services/registro.js";

import {update as updateUsuario } from './../models/usuarios.js';
// const registroUsuario=false;

const create = async (req, res) => {
  console.log("veo el req.body:",req.body);
  console.log("veo el req:",req);
    try {
    
      const idFile = await register(req.body, req.file,req.file.path);
      console.log("ver idFile: ", idFile);
      
      res.json({
        body: req.body,
        imagen: req.file,
        idFile: idFile,
        estado: "succes",
        message: "Usuario registrado, se envío un mail a tu casilla "
      });
    } catch (e) {
      console.log(e);
    }
  };
  
  const verifyEmail = async (req,res) =>{
    try {
      console.log("verify",req.query);
      const {linkUnico} = req.query;
      await updateUsuario({linkUnico,data:{habilitado: 1}})
      res.json({
        estado: "succes",
        message:"usuario habilitado",
        link:"http://localhost:4200/login"
      });
     
      // obtenemos el uid que se recibe como query string cuando el ususario ingresa a la url del mail
      // busca el undefined
      // si existe habillita
      // si no existe -> 404
    } catch (error) {
      console.log(error);
    }
    
  };

  export {create,verifyEmail};