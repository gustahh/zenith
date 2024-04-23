const connection = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cron = require('node-cron');

// Criar relatório semanal

// Objeto para resultado
let resultados = {
    titulos: [],
    emocoes: [],
    datas: [],
    dias_semana: [],
    mes: [],
    semanaMes: [],
    emocao_pred: [],
    total: []
};

function retornarAnotacoes() {
    //Retorna anotações da ultima semana
    return new Promise((resolve, reject) => {
        connection.execute(
            'SELECT titulo, emocao, data_criacao, dia_da_semana, MONTH(data_criacao) as mes, WEEK(data_criacao, 5) - WEEK(DATE_SUB(data_criacao, INTERVAL DAYOFMONTH(data_criacao) - 1 DAY), 5) + 1 as semana_do_mes FROM anotacoes WHERE data_criacao >= DATE(NOW() - INTERVAL 1 WEEK);',
            function (err, results) {
                if (err) {
                    // Se ocorrer um erro durante a execução da consulta
                    reject(err);
                } else {
                    results.forEach(result => {
                        const titulo = result.titulo;
                        const emocao = result.emocao;
                        const data = result.data_criacao;
                        const diaSemana = result.dia_da_semana;
                        const mes = result.mes;
                        const semanaMes = result.semana_do_mes;

                        resultados.titulos.push(titulo);
                        resultados.emocoes.push(emocao);
                        resultados.datas.push(data);
                        resultados.dias_semana.push(diaSemana);
                        resultados.mes.push(mes);
                        resultados.semanaMes.push(semanaMes);

                        //console.log( {titulo, emocao, data, diaSemana, mes, semanaMes} );
                    });
                    resolve();
                }
            }
        );
    });
}

function emocaoPred() {
    //Retorna emocao mais frequente da ultima semana
    return new Promise((resolve, reject) => {
        connection.execute(
            'SELECT emocao, COUNT(*) AS total_ocorrencias FROM anotacoes WHERE data_criacao >= DATE(NOW() - INTERVAL 1 WEEK) GROUP BY emocao ORDER BY total_ocorrencias DESC LIMIT 1;',
            function (err, results) {
                if (err) {
                    // Se ocorrer um erro durante a execução da consulta
                    reject(err);
                } else {
                    results.forEach(result => {
                        const emocaoPred = result.emocao;
                        const total = result.total_ocorrencias;

                        resultados.emocao_pred.push(emocaoPred);
                        resultados.total.push(total);

                        //console.log( {emocaoPred, total} );
                    });
                    resolve();
                }
            }
        );
    });
}

exports.criarRelatorioSemanal = async (req, res) => {
    // Executa as duas consultas e exibe os resultados
    Promise.all([retornarAnotacoes(), emocaoPred()])
        .then(() => {
            Object.keys(resultados).forEach(propriedade => {
                console.log(`${propriedade}:`, resultados[propriedade]);
            });

            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(" ")[1]
            const secret = process.env.SECRET
            // Decodificando o token
            jwt.verify(token, secret, (err, decoded) => {
                if (err) {
                    // Ocorreu um erro ao decodificar o token
                    console.error('Erro ao decodificar o token:', err);
                } else {
                    // Token decodificado com sucesso
                    const idLogado = decoded.id;


                    //cria novo relatorio
                    connection.execute(
                        'INSERT INTO relatorio_semanal (id_usuario, emocao_pred, mes, semanaMes) VALUES (?, ?, ?, ?)',
                        [idLogado, resultados.emocao_pred[0], resultados.mes[0], resultados.semanaMes[0]],
                        function (err, results) {
                            if (err) {
                                // Se ocorrer um erro durante a execução da consulta
                                reject(err);
                            } else {
                                let resultados = {
                                    titulos: [],
                                    emocoes: [],
                                    datas: [],
                                    dias_semana: [],
                                    mes: [],
                                    semanaMes: [],
                                    emocao_pred: [],
                                    total: []
                                };

                                return res.status(202).json({ msg: 'Relatório semanal criado.' })
                            }
                        }
                    );
                }
            })
        })
        .catch(err => {
            console.error("Erro ao obter resultados:", err);
        });
};