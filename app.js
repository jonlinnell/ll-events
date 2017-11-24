/* eslint-disable no-console */
require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const fileupload = require('express-fileupload')
const morgan = require('morgan')

const verifyToken = require('./lib/verifyToken')

const models = require('./models')

const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'))
app.use(fileupload())

require('./routes')(app)

app.get('/status', verifyToken, (req, res) => {
  res.status(200).send('Hello there!')
})

models.sequelize.sync().then(() => {
  console.log('Database connection established.')
  app.listen(port, () => { console.log(`Listening on ${port}`) })
})
