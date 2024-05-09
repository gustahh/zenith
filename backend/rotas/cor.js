const express = require('express');
const router = express.Router();
const corController = require('../controllers/corController');


router.get('/', corController.retornaCores);
router.post('/criar', corController.criarCor);


module.exports = router;