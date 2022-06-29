import model from "./../models/productos";
import default from "./../models/prodimagenes";
const { get: getImgProductos, single: imgSingle } = default;
import _default from "./../models/proveedores";
const { get: getProveedores } = _default;
import __default from "./../models/categoriasProd";
const { get: getCategorias } = __default;


const all = async (req, res) => {
  try {
    console.log(req.params);
    const imgProductos = await getImgProductos();
    const productos = await model.get();
    const proveedores = await getProveedores();
    const categoriasProd = await getCategorias();
    res.json( productos, imgProductos, proveedores, categoriasProd);
    
  } catch (e) {
    console.log(e);
  }
};

const single = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const [imgProducto] = await imgSingle(id);
    const [producto] = await model.single(id);
    const [proveedor] = await model.single(id);
    const [categoriaProd] = await model.single(id);
    res.json(producto, imgProducto, proveedor, categoriaProd);
  
  } catch (e) {
    console.log(e);
  }
};


const filtrarProductos = async (req,res) => {
  try {
    const {categoria} = req.params;
    const productos = await model.filtrarProductos(categoria);
    const categoriasProd = await getCategorias();
    res.json( productos);
  
  } catch (e) {
    console.log(e);
  }
};

export default { all, single, filtrarProductos };



