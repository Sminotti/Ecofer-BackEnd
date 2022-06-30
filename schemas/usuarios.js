
import pkg from '@hapi/joi';
const { object, string } = pkg;

const schemas = {
  auth: pkg.object().keys({
    usuario: pkg.string().min(4).max(20).required(),
    password: pkg.string().min(4).max(20).required(),
  }),
};

export { schemas };