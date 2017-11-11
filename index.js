/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const models = require('./models');

const app = express();

const port = process.env.PORT || 3000;

require('./routes')(app);

app.use(morgan('combined'));

models.sequelize.sync().then(() => {
  console.log('Database connection established.');
  app.listen(port, () => { console.log(`Listening on ${port}`); });
});
