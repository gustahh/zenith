const express = require('express');
const router = express.Router();
const relatorioController = require('../controllers/relatorioController');
const checkToken = require('../middleware/checkToken')


router.get('/criar', checkToken, relatorioController.criarRelatorioSemanal); //Obter metas de usuario

router.get('/relatorioSemanal/ver', checkToken, relatorioController.retornaRelatorioSemanalUsuario); //Retorna relatorio

module.exports = router;