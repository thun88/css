'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const ROOT = __dirname + "/" + "www/";

// App
const app = express();

app.use(express.static('www'));

app.get('/', function (req, res) {
  res.sendFile( ROOT + "index.html" );
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
