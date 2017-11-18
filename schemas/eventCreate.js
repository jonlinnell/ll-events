const Joi = require('joi')

module.exports = Joi.object().keys({
  title: Joi.string().required(),
  eventType: Joi.string().max(5).required(),
  speaker: Joi.string(),
  subtitle: Joi.string(),
  description: Joi.string(),
  location: Joi.string().required(),
  onCampus: Joi.number().integer(),
  dateStart: Joi.date().required(),
  dateEnd: Joi.date().required(),
  url: Joi.string()
})
