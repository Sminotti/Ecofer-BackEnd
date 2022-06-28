const model = require("./../models/productos");
const { get: getImgProductos, single: imgSingle} = require("./../models/prodimagenes");
const { get: getProveedores } = require("./../models/proveedores");
const { get: getCategorias } = require("./../models/categoriasProd");


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

module.exports = { all, single, filtrarProductos };



