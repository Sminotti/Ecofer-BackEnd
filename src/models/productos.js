import pool from "../utils/bd.js";
const T_PRODUCTOS = "productos";
const T_PRODUCTOS_IMAGENES = "productosimagen";
const T_PROVEEDORES = "proveedores";
const T_CATEGORIASPROD = "categoriaproductos";

const get = () =>
  pool.query(
    "SELECT prod.id as idProducto, catProd.id as idCategoria, prov.id as idProveedores, prodImg.id as idImagen, prodImg.uid as imagenProducto, prodImg.idCloudinary ,prod.unidades as unidadesProducto, prod.nombre as nombreProducto, prod.observacionesProd, catProd.clase as claseProducto, catProd.fuegos, catProd.descripcion as descripcion, prod.idCategoria, catProd.agExtintor as agenteExtintor, prod.kilos as kilosProducto, prod.precioVenta, prod.numeroSerie, prov.nombreFantasia, prov.contacto as contactoProv, prov.telefono as telefonoProv, prov.observacionesProv, catprod.aplicativos FROM ?? as prod JOIN ?? as catProd ON idCategoria = catProd.id JOIN ?? as prov ON prod.idProveedor = prov.id JOIN ?? as prodImg ON prodImg.idProductos = prod.id WHERE prod.habilitado = ?",
    [T_PRODUCTOS, T_CATEGORIASPROD, T_PROVEEDORES, T_PRODUCTOS_IMAGENES, true]
  )
    .then((response) => response)
    .catch((e) => e);

const single = (id) =>
  pool.query(
    "SELECT prod.id as idProducto, catProd.id as idCategoria, prov.id as idProveedores, prodImg.id as idImagen, prodImg.uid as imagenProducto, prodImg.idCloudinary ,prod.unidades as unidadesProducto, prod.nombre as nombreProducto, prod.observacionesProd, catProd.clase as claseProducto, catProd.fuegos, catProd.descripcion as descripcion, prod.idCategoria, catProd.agExtintor as agenteExtintor, prod.kilos as kilosProducto, prod.precioVenta, prod.numeroSerie, prod.precioCosto, prov.nombreFantasia, prov.contacto as contactoProv, prov.telefono as telefonoProv, prov.observacionesProv, catprod.aplicativos FROM ?? as prod JOIN ?? as catProd ON idCategoria = catProd.id JOIN ?? as prov ON prod.idProveedor = prov.id JOIN ?? as prodImg ON prodImg.idProductos = prod.id WHERE prod.habilitado = ? AND prod.id = ?",
    [
      T_PRODUCTOS,
      T_CATEGORIASPROD,
      T_PROVEEDORES,
      T_PRODUCTOS_IMAGENES,
      true,
      id,
    ]
  )
    .then((response) => response)
    .catch((e) => e);

const filtrarProductosPorClase = (categoria) =>
  pool.query(
    "SELECT prod.id as idProducto, catProd.id as idCategoria, prov.id as idProveedores, prodImg.id, prodImg.uid as imagenProducto, prod.unidades as unidadesProducto, prod.nombre as nombreProducto, prod.observacionesProd, catProd.clase as claseProducto, catProd.fuegos, catProd.descripcion as descripcion, prod.idCategoria, catProd.agExtintor as agenteExtintor, prod.kilos as kilosProducto, prod.precioVenta, prod.numeroSerie, prov.nombreFantasia, prov.contacto as contactoProv, prov.telefono as telefonoProv, catprod.aplicativos FROM ?? as prod JOIN ?? as catProd ON idCategoria = catProd.id JOIN ?? as prov ON prod.idProveedor = prov.id JOIN ?? as prodImg ON prodImg.idProductos = prod.id WHERE prod.habilitado = ? AND prod.idCategoria = ?",
    [T_PRODUCTOS, T_CATEGORIASPROD, T_PROVEEDORES, T_PRODUCTOS_IMAGENES, true, categoria]
  )
    .then((response) => response)
    .catch((e) => e);

const del = (id) =>
  pool.query("UPDATE ?? SET habilitado = 0 , eliminado = 1 where id = ?", [
    T_PRODUCTOS,
    id,
  ])
    .then((response) => response)
    .catch((e) => e);

const create = (obj) =>// retorna el insertId
  pool.query("INSERT INTO ?? SET ?", [T_PRODUCTOS, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

const createImages = (obj) =>
  pool.query("INSERT INTO ?? SET ?", [T_PRODUCTOS_IMAGENES, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

const update = (obj, id) =>
  pool.query("UPDATE ?? JOIN ?? ON productos.idCategoria = categoriaproductos.id JOIN ?? ON productos.idProveedor = proveedores.id JOIN ?? ON productosimagen.idProductos = productos.id SET ? where productos.id = ?",
    [T_PRODUCTOS, T_CATEGORIASPROD, T_PROVEEDORES, T_PRODUCTOS_IMAGENES, obj, id]
  )
    .then((response) => response)
    .catch((e) => console.log(e));

const updateImage = (obj, id) =>
  pool.query("UPDATE ?? SET ? where productosimagen.idProductos = ?", [T_PRODUCTOS_IMAGENES, obj, id])
    .then((response) => console.log("response actualizar imagen",response))
    .catch((e) => console.log(e));

export {
  get,
  single,
  create,
  createImages,
  del,
  update,
  updateImage,
  filtrarProductosPorClase,
};
