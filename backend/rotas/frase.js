const express = require('express');
const router = express.Router();
const fraseController = require('../controllers/fraseController');


router.post('/criar', fraseController.criarFrase); //Registrar usuario
router.get('/ver', fraseController.fraseDia); //mostra frase do dia

module.exports = router;