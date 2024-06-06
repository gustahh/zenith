const express = require('express');
const router = express.Router();
const blocoController = require('../controllers/blocoController');
const checkToken = require('../middleware/checkToken')


router.get('/', checkToken, blocoController.retornaBlocoLogado);
router.get('/recentes', checkToken, blocoController.retornaBlocoLogadoRecentes);
router.get('/:id', checkToken, blocoController.retornaBloco);
router.get('/bloco/:id', checkToken, blocoController.retornaBlocoAnotacao); //Obtem bloco nota especifica
router.put('/editar/cor/:id_anotacao', checkToken, blocoController.mudarCor);
router.put('/editar/tamanho/:id_anotacao', checkToken, blocoController.mudarTamanho);

module.exports = router;