const fs = require('fs')
const Joi = require('joi')
const path = require('path')

const models = require('../models')
const eventCreateSchema = require('../schemas/eventCreate')
const eventUpdateSchema = require('../schemas/eventUpdate')

const mediaDir = process.env.MEDIA_DIR

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

  app.get('/:id', (req, res) => {
    models.Event.findById(req.params.id)
      .then((event) => {
        res.json(event)
      })
  })

  app.put('/:id', (req, res) => {
    Joi.validate(req.body, eventUpdateSchema, (error) => {
      if (error !== null) {
        res.sendStatus(400)
      } else {
        models.Event.update(req.body, {
          where: {
            id: req.params.id
          }
        })
          .then(() => {
            models.Event.findById(req.params.id)
              .then((event) => {
                res.json(event)
              })
          })
      }
    })
  })

  app.delete('/:id', (req, res) => {
    models.Event.findById(req.params.id)
      .then((event) => {
        event.destroy()

        if (event.image) {
          const imagePath = path.join(__dirname, '..', mediaDir, event.image)
          if (fs.existsSync(imagePath)) {
            fs.unlink(imagePath, (err) => {
              if (err) {
                // Log the error somehow?
              }
            })
          }
        }

        return res.sendStatus(200)
      })
      .catch((err) => {
        res.status(400).send(err)
      })
  })
}
