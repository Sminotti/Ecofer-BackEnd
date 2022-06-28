const { create: createPersona } = require("./../models/personas");
const { create: createEmpresa } = require("./../models/empresas");
const { create: createUser, createImages } = require("./../models/usuarios");
//const { imgFile } = require("../utils/fileHandler");
const { send } = require("./../services/mail");
const sha1 = require("sha1");
const { v4: uids } = require("uuid");
const cloudinary = require("cloudinary").v2;

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

module.exports = { register };
