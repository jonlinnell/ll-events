require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

require('./routes')(app);

// eslint-disable-next-line no-console
app.listen(port, () => { console.log(`Listening on ${port}`); });
