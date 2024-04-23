require('dotenv').config()
const express = require('express')
const recuperarFraseDoDia = require('./modules/fraseDoDia');

const app = express()

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





