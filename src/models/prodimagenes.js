import pool from "../utils/bd.js";
const T_PRODUCTOS = "productos";
const T_PROD_IMAGENES = "productosimagen";
const T_PROVEEDORES = "proveedores";
const T_CATEGORIASPROD = "categoriaproductos";

const get = () =>
pool.query(
      "SELECT prod.id, prodImg.id, catProd.id, prov.id, prod.unidades as unidadesProducto, prod.nombre as nombreProducto, prodImg.uid as imagenProducto, prod.kilos as kilosProducto, prod.precioVenta, catProd.clase as claseProducto, catProd.agExtintor as categoriaProducto, catProd.fuegos, catProd.descripcion as descripcionProducto, prov.nombreFantasia as nombreProv, prov.contacto as contactoProv, prov.telefono as telefonoProv, prov.direccion as direccionProv, prov.codPostal as codpostalProv, prov.localidad as localidadProv, prov.observacionesProv, catprod.aplicativos FROM ?? as prodImg JOIN ?? as prod ON prodImg.idProductos = prod.id JOIN ?? as catProd ON prod.idCategoria = catProd.id JOIN ?? as prov ON prod.idProveedor = prov.id WHERE prod.habilitado = 1",
      [T_PROD_IMAGENES, T_PRODUCTOS, T_CATEGORIASPROD, T_PROVEEDORES]
    )
    .then((response) => response)
    .catch((e) => e);

const single = (id) =>
pool.query(
      "SELECT prod.id, prodImg.id, catProd.id, prov.id, prod.unidades as unidadesProducto, prod.nombre as nombreProducto, prodImg.uid as imagenProducto, prod.kilos as kilosProducto, prod.precioVenta, catProd.clase as claseProducto, catProd.agExtintor as categoriaProducto, catProd.fuegos, catProd.descripcion as descripcionProducto, prov.nombreFantasia as nombreProv, prov.contacto as contactoProv, prov.telefono as telefonoProv, prov.direccion as direccionProv, prov.codPostal as codpostalProv, prov.localidad as localidadProv, prov.observacionesProv, catprod.aplicativos FROM ?? as prodImg JOIN ?? as prod ON prodImg.idProductos = prod.id JOIN ?? as catProd ON prod.idCategoria = catProd.id JOIN ?? as prov ON prod.idProveedor = prov.id WHERE prod.habilitado = ? and prod.id = ?",
      [T_PROD_IMAGENES, T_PRODUCTOS, T_CATEGORIASPROD, T_PROVEEDORES, true, id]
    )
    .then((response) => response)
    .catch((e) => e);

const create = (obj) =>
pool.query("INSERT INTO ?? SET ?", [T_PRODUCTOS, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

const createImages = (obj) =>
pool.query("INSERT INTO ?? SET ?", [T_PROD_IMAGENES, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

const update = (obj, id) =>
pool.query("UPDATE ?? SET ? where id = ?", [T_PROD_IMAGENES, obj, id])
    .then((response) => response)
    .catch((e) => e);

export { createImages,update,create,single,get };
