const express = require('express');
const router = express.Router();
const corController = require('../controllers/corController');


router.get('/', corController.retornaCores);
router.get('/:id', corController.retornaCor);
router.get('/cor/aleatorio', corController.retornaCorAleatoria);
router.post('/criar', corController.criarCor);


module.exports = router;