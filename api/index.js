const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.send('¡Hola desde Vercel funciona perfectamente!');
});

app.use('/', router);

// exporta como función serverless
module.exports = app;
module.exports.handler = serverless(app);