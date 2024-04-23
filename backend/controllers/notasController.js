const connection = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cron = require('node-cron');

exports.criarNota = async (req, res) => {
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

            const { titulo, texto, emocao } = req.body

            // validação

            if (!titulo) {
                return res.status(422).json({ msg: 'Título não pode ficar em branco!' })
            }
            if (!texto) {
                return res.status(422).json({ msg: 'Insira um texto!' })
            }
            if (!emocao) {
                return res.status(422).json({ msg: 'Adicione seu humor!' })
            }

            //cria anotação
            connection.execute(
                'INSERT INTO anotacoes (titulo, texto, emocao, id_usuario) VALUES (?, ?, ?, ?)',
                [titulo, texto, emocao, idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        return res.status(202).json({ msg: 'Anotação criada com sucesso!' })
                    }
                }
            );
        }
    })
};

exports.obterNotas = async (req, res) => {
    const id = req.params.id

    // verificar se usuario existe
    connection.execute(
        'SELECT id, titulo, texto, emocao, data_criacao FROM anotacoes WHERE id_usuario = ?',
        [id],
        function (err, results) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                console.error('Erro ao executar a consulta:', err);
            } else {
                if (results.length < 1) {
                    // Se a consulta retornou resultados
                    return res.status(404).json({ msg: 'Este usuário ainda não possui notas' })
                } else {
                    return res.status(202).json({ results })
                }
            }
        }
    );
};

exports.deletarNota = async (req, res) => {
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

            //deleta anotação
            connection.execute(
                'DELETE FROM anotacoes WHERE id = ? AND id_usuario = ?',
                [id, idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        return res.status(202).json({ msg: 'Anotação deletada.' })
                    }
                }
            );
        }
    })
};

exports.editarTitulo = async (req, res) => {
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

            const { titulo } = req.body

            // validação

            if (!titulo) {
                return res.status(422).json({ msg: 'Título não pode ficar em branco!' })
            }

            //deleta anotação
            connection.execute(
                'UPDATE anotacoes SET titulo = ?, data_edicao = CURRENT_TIMESTAMP WHERE id = ? AND id_usuario = ?',
                [titulo, id, idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        return res.status(202).json({ msg: 'Título alterado.' })
                    }
                }
            );
        }
    })
};

exports.editarTexto = async (req, res) => {
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

            const { texto } = req.body

            // validação

            if (!texto) {
                return res.status(422).json({ msg: 'Texto não pode ficar em branco!' })
            }

            //deleta anotação
            connection.execute(
                'UPDATE anotacoes SET texto = ?, data_edicao = CURRENT_TIMESTAMP WHERE id = ? AND id_usuario = ?',
                [texto, id, idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        return res.status(202).json({ msg: 'Texto alterado.' })
                    }
                }
            );
        }
    })
};

exports.editarHumor = async (req, res) => {
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

            const { emocao } = req.body

            // validação

            if (!emocao) {
                return res.status(422).json({ msg: 'Humor não pode ficar em branco!' })
            }

            //deleta anotação
            connection.execute(
                'UPDATE anotacoes SET emocao = ?, data_edicao = CURRENT_TIMESTAMP WHERE id = ? AND id_usuario = ?',
                [emocao, id, idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        return res.status(202).json({ msg: 'Emoção alterada.' })
                    }
                }
            );
        }
    })
};