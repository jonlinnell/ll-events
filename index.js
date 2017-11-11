/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');

const models = require('./models');

const app = express();

const port = process.env.PORT || 3000;

require('./routes')(app);

models.sequelize.sync().then(() => {
  console.log('Database connection established.');
  app.listen(port, () => { console.log(`Listening on ${port}`); });
});
