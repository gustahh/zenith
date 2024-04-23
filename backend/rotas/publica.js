const express = require('express');
const router = express.Router();
const publicaController = require('../controllers/publicaController');
const checkToken = require('../middleware/checkToken')

router.get('/', publicaController.boasVindas); //Boas vindas

module.exports = router;