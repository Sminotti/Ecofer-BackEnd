const express = require("express");
const router = express.Router();


var getIP = require('ipware')().get_ip;
const { validateLogin } = require("./../middlewares/usuarios");
const {login} = require("../controllers/login");

// req.cookie
router.get("/", async (req, res, next) => {
  var ipInfo = getIP(req);
  console.log("ipInfo: ",ipInfo);

  next();
});

router.post("/", validateLogin, login);

module.exports = router;
