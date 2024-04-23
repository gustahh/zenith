const express = require('express');
const router = express.Router();
const metasController = require('../controllers/metasController');
const checkToken = require('../middleware/checkToken')


router.get('/criar', checkToken, metasController.obterMetas); //Obter metas de usuario


module.exports = router;