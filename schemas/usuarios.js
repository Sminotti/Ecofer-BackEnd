const Joi = require("@hapi/joi");

const schemas = {
  auth: Joi.object().keys({
    usuario: Joi.string().min(4).max(20).required(),
    password: Joi.string().min(4).max(20).required(),
  }),
};

module.exports = { schemas };