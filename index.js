const express = require('express');
const app = express();

require('dotenv').config()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => { res.json({message: 'It works!'}); })

app.listen(port, () => { console.log(`Listening on ${port}`); })