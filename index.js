/* eslint-disable no-console */
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const models = require('./models')

const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'))

require('./routes')(app)

app.get('/status', (req, res) => {
  res.sendStatus(200)
})

models.sequelize.sync().then(() => {
  console.log('Database connection established.')
  app.listen(port, () => { console.log(`Listening on ${port}`) })
})
