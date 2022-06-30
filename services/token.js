import jwt from 'jsonwebtoken';

const token = {
  getJwtToken: (paylod) => {
    const seed = process.env.SEED;

    return jwt.sign(
      {
        paylod
      },
      seed,
      { expiresIn: 60 * 60 }
    );
  },

  comprobarToken: (token) => {
    const seed = process.env.SEED;
    jwt.verify(token, seed, (err, decoded) => {

      if (err) {
        console.log("error: ", err);
        return res.json({
          mesaage: 'el token no es valido'
        });
      } else {

        console.log("decode valido", decoded);
      }
    });
  },
};

export default { token };

