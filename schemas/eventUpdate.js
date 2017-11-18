const Joi = require('joi')

module.exports = Joi.object().keys({
  title: Joi.string(),
  eventType: Joi.string(),
  speaker: Joi.string(),
  subtitle: Joi.string(),
  description: Joi.string(),
  location: Joi.string(),
  onCampus: Joi.number().integer(),
  dateStart: Joi.date(),
  dateEnd: Joi.date(),
  image: Joi.string(),
  url: Joi.string()
})
