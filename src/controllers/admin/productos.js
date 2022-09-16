import {
  get as getProductos,
  del as delProductos,
  single as singleProductos,
} from "../../models/productos.js";
import {
  get as getImgProductos,
  single as singlePordImg,
} from "../../models/prodimagenes.js";
import {
  get as getProveedores,
  single as singleProv,
} from "../../models/proveedores.js";
import {
  get as getCategorias,
  single as singleCatProd,
} from "../../models/categoriasProd.js";
import service from "../../services/productos.js";

const all = async (req, res) => {
  try {
    const productos = await getProductos(); // [{}]
    const imgProductos = await getImgProductos(); // [{}]
    const proveedores = await getProveedores(); // [{}]
    const categoriasProd = await getCategorias(); // [{}]
    console.log("tabla de productos:",productos);
    res.json(productos, imgProductos, proveedores, categoriasProd);
  } catch (error) {
    console.log("all:", error);
  }
};

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const [imgProducto] = await singlePordImg(id);
    const [producto] = await singleProductos(id);
    const [proveedor] = await singleProv(id);
    const [categoriaProd] = await singleCatProd(id);
    console.log("single tabla de productos:",producto);
    res.json(producto, imgProducto, proveedor, categoriaProd);
  } catch (error) {
    console.log("error single:", error);
  }
};

const create = async (req, res) => {
  try {
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
  } catch (error) {
    console.log("error del crear:", error);
  }
};

const del = async (req, res) => {
  try {
    const { id } = req.params;
    await delProductos(id);

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
    const [updateImgProducto] = await singlePordImg(id);
    const [updateProducto] = await singleProductos(id);
    const [updateProveedor] = await singleProv(id);
    const [updateCategoriaProd] = await singleCatProd(id);
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
  try {
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
  } catch (error) {
    console.log("error update:", error);
  }
};

export { all, single, create, singleUpdate, update, del };
