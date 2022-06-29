
// const cors = require("cors");
// const createError = require("http-errors");
// const express = require("express");
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const logger = require("morgan");
// const dotenv = require("dotenv");
// const { auth } = require("./middlewares/auth");// controlo el login
// dotenv.config();




import express, { json, urlencoded} from "express";
import cors from "cors";
import createError from "http-errors";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { config } from "dotenv";
import { auth } from "./middlewares/auth";// controlo el login
config();

// mercado pago
// SDK de Mercado Pago
// const mercadopago = require("mercadopago");

// Agrega credenciales
// mercadopago.configure({
//   access_token: process.env.ACCES_TOKEN,
// });

// guardo en una variable la ruta de los archivos a cargar cuando acceda a la url
import session from "express-session";
import index from "./routes/index";
import registro from "./routes/registro";
import productos from "./routes/productos";
import clientes from "./routes/clientes";
import login from "./routes/login";
import contacto from "./routes/contacto";
import faqs from "./routes/faqs";
import about from "./routes/about";

import adminCategoriasProd from "./routes/admin/categoriasProd";
import adminCategoriasVentas from "./routes/admin/categoriasVentas";
import adminProductos from "./routes/admin/productos";
import adminVentas from "./routes/admin/ventas";
import adminUsuarios from "./routes/admin/usuarios";
import adminProveedores from "./routes/admin/proveedores";
import adminClientes from "./routes/admin/clientes";
import adminTareas from "./routes/admin/tareas";

var app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));// aca le decimos a mode que entienda que son los datos del form
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));
console.log("ver ruta:",__dirname);
app.use(cors());

// crea un objeto session dentro del req. req.session
app.use(
  session({
    secret: process.env.SECRET_SESSION, //encripta el id
    cookie: { maxAge: null }, //tiempo de expiracion de la session(al poner null no expira nunca)
    resave: true,
    saveUninitialized: false, //aca le digo que si se cae el server por ejemplo todos los usuarios se tienen que loguear de nuevo
  })
);

// segun la url le digo que cargue el archivo que corresponde
app.use("/", index);

app.use("/registro", registro);
app.use("/productos", productos);
app.use("/clientes", clientes);
app.use("/login", login);
app.use("/contacto", contacto);
app.use("/faqs", faqs);
app.use("/about", about);

// Administrador
app.use("/admin/categoriasProd", auth, adminCategoriasProd);
app.use("/admin/categoriasVentas", auth, adminCategoriasVentas);
app.use("/admin/productos", auth,adminProductos);
app.use("/admin/ventas", auth, adminVentas);
app.use("/admin/usuarios", auth, adminUsuarios);
app.use("/admin/proveedores", auth, adminProveedores);
app.use("/admin/clientes", auth, adminClientes);
app.use("/admin/tareas",auth,adminTareas);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render("error");
 
  console.log("aca va el error que viene del manejador de errores del app.js");
});

export default app;
