const connection = require('../database/db');
const jwt = require('jsonwebtoken');

exports.retornaBlocoLogado = (req, res) => {
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

            // verificar se usuario existe
            connection.execute(
                'SELECT B.id_anotacao, B.tamanho, B.id_cor, A.titulo, C.nome AS cor FROM bloco_anotacao B INNER JOIN anotacoes A ON B.id_anotacao = A.id INNER JOIN cores C ON B.id_cor = C.id WHERE B.id_usuario = ? AND B.id_anotacao NOT IN (SELECT id_anotacao FROM arquivadas) AND B.id_anotacao NOT IN (SELECT id_anotacao FROM fixadas) ORDER BY B.id_anotacao DESC',
                [idLogado],
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
        }
    });
}

exports.retornaBlocoArquivadas = (req, res) => {
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

            // verificar se usuario existe
            connection.execute(
                'SELECT B.id_anotacao, B.tamanho, B.id_cor, A.titulo, C.nome AS cor FROM bloco_anotacao B INNER JOIN anotacoes A ON B.id_anotacao = A.id INNER JOIN cores C ON B.id_cor = C.id INNER JOIN arquivadas ARQ ON B.id_anotacao = ARQ.id_anotacao WHERE B.id_usuario = ? ORDER BY B.id_anotacao DESC',
                [idLogado],
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
        }
    });
}

exports.retornaBlocoFixadas = (req, res) => {
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

            // verificar se usuario existe
            connection.execute(
                'SELECT B.id_anotacao, B.tamanho, B.id_cor, A.titulo, C.nome AS cor FROM bloco_anotacao B INNER JOIN anotacoes A ON B.id_anotacao = A.id INNER JOIN cores C ON B.id_cor = C.id INNER JOIN fixadas F ON B.id_anotacao = F.id_anotacao WHERE B.id_usuario = ? ORDER BY B.id_anotacao DESC',
                [idLogado],
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
        }
    });
}

exports.retornaBlocoLogadoRecentes = (req, res) => {
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

            // verificar se usuario existe
            connection.execute(
                'SELECT B.id_anotacao, B.tamanho, B.id_cor, A.titulo, C.nome AS cor FROM bloco_anotacao B INNER JOIN anotacoes A ON B.id_anotacao = A.id INNER JOIN cores C ON B.id_cor = C.id WHERE B.id_usuario = ? ORDER BY id_anotacao DESC LIMIT 6',
                [idLogado],
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
        }
    });
}

exports.retornaBloco = (req, res) => {

    id = req.params.id;

    //adiciona frase
    connection.execute(
        'SELECT id_anotacao, tamanho, id_cor FROM bloco_anotacao WHERE id = ?',
        [id],
        function (err, results) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                console.error('Erro ao executar a consulta:', err);
            } else {
                return res.status(202).json({ results })
            }
        }
    );
}

exports.mudarCor = (req, res) => {
    const { id_cor } = req.body;
    const { id_anotacao } = req.params;

    //adiciona frase
    connection.execute(
        'UPDATE bloco_anotacao SET id_cor = ? WHERE id_anotacao = ?',
        [id_cor, id_anotacao],
        function (err, results) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                console.error('Erro ao executar a consulta:', err);
            } else {
                return res.status(202).json({ msg: 'Cor alterada' })
            }
        }
    );
}

exports.mudarTamanho = (req, res) => {
    const { tamanho } = req.body;
    const { id_anotacao } = req.params;

    //adiciona frase
    connection.execute(
        'UPDATE bloco_anotacao SET tamanho = ? WHERE id_anotacao = ?',
        [tamanho, id_anotacao],
        function (err, results) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                
            } else {
                return res.status(202).json({ msg: 'Tamanho alterado' })
            }
        }
    );
}

//retorna o bloco de uma nota
exports.retornaBlocoAnotacao = (req, res) => {

    const id = req.params.id;

    //adiciona frase
    connection.execute(
        'SELECT id_anotacao, tamanho, id_cor FROM bloco_anotacao WHERE id_anotacao = ?',
        [id],
        function (err, results) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                console.error('Erro ao executar a consulta:', err);
            } else {
                return res.status(202).json({ results })
            }
        }
    );
}