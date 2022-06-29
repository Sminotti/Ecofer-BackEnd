import { create, createImages, update, updateImage } from "../models/productos.js";
import { v2 as cloudinary } from "cloudinary";

const createProducto = async (body, file, path) => {
  cloudinary.config({
    upload_preset: process.env.upload_preset,
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    secure: true,
  });

  datosProducto = {
    nombre: body.nombre,
    idCategoria: body.idCategoria,
    IdProveedor: body.idProveedor,
    kilos: body.kilos,
    numeroSerie: body.numeroSerie,
    observacionesProd: body.observacionesProd,
    precioVenta: body.precioVenta,
    precioCosto: body.precioCosto,
    unidades: body.unidades,
  };

  try {
    const imagenCloudinary = await cloudinary.uploader.upload(
      path,
      function (error, result) {
        console.log(result, error);
      }
    );

    const { insertId: idProductos } = await create(datosProducto); // retorna el insertId
    const uid = imagenCloudinary.secure_url; // retorna la ruta de la imagen
    const idCloudinary = imagenCloudinary.public_id;
    const obj = { idProductos, uid, idCloudinary };

    const { insertId: idFile } = await createImages(obj);

    return idFile;
  } catch (e) {
    console.error(e);
  }
};

const actualizarProducto = async (body, file, idProducto, path) => {
borrarImagenAnterior = body.idCloudinary;
  datosProducto = {
    // id: body.id,
    nombre: body.nombre,
    idCategoria: body.idCategoria,
    IdProveedor: body.idProveedor,
    kilos: body.kilos,
    numeroSerie: body.numeroSerie,
    observacionesProd: body.observacionesProd,
    precioVenta: body.precioVenta,
    precioCosto: body.precioCosto,
    unidades: body.unidades,
  };

  try {
    cloudinary.config({
      upload_preset: process.env.upload_preset,
      cloud_name: process.env.cloud_name,
      api_key: process.env.api_key,
      api_secret: process.env.api_secret,
      secure: true,
    });

    // actualiza los datos del producto
    await update(datosProducto, idProducto);

    // sube la imagen nueva
    const imagenCloudinary = await cloudinary.uploader.upload(
      path,
      function (error, result) {
        console.log("imagenCloudinary:", result, error);
      }
    );

    // elimina la imagen anterior
    cloudinary.uploader.destroy(borrarImagenAnterior, function (error, result) {console.log(result, error)});

    // actualiza la base de datos
    const uid = imagenCloudinary.secure_url; // guarado la ruta de la imagen
    const idCloudinary = imagenCloudinary.public_id;
    const obj = { uid, idCloudinary }; // creo el objeto con el id del porducto y el nombre de la imagen

    await updateImage(obj, idProducto); // actualizo la URL de la imagen y el ic de la misma.
  } catch (e) {
    console.error(e);
  }
};

export default { createProducto, actualizarProducto };

