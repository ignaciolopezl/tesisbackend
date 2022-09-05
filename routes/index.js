const express = require('express');
const diarioController = require('./../controllers/diario.controller')
const contenidoController = require('./../controllers/contenido.controller')
const versionController = require('./../controllers/version.controller')
const marcaController = require('./../controllers/marca.controller')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/diario', diarioController);
  router.use('/marca', marcaController);
  router.use('/contenido', contenidoController);
  router.use('/version', versionController);
}

module.exports = routerApi;
