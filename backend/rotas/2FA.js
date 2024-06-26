const express = require('express');
const router = express.Router();
const DFController = require('../controllers/2FAController');
const checkToken = require('../middleware/checkToken');

//CRUD

router.post('/habilitar', checkToken, DFController.habilitar); //habilita a autentificacao de dois fatores para o usuario
router.delete('/desabilitar', checkToken, DFController.desabilitar); //desabilita a autentificacao de dois fatores para o usuario
router.get('/checar', DFController.checaUsuario); //checa o status da autentificacao de dois fatores para o usuario
router.get('/checarUsuario', DFController.checaDeterminadoUsuario); //checa o status da autentificacao de dois fatores para o usuario
router.post('/adicionar/pergunta', DFController.adicionaPerguntaUsuario); //adiciona uma pergunta a um usuario
router.post('/adicionar/resposta', DFController.adicionaRespostaUsuario); //adiciona uma resposta a uma pergunta de um usuario
router.get('/perguntas', DFController.retornaPerguntas); //retorna as perguntas
router.get('/pergunta', DFController.retornaPerguntaUsuarioLogado); //retorna a pergunta de usuario logado
router.get('/resposta', DFController.retornaRespostaUsuarioLogado); //retorna a pergunta de usuario logado
router.get('/pergunta/:id', DFController.retornaPerguntaUsuario); //retorna a pergunta de usuario logado
router.get('/resposta/:id', DFController.retornaRespostaUsuario);
router.post('/login/:id', DFController.logaUsuario);


module.exports = router;