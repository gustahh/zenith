require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const recuperarFraseDoDia = require('./modules/fraseDoDia');

const app = express();
app.use(cors());
app.use(cookieParser());

//JSON
app.use(express.json())

//arquivo com rotas
const publicaRouter = require('./rotas/publica')
const fraseRouter = require('./rotas/frase')
const profileRouter = require('./rotas/perfil');
const authRouter = require('./rotas/auth');
const notasRouter = require('./rotas/notas');
const metasRouter = require('./rotas/metas');

//acessa as rotas
app.use('/', publicaRouter);
app.use('/frase', fraseRouter);
app.use('/perfil', profileRouter);
app.use('/auth', authRouter);
app.use('/notas', notasRouter);
app.use('/metas', metasRouter);

//Gera a frase do dia
recuperarFraseDoDia();

app.listen(3000)





