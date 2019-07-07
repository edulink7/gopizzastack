const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string().required(),
    display: Joi.string(),
    description: Joi.string().required(),
    minutes: Joi.number().integer().required(),
    preview: Joi.string().required(),    
  }
}
