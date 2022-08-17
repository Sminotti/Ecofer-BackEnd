import { get as getProductos} from "./../models/productos.js";
import { get as getImgProductos, single as imgSingle } from "./../models/prodimagenes.js";
import { get as getProveedores } from "./../models/proveedores.js";
import { get as getCategorias } from "./../models/categoriasProd.js";

const all = async (req, res) => {
  try {
    console.log(req.params);
    const imgProductos = await getImgProductos();
    const productos = await getProductos();
    const proveedores = await getProveedores();
    const categoriasProd = await getCategorias();
    res.json(productos, imgProductos, proveedores, categoriasProd);
  } catch (e) {
    console.log(e);
  }
};

const single = async (req, res) => {
  try {
    console.log("veo el req.paams del sigle",req.params);
    const { id } = req.params;
    const [imgProducto] = await imgSingle(id);
    const [producto] = await single(id);
    const [proveedor] = await single(id);
    const [categoriaProd] = await single(id);
    res.json(producto, imgProducto, proveedor, categoriaProd);
  } catch (e) {
    console.log(e);
  }
};

const filtrarProductos = async (req, res) => {
  try {
    const { categoria } = req.params;
    const productos = await model.filtrarProductos(categoria);
    const categoriasProd = await getCategorias();
    res.json(productos, categoriasProd);
  } catch (e) {
    console.log(e);
  }
};

export { all, single, filtrarProductos };
