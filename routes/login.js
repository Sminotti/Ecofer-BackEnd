import { Router } from "express";
const router = Router();

import ipware from "ipware";
const getIP = ipware().get_ip;

//var getIP = require('ipware')().get_ip;

import { validateLogin } from "./../middlewares/usuarios.js";
import  login  from "../controllers/login.js";

router.get("/", async (req, res, next) => {
  var ipInfo = getIP(req);
   console.log("ipInfo: ",ipInfo)
   next();
});


router.post("/", validateLogin,login);

export default router;
