const express = require('express');
const app = express();

require('dotenv').config()

const port = process.env.PORT || 3000;

require('./routes')(app);

app.listen(port, () => { console.log(`Listening on ${port}`); });
