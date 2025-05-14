const express = require('express');
const app = express();
const serverless = require('serverless-http');

app.get('/', (req, res) => {
  res.send('¡Hola desde Vercel sin Docker!');
});

module.exports = app;
module.exports.handler = serverless(app);