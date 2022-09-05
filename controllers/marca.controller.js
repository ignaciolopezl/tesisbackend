const express = require('express');
const router = express.Router();
const MarcaService = require('./../models/marca.model');
const service = new MarcaService();

router.get('/', async (req, res) => {
  const marca = await service.find();
  res.json(marca);
});

module.exports = router;
