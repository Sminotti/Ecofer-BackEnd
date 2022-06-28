const { token } = require("../services/token");

const auth = (req, res, next) => {
  let userToken = req.get("x-token") || req.headers["autorization"];

  token.comprobarToken(userToken);

  try {
    next();
  } catch (error) {
    console.log("ver error de comprobar token del auth: ", error);

    res.json({
      mensaje: "Token incorrecto",
    });
  }
};

module.exports = { auth };
