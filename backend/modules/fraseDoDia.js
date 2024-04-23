const connection = require('../database/db');
const cron = require('node-cron');

function recuperarFraseDoDia() {
    //recupera frase a cada 24h
    cron.schedule('00 18 * * *', () => {
        connection.execute(
            'SELECT texto, autor FROM frases ORDER BY RAND() LIMIT 1',
            function (err, results) {
                if (err) {
                    // Se ocorrer um erro durante a execução da consulta
                    console.error('Erro ao executar a consulta:', err);
                } else {
                    results.forEach(result => {
                        const frase = result.texto
                        const autor = result.autor
                        console.log('Nova frase do dia: ', '"' + frase + '" \n' + autor);

                        //adiciona a frase do dia na tabela frase do dia
                        connection.execute(
                            'INSERT INTO frase_do_dia (texto, autor) VALUES (?, ?)',
                            [frase, autor],
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