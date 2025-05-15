const express = require('express');
const serverless = require('serverless-http');
const { ClerkExpressWithAuth, requireAuth } = require('@clerk/clerk-sdk-node');

const app = express();
const router = express.Router();

// Middleware Clerk
app.use(ClerkExpressWithAuth());

// Ruta pública
router.get('/', (req, res) => {
  res.send('Ruta pública: ¡Hola desde Vercel sin Docker y funcionando!');
});

// Ruta protegida
router.get('/protegida', requireAuth(), (req, res) => {
  res.send(`Ruta protegida: ¡Hola ${req.auth.userId}!`);
});

app.use('/', router);

// Exportar como Serverless
module.exports = app;
module.exports.handler = serverless(app);