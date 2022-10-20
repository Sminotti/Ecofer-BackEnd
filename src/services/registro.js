import { create as createPersona } from "./../models/personas.js";
import { create as createEmpresa } from "./../models/empresas.js";
import { create as createUser, createImages } from "./../models/usuarios.js";
import {create as createCliente } from "./../models/clientes.js" 

//const { imgFile } = require("../utils/fileHandler");
//import default from "./../services/mail";
import { send } from "./../services/mail.js";
import sha1 from "sha1";
import { v4 as uids } from "uuid";
import { v2 as cloudinary } from "cloudinary";

const register = async (body, file,path) => {

  cloudinary.config({
    upload_preset: process.env.upload_preset,
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    secure: true,
  });

  try {
    const imagenCloudinary = await cloudinary.uploader.upload(
      path,
      function (error, result) {
        console.log(result, error);
      }
    );

    const linkUnico = uids();
    const { insertId: idPersona } = await createPersona({
      nombre: body.nombre,
      apellido: body.apellido,
      mail: body.mail,
      telefono: body.telefono,
      dni: body.dni,
      cuitCuil: body.cuitCuil,
      direccion: body.direccion,
      codPostal: body.codPostal,
    });

    const { insertId: idEmpresa } = await createEmpresa({
      razonSocial: body.razonSocial,
      nombreFantasia: body.nombreFantasia,
    });

    const { insertId: idUsuarios } = await createUser({
      usuario: body.usuario,
      password: sha1(body.password),
      idEmpresa,
      idPersona,
      confirmacionCorreo: linkUnico,
    });

const { insertId:idCliente} = await createCliente({
  idUsuarios,
  idEmpresa,
  idPersona,
})

    const uid = imagenCloudinary.secure_url; // retorna la ruta de la imagen
    const idCloudinary = imagenCloudinary.public_id;
    const obj = { idUsuarios, uid, idCloudinary };

    // const uid = imgFile(file); // retorna el name de la imagen
    // const obj = { idUsuarios, uid };
    // const { insertId: idFile } = await createImages(obj);
    const { insertId: idFile } = await createImages(obj);

    const mailObject = {
      mail: body.mail,
      message: `
        <h2>Gracias por registrarte ${body.nombre} ${body.apellido}</h2>
        <h3>No olvides hacer click en el enlace para activar tu cuenta </h3>
        <div style="background: gray ;">
          <a href=${process.env.URL_SERVER}:${process.env.PORT}/registro/verify?linkUnico=${linkUnico}>Haga click aqui para activar su cuenta </a>
        <div/>
      `,
    };
    await send(mailObject);
    console.log("para: ", body.mail);
    return idUsuarios;
  } catch (e) {
    console.log(e);
  }
};

export { register };
