
const { create, createImages } = require("../models/clientes");
const { imgFile } = require("../utils/fileHandler");

const createCliente = async (body, file) => {
  try {
    const { insertId: idEmpresa } = await create(body); // retorna el insertId
    const { insertId: idPersona } = await create(body); // retorna el insertId
    const uid = imgFile(file); // retorna el name de la imagen
    const obj = { idEmpresa, idPersona, uid };
    const { insertId: idFile } = await createImages(obj);
    return idFile;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { createCliente };