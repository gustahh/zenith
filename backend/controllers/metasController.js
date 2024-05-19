const { data } = require('autoprefixer');
const connection = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cron = require('node-cron');

exports.obterMetas = async (req, res) => {
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

            //cria anotação
            connection.execute(
                'SELECT id, meta, data_expec, statusMeta FROM metas WHERE id_usuario = ?',
                [idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        return res.status(202).json({
                            results
                        })
                    }
                }
            );
        }
    })
};

exports.criarMeta = async (req, res) => {
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

            const { meta, dataExpec } = req.body
            var ano = new Date(dataExpec);
            let anoAtual = new Date();


            // validação

            if (!meta) {
                return res.status(422).json({ msg: 'Defina sua meta!' })
            }
            if (!dataExpec) {
                return res.status(422).json({ msg: 'Insira a data desejada!' })
            } else if (ano < anoAtual) {
                return res.status(422).json({ msg: 'Data inválida!' })
            }            
            
            //cria anotação
            connection.execute(
                'INSERT INTO metas (meta, data_expec, id_usuario) VALUES (?, ?, ?)',
                [meta, dataExpec, idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        return res.status(202).json({ msg: 'Você criou uma meta!' })
                    }
                }
            );
        }
    })
};
exports.editarMeta = async (req, res) => {
    const id = req.params.id
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

            const { meta } = req.body
            // validação

            if (!meta) {
                return res.status(422).json({ msg: 'Defina sua meta!' })
            }

            //cria anotação
            connection.execute(
                'UPDATE metas SET meta = ? WHERE id = ?',
                [meta, id],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        return res.status(202).json({ msg: 'Meta editada!' })
                    }
                }
            );
        }
    })
};

exports.editarData = async (req, res) => {
    const id = req.params.id
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

            const { dataExpec } = req.body
            // validação

            if (!dataExpec) {
                return res.status(422).json({ msg: 'Defina uma nova data!' })
            }

            //Altera data
            connection.execute(
                'UPDATE metas SET data_expec = ? WHERE id = ?',
                [dataExpec, id],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        return res.status(202).json({ msg: 'Meta editada, nova data!' })
                    }
                }
            );
        }
    })
};

exports.editarStatus = async (req, res) => {
    const id = req.params.id
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

            //Pega status da meta
            connection.execute(
                'SELECT statusMeta FROM metas WHERE id = ? AND id_usuario = ?',
                [id, idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        results.forEach(result => {
                            const status = result.statusMeta

                            if (status === 'não realizado') {
                                connection.execute(
                                    'UPDATE metas SET statusMeta = "realizado" WHERE id = ?',
                                    [id],
                                    function (err, results) {
                                        if (err) {
                                            // Se ocorrer um erro durante a execução da consulta
                                            console.error('Erro ao executar a consulta:', err);
                                        } else {
                                            return res.status(202).json({ msg: 'Parabéns, você cumpriu uma meta' })
                                        }
                                    }
                                );
                            } else {
                                connection.execute(
                                    'UPDATE metas SET statusMeta = "não realizado" WHERE id = ?',
                                    [id],
                                    function (err, results) {
                                        if (err) {
                                            // Se ocorrer um erro durante a execução da consulta
                                            console.error('Erro ao executar a consulta:', err);
                                        } else {
                                            return res.status(202).json({ msg: 'Parece que você tinha se enganado' })
                                        }
                                    }
                                );
                            }
                        });
                    }
                }
            );
        }
    })
};

exports.deletarMeta = async (req, res) => {
    const id = req.params.id
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

            const { meta } = req.body
            // validação

            //deleta a meta
            connection.execute(
                'DELETE FROM metas WHERE id = ?',
                [id],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        return res.status(202).json({ msg: 'Você deletou uma meta!' })
                    }
                }
            );
        }
    })
};