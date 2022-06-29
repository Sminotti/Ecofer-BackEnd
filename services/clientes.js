
import { create, createImages } from "../models/clientes";
import { imgFile } from "../utils/fileHandler";

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

export default { createCliente };