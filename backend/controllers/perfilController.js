const connection = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.obterUsuario = (req, res) => { //obtém dados do um determinado usuario
    const id = req.params.id

    // verificar se usuario existe
    connection.execute(
        'SELECT id, nome, email, data_nasc, genero, data_criacao, foto_perfil FROM usuarios WHERE id = ?',
        [id],
        function (err, results) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                console.error('Erro ao executar a consulta:', err);
            } else {
                if (results.length < 1) {
                    // Se a consulta retornou resultados
                    return res.status(404).json({ msg: 'Usuário não encontrado' })
                } else {
                    return res.status(202).json({ results })
                }
            }
        }
    );
};

exports.usuarioLogado = async (req, res) => {
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
            //retorna informações de usuário logado
            connection.execute(
                'SELECT id, nome, email, data_nasc, genero, senha, data_criacao, foto_perfil FROM usuarios WHERE id = ?',
                [idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        if (results.length < 1) {
                            // Se a consulta retornou resultados
                            return res.status(404).json({ msg: 'Usuário não encontrado' })
                        } else {
                            return res.status(202).json({ results })
                        }
                    }
                }
            );
        }
    });
};

exports.editarEmail = async (req, res) => {
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

            const { email } = req.body

            // validação

            if (!email) {
                return res.status(422).json({ msg: 'Email não pode ficar em branco!' })
            }

            //deleta anotação
            connection.execute(
                'UPDATE usuarios SET email = ? WHERE id = ?',
                [email, idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        return res.status(202).json({ msg: 'Email alterado.' })
                    }
                }
            );
        }
    })
};

exports.editarSenha = async (req, res) => {
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

            const { usuarioSenhaAtual, novaSenha } = req.body

            // validação

            if (!usuarioSenhaAtual) {
                return res.status(422).json({ msg: 'Senha atual não pode ficar em branco!' })
            }
            if (!novaSenha) {
                return res.status(422).json({ msg: 'Nova senha não pode ficar em branco!' })
            }

            //acha senha do usuario
            connection.execute(
                'SELECT senha FROM usuarios WHERE id = ?',
                [idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        results.forEach(async function (result) {
                            const senhaAtual = result.senha
                            //compara senha
                            const compararSenha = await bcrypt.compare(usuarioSenhaAtual, senhaAtual)

                            if (!compararSenha) {
                                return res.status(422).json({ msg: 'A senha que você digitou é diferente da sua senha atual' })
                            } else {
                                //criar senha
                                const salt = await bcrypt.genSalt(12)
                                const senhaHash = await bcrypt.hash(novaSenha, salt)

                                //altera senha
                                connection.execute(
                                    'UPDATE usuarios SET senha = ? WHERE id = ?',
                                    [senhaHash, idLogado],
                                    function (err, results) {
                                        if (err) {
                                            // Se ocorrer um erro durante a execução da consulta
                                            console.error('Erro ao executar a consulta:', err);
                                        } else {
                                            return res.status(202).json({ msg: 'Senha alterada.' })
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
