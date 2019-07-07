const Joi = require('joi')

module.exports = {
  body: {
    date: Joi.string().required(),
  }
}
