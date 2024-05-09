const express = require('express');
const router = express.Router();
const notasController = require('../controllers/notasController');
const checkToken = require('../middleware/checkToken')

router.get('/:id', checkToken, notasController.nota); //Obtem nota especifica
router.get('/', checkToken, notasController.obterNotas); //Obtem notas de usuario logado
router.post('/create', checkToken, notasController.criarNota); //Cria nota
router.delete('/delete/:id', checkToken, notasController.deletarNota); //Deleta nota
router.put('/edit/titulo/:id', checkToken, notasController.editarTitulo); //Editar titulo de nota
router.put('/edit/texto/:id', checkToken, notasController.editarTexto); //Editar titulo de nota
router.put('/edit/humor/:id', checkToken, notasController.editarHumor); //Editar humor de nota


module.exports = router;