const Joi = require('joi')

module.exports = Joi.object().keys({
  string: Joi.string()
})
