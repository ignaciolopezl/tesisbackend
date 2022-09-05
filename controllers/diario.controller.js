const express = require('express');
const DiarioService = require('./../models/diario.model');
const router = express.Router();

const service = new DiarioService();

router.get('/', async (req, res) => {
  const diarios =  service.find();
  res.json(diarios);
});

module.exports = router;
