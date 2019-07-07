const Joi = require("joi");

module.exports = {
  body: {
    size: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number()
      .precision(2)
      .required(),
    preview: Joi.string().required(),
    use_as_cart_img: Joi.bool().required(),
    type_id: Joi.number()
      .integer()
      .positive()
  }
};
