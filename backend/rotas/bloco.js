const express = require('express');
const router = express.Router();
const blocoController = require('../controllers/blocoController');
const checkToken = require('../middleware/checkToken')


router.get('/', checkToken, blocoController.retornaBlocos);
router.get('/:id', blocoController.retornaBloco);


module.exports = router;