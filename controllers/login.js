import sha1 from "sha1";
import token from "../services/token.js";
import auth from "./../models/login.js";
import { dbFirebase } from "./../utils/firebase.js";

const login = async (req, res) => {
  try {
    req.body.password = sha1(req.body["password"]); //encripta el password
    const user = await auth(req.body); //con el usuario y contraseña ,por medio de la funcion auth traigo todos los datos de la tabla usuarios

    console.log("usuario logueado: ", user); //lo veo por consola//veo el id del usuario almacenada en un array

    //--------------------------------------------------------------------------------------------------------
    // veo los suarios de la base de Firebase
    // me conecto a la tabla/collectio "clientes_login"
    const querySnapshot = await dbFirebase.collection("clientes_login").get();
    // recorro la base y la muestro
    const usuarios = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(), // muestro todos los datos del registro y no de a uno
    }));

    console.log("Lista de usuarios Firebase:", usuarios);
    //------------------------------------------------------------------------------------------------------------

    // veo si user tiene algo
    user.length === 0 //si la ultima posicion del array es 0,o sea no coincide el usuario y la contraseña...
      ? res.json({ message: "usuario o password incorrecto" })
      : null; //termina

    // creo el token

    const userToken = token.getJwtToken({
      user,
    });

    res.json({
      estado: "success",
      message: "usuario encontrado",
      token: userToken,
      user: user,
    });
    // console.log("login correcto");
  } catch (e) {
    res.json({
      estado: "success",
      message: "usuario o password incorrecto",
    });
    // console.log("login incorrecto");
  }
};

export default login;
