const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//CRUD

router.post('/registrar', authController.registrarUsuario); //Registrar usuario
router.post('/login', authController.loginUsuario);//Login

module.exports = router;