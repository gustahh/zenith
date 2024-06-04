const express = require('express');
const router = express.Router();
const fraseController = require('../controllers/reflexaoController');


router.post('/criar', fraseController.criarReflexao); //Cria uma reflexao
router.get('/ver', fraseController.reflexao); //retorna uma reflexao

module.exports = router;