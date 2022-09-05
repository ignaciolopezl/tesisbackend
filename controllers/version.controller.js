const express = require('express');
const router = express.Router();
const VersionService = require('./../models/version.model');
const service = new VersionService();

router.get('/', async (req, res) => {
  const version = await service.find();
  res.json(version);
});

module.exports = router;
