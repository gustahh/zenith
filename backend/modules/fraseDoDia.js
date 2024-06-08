const connection = require('../database/db');
const cron = require('node-cron');

function recuperarFraseDoDia() {
    //recupera frase a cada 24h
    cron.schedule('00 21 * * *', () => {
        connection.execute(
            "SELECT F.texto, F.autor, C.nome AS 'cor' FROM frases F, cores C ORDER BY RAND() LIMIT 1;",
            function (err, results) {
                if (err) {
                    // Se ocorrer um erro durante a execução da consulta
                    console.error('Erro ao executar a consulta:', err);
                } else {
                    results.forEach(result => {
                        const frase = result.texto
                        const autor = result.autor
                        const cor = result.cor
                        console.log('Nova frase do dia: ', '"' + frase + '" \n' + autor + '" \n' + cor);

                        //adiciona a frase do dia na tabela frase do dia
                        connection.execute(
                            'INSERT INTO frase_do_dia (texto, autor, cor) VALUES (?, ?, ?)',
                            [frase, autor, cor],
                            function (err, results) {
                                if (err) {
                                    // Se ocorrer um erro durante a execução da consulta
                                    console.error('Erro ao executar a consulta:', err);
                                } else {
                                    console.log('\n Frase adicionada!')
                                }
                            }
                        );
                    });
                }
            }
        );
    }, {
        timezone: 'America/Sao_Paulo'
    });
}

module.exports = recuperarFraseDoDia;