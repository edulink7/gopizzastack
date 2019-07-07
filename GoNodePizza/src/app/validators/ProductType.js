const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string().required(),
    //description: Joi.string().required(),
    preview: Joi.string().required(),
    product_id: Joi.number().integer().positive()
  }
}
