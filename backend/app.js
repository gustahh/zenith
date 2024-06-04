require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const recuperarFraseDoDia = require('./modules/fraseDoDia');
const CriarRelatorio = require('./modules/relatorioSemanal');

const app = express();
app.use(cors());
app.use(cookieParser());

//JSON
app.use(express.json())

//arquivo com rotas
const publicaRouter = require('./rotas/publica');
const fraseRouter = require('./rotas/frase');
const corRouter = require('./rotas/cor');
const profileRouter = require('./rotas/perfil');
const authRouter = require('./rotas/auth');
const notasRouter = require('./rotas/notas');
const metasRouter = require('./rotas/metas');
const relatorioRouter = require('./rotas/relatorio');
const blocoRouter = require('./rotas/bloco');
const reflexaoRouter = require('./rotas/reflexao');

//acessa as rotas
app.use('/', publicaRouter);
app.use('/frase', fraseRouter);
app.use('/cores', corRouter);
app.use('/perfil', profileRouter);
app.use('/auth', authRouter);
app.use('/notas', notasRouter);
app.use('/metas', metasRouter);
app.use('/relatorios', relatorioRouter);
app.use('/blocos', blocoRouter);
app.use('/reflexao', reflexaoRouter);

//Gera a frase do dia
recuperarFraseDoDia();
CriarRelatorio();

app.listen(3000)





