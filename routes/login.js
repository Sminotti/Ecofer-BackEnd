import { Router } from "express";
const router = Router();


var getIP = require('ipware')().get_ip;
import { validateLogin } from "./../middlewares/usuarios.js";
import { login } from "../controllers/login.js";

// req.cookie
router.get("/", async (req, res, next) => {
  var ipInfo = getIP(req);
  console.log("ipInfo: ",ipInfo);

  next();
});

router.post("/", validateLogin, login);

export default router;
