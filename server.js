'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
