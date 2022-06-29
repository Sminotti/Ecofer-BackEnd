
import { create, createImages } from "../models/proveedores";
import { imgFile } from "../utils/fileHandler";

const createProveedores = async (body, file) => {
  try {
    const { insertId: idProveedores } = await create(body); // retorna el insertId
    const uid = imgFile(file); // retorna el name de la imagen
    const obj = { idProveedores, uid };
    const { insertId: idFile } = await createImages(obj);
    return idFile;
  } catch (e) {
    console.error(e);
  }
};


export default { createProveedores };
