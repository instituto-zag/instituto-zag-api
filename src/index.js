const ENV = require('./environment')();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = require('./app');

app.init({
  router: express(),
  plugins: [cors(), bodyParser.json()],
  port: process.env.PORT
});
