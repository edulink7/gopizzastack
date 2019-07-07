const Joi = require("joi");

module.exports = {
  body: {
    observation: Joi.string().required(),
    cep: Joi.string().required(),
    street: Joi.string().required(),
    number: Joi.string().required(),
    district: Joi.string().required(),
    items: Joi.array().required(),
    total: Joi.number()
      .precision(2)
      .positive()
      .required(),
    user_id: Joi.number().required(),
    date: Joi.date().required()
  }
};
