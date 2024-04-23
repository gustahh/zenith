const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');
const checkToken = require('../middleware/checkToken')

router.get('/:id', checkToken, perfilController.obterUsuario); //Obter usuario
router.get('/', checkToken, perfilController.usuarioLogado) //Obter usuario logado
router.post('/editar/email', checkToken, perfilController.editarEmail) //Editar email do usuario logado
router.post('/editar/senha', checkToken, perfilController.editarSenha) //Editar email do usuario logado

module.exports = router;