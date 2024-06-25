const connection = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cron = require('node-cron');
const axios = require('axios');

exports.habilitar = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    const secret = process.env.SECRET
    // Decodificando o token
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            // Ocorreu um erro ao decodificar o token
            console.error('Erro ao decodificar o token:', err);
            return res.status(500).json({ error: 'Erro ao decodificar o token' });
        } else {
            // Token decodificado com sucesso
            const idLogado = decoded.id;

            connection.execute(
                'INSERT INTO dois_fatores (id_usuario) VALUES (?)',
                [idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        if (results.length < 1) {
                            // Se a consulta retornou resultados
                            return res.status(404).json({ msg: 'Erro ao habilitar a autentificação de dois fatores.' })
                        } else {
                            return res.status(202).json({ msg: 'Você habilitou a autentificação de dois fatores.' })
                        }
                    }
                }
            );
        }
    })
}

exports.desabilitar = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    const secret = process.env.SECRET
    // Decodificando o token
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            // Ocorreu um erro ao decodificar o token
            console.error('Erro ao decodificar o token:', err);
            return res.status(500).json({ error: 'Erro ao decodificar o token' });
        } else {
            // Token decodificado com sucesso
            const idLogado = decoded.id;

            connection.execute(
                'DELETE FROM dois_fatores WHERE id_usuario = ?',
                [idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        if (results.length < 1) {
                            // Se a consulta retornou resultados
                            return res.status(404).json({ msg: 'Erro ao desabilitar a autentificação de dois fatores.' })
                        } else {
                            return res.status(202).json({ msg: 'Você desabilitou a autentificação de dois fatores.' })
                        }
                    }
                }
            );
        }
    })
}

exports.checaUsuario = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    const secret = process.env.SECRET
    // Decodificando o token
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            // Ocorreu um erro ao decodificar o token
            console.error('Erro ao decodificar o token:', err);
            return res.status(500).json({ error: 'Erro ao decodificar o token' });
        } else {
            // Token decodificado com sucesso
            const idLogado = decoded.id;

            connection.execute(
                'SELECT * FROM dois_fatores WHERE id_usuario = ?',
                [idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        if (results.length < 1) {
                            // Se a consulta retornou resultados
                            return res.status(202).json({ msg: 'false' })
                        } else {
                            return res.status(202).json({ msg: 'true' })
                        }
                    }
                }
            );
        }
    })
}

exports.retornaPerguntas = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    const secret = process.env.SECRET
    // Decodificando o token
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            // Ocorreu um erro ao decodificar o token
            console.error('Erro ao decodificar o token:', err);
            return res.status(500).json({ error: 'Erro ao decodificar o token' });
        } else {
            // Token decodificado com sucesso
            const idLogado = decoded.id;

            connection.execute(
                'SELECT * FROM perguntas',
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        if (results.length < 1) {
                            // Se a consulta retornou resultados
                            return res.status(404).json({ msg: 'Ocorreu um erro.' })
                        } else {
                            return res.status(202).json({ results })
                        }
                    }
                }
            );
        }
    })
}

exports.adicionaPerguntaUsuario = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    const secret = process.env.SECRET
    // Decodificando o token
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            // Ocorreu um erro ao decodificar o token
            console.error('Erro ao decodificar o token:', err);
            return res.status(500).json({ error: 'Erro ao decodificar o token' });
        } else {
            // Token decodificado com sucesso
            const idLogado = decoded.id;
            const { pergunta } = req.body
            connection.execute(
                'INSERT INTO pergunta_usuario (id_pergunta, id_usuario) VALUES (?, ?)',
                [pergunta, idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        if (results.length < 1) {
                            // Se a consulta retornou resultados
                            return res.status(404).json({ msg: 'Ocorreu um erro.' })
                        } else {
                            return res.status(202).json({ msg: 'Pergunta adicionada à usuário' })
                        }
                    }
                }
            );
        }
    })
}

exports.adicionaRespostaUsuario = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    const secret = process.env.SECRET
    // Decodificando o token
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            // Ocorreu um erro ao decodificar o token
            console.error('Erro ao decodificar o token:', err);
            return res.status(500).json({ error: 'Erro ao decodificar o token' });
        } else {
            // Token decodificado com sucesso
            const idLogado = decoded.id;
            const {  resposta, pergunta } = req.body;
            connection.execute(
                'INSERT INTO respostas (resposta, id_pergunta, id_usuario) VALUES (?, ?, ?)',
                [resposta, pergunta, idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        if (results.length < 1) {
                            // Se a consulta retornou resultados
                            return res.status(404).json({ msg: 'Ocorreu um erro.' })
                        } else {
                            return res.status(202).json({ msg: 'Pergunta adicionada à usuário' })
                        }
                    }
                }
            );
        }
    })
}

exports.retornaPerguntaUsuario = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    const secret = process.env.SECRET
    // Decodificando o token
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            // Ocorreu um erro ao decodificar o token
            console.error('Erro ao decodificar o token:', err);
            return res.status(500).json({ error: 'Erro ao decodificar o token' });
        } else {
            // Token decodificado com sucesso
            const idLogado = decoded.id;
            const {  resposta, pergunta } = req.body;
            connection.execute(
                'SELECT pergunta FROM pergunta_usuario u INNER JOIN perguntas p ON u.id_pergunta = p.id WHERE id_usuario = ?',
                [idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        if (results.length < 1) {
                            // Se a consulta retornou resultados
                            return res.status(404).json({ msg: 'Ocorreu um erro.' })
                        } else {
                            return res.status(202).json({ results })
                        }
                    }
                }
            );
        }
    })
}
