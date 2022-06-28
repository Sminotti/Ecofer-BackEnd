
const fs = require("fs"); // Propio de nodejs// lee el archivo temporal
const { v4: uuid } = require("uuid");// renombro al archivo con un nombre unico
const allowExtension = ["png", "jpeg", "jpg"];// extenciones permitidas
// mimetype

const deleteTemp = (file) => fs.unlink(file, (e) => console.log(e));//variable que borra el temporal//fs.unlink(archivo),permite manejar el archivo
// mimetype
//gurada el archivo
//{los datos que necesito del archivo,extencionPermitida,destinoCarpetaTemporal}


const saveFile = ({ mimetype, size, path },allowE,destFolder = `../FrontEnd/src/assets/images`) => {
  try {
    // mimetype="video/mp4"
    const [type, extension] = mimetype.split("/");//separo mimetype
    if (!allowE.includes(extension)) throw "Formato incorrecto";//si no es la extencion correcta tira un error
    const uid = uuid(); // creando un id unico :D
    const fileName = `${uid}.${extension}`;//nombreUnico.extension 
    const fileNameOut = `${destFolder}/${uid}.${extension}`;//lo guardo en la carpeta temporal

    fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));//leo el temporal de la ruta (path) y lo creo en una imagen
    //pipe.lee en forma vidireccional izq-der,der-izq,a medida que lee convierte a imagen el temporal
    deleteTemp(path);//ya convertida la imagen borra el temporal
    return fileName;// lo retorno para poder utilizarlo en el servicio
  } catch (e) {
    deleteTemp(path);//si no se subio el archivo con la extension correcta tambien borro el temporal
    console.error(e);
  }
};

const imgFile = (file) => saveFile(file, allowExtension);//el imgFile recive el archivo y el saveFile lo guarda.

module.exports = { imgFile };
