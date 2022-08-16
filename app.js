
// const cors = require("cors");
// const createError = require("http-errors");
// const express = require("express");
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const logger = require("morgan");
// const dotenv = require("dotenv");
// const { auth } = require("./middlewares/auth");// controlo el login
// dotenv.config();

// mercado pago
// SDK de Mercado Pago
// const mercadopago = require("mercadopago");

// Agrega credenciales
// mercadopago.configure({
//   access_token: process.env.ACCES_TOKEN,
// });

import express, { json, urlencoded} from "express";
import { fileURLToPath } from "url";
import { dirname, join} from "path";
// const cors = require("cors");
import cors from 'cors';
import createError from "http-errors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { config } from "dotenv";
import { auth } from "./middlewares/auth.js";// controlo el login
config();

import { PORT } from "./config.js";


// guardo en una variable la ruta de los archivos a cargar cuando acceda a la url
import session from "express-session";
import index from "./routes/index.js";
import registro from "./routes/registro.js";
import productos from "./routes/productos.js";
import clientes from "./routes/clientes.js";
import login from "./routes/login.js";
import contacto from "./routes/contacto.js";
import faqs from "./routes/faqs.js";
import about from "./routes/about.js";

import adminCategoriasProd from "./routes/admin/categoriasProd.js";
import adminCategoriasVentas from "./routes/admin/categoriasVentas.js";
import adminProductos from "./routes/admin/productos.js";
import adminVentas from "./routes/admin/ventas.js";
import adminUsuarios from "./routes/admin/usuarios.js";
import adminProveedores from "./routes/admin/proveedores.js";
import adminClientes from "./routes/admin/clientes.js";
import adminTareas from "./routes/admin/tareas.js";

// initialization
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(logger("dev"));
app.use(urlencoded({ extended: false }));// aca le decimos a mode que entienda que son los datos del form
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));
app.use(cors());
//app.use(cors());
app.use(json());

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
console.log("error app",err);
});

// inicializo server
app.listen(PORT);
console.log("server on port ", PORT);

export default app;
