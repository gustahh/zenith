const express = require('express');
const router = express.Router();
const metasController = require('../controllers/metasController');
const checkToken = require('../middleware/checkToken')


router.get('/', checkToken, metasController.obterMetas);
router.get('/:id', checkToken, metasController.obterMetaEspecifica); //Obter metas de usuario
router.post('/criar', checkToken, metasController.criarMeta); //Criar metas
router.put('/editar/:id', checkToken, metasController.editarMeta); //Editar metas
router.put('/editar/data/:id', checkToken, metasController.editarData); //Editar data da meta
router.get('/editar/status/:id', checkToken, metasController.editarStatus); //Editar data da meta
router.delete('/deletar/:id', checkToken, metasController.deletarMeta);



module.exports = router;