const Joi = require('joi')

const models = require('../models')
const eventCreateSchema = require('../schemas/eventCreate')

module.exports = (app) => {
  app.get('/', (req, res) => {
    models.Event.findAll()
      .then((events) => {
        res.json(events)
      })
  })

  app.post('/', (req, res) => {
    Joi.validate(req.body, eventCreateSchema, (error) => {
      if (error !== null) {
        res.sendStatus(400)
      } else {
        models.Event.create(req.body)
          .then((event) => {
            res.json(event)
          })
      }
    })
  })
}
