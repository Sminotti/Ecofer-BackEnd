import model from "../../models/productos";
import default from "../../models/prodimagenes";
const { get: getImgProductos } = default;
import _default from "../../models/proveedores";
const { get: getProveedores } = _default;
import __default from "../../models/categoriasProd";
const { get: getCategorias } = __default;
import service from "../../services/productos";

import { response } from "express";
// const adminProducto=false;

const all = async (req, res) => {
  try {
    const productos = await model.get(); // [{}]
    const imgProductos = await getImgProductos(); // [{}]
    const proveedores = await getProveedores(); // [{}]
    const categoriasProd = await getCategorias(); // [{}]
    res.json(productos, imgProductos, proveedores, categoriasProd);
  } catch (error) {
    console.log("all:", error);
  }
};

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const [imgProducto] = await model.single(id);
    const [producto] = await model.single(id);
    const [proveedor] = await model.single(id);
    const [categoriaProd] = await model.single(id);
    res.json(producto, imgProducto, proveedor, categoriaProd);
  } catch (error) {
    console.log("error single:", error);
  }
};

const create = async (req, res) => {
  const idFile = await service.createProducto(
    req.body,
    req.file,
    req.file.path // carpeta de donde agarra la imagen cloudinary para subirla
  );

  res.json({
    body: req.body,
    imagen: req.file,
    idFile: idFile,
    estado: "succes",
    message: "Producto creado exitosamente",
  });
  // adminProducto=true;
};

const del = async (req, res) => {
  try {
    // adminProducto=true;
    const { id } = req.params;
    await model.del(id);

    res.json({
      estado: "succes",
      message: "Producto eliminado",
    });
  } catch (error) {
    console.log("muestra el error de eliminar: ", error);
  }
};

const singleUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const [updateImgProducto] = await model.single(id);
    const [updateProducto] = await model.single(id);
    const [updateProveedor] = await model.single(id);
    const [updateCategoriaProd] = await model.single(id);
    res.json(
      updateProducto,
      updateImgProducto,
      updateProveedor,
      updateCategoriaProd
    );
  } catch (error) {
    console.log("singleUpdate:", error);
  }
};

const update = async (req, res) => {
  await service.actualizarProducto(
    req.body,
    req.file,
    req.params.id,
    req.file.path
  );

  res.json({
    body: req.body,
    imagen: req.file,
    id: req.params.id,
    estado: "succes",
    message: "Producto actualizado exitosamente",
  });
};

export default { all, single, create, singleUpdate, update, del };
