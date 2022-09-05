const express = require('express');
const router = express.Router();
const ContenidoService = require('./../models/contenido.model');
const service = new ContenidoService();

router.get('/', async (req, res) => {
  const contenido = await service.find();
  res.json(contenido);
});

module.exports = router;
