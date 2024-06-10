const connection = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cron = require('node-cron');
const axios = require('axios');

exports.registrarUsuario = async (req, res) => {
    const { nome, email, dataNasc, genero, senha } = req.body

    // validação
    var ano = dataNasc.substring(0, 4);
    let anoAtual = new Date().getFullYear();
    if (!nome) {
        return res.status(422).json({ msg: 'Todos os campos devem ser preenchidos!' })
    }
    if (!email) {
        return res.status(422).json({ msg: 'Todos os campos devem ser preenchidos!' })
    }
    if (!dataNasc) {
        return res.status(422).json({ msg: 'Todos os campos devem ser preenchidos!' })
    } else if (ano > anoAtual) {
        return res.status(422).json({ msg: 'Ano inválido!' })
    }
    if (!genero) {
        return res.status(422).json({ msg: 'Todos os campos devem ser preenchidos!' })
    }
    if (!senha) {
        return res.status(422).json({ msg: 'Todos os campos devem ser preenchidos!' })
    }

    try {
        //verifica se usuário existe
        connection.execute(
            'SELECT email FROM usuarios WHERE email = ?',
            [email],
            function (err, results) {
                if (err) {
                    return res.status(500).json({ msg: 'Erro interno do servidor' });
                } else {
                    if (results.length > 0) {
                        // Se a consulta retornou resultados
                        return res.status(422).json({ msg: 'Por favor, utilize outro email' })
                    } else {
                        criarUsuario();
                    }
                }
            }
        );
    } catch {
        console.error('Erro:', err);
        return res.status(500).json({ msg: 'Erro interno do servidor' });
    }

    async function criarUsuario() {
        try {
            //criar senha
            const salt = await bcrypt.genSalt(12)
            const senhaHash = await bcrypt.hash(senha, salt)

            //cria usuario
            connection.execute(
                'INSERT INTO usuarios (nome, email, data_nasc, genero, senha) VALUES (?, ?, ?, ?, ?)',
                [nome, email, dataNasc, genero, senhaHash],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        return res.status(202).json({ msg: 'Usuário cadastrado' })
                    }
                }
            );
        } catch {
            console.error('Erro:', err);
            return res.status(500).json({ msg: 'Erro interno do servidor' });
        }
    }
};
exports.loginUsuario = async (req, res) => {
    const { email, senha } = req.body

    // Validação
    if (!email) {
        return res.status(422).json({ msg: 'O email é obrigatório!' })
    }
    if (!senha) {
        return res.status(422).json({ msg: 'A senha é obrigatória!' })
    }

    try {
        // Checa se o usuário existe
        connection.execute(
            'SELECT * FROM usuarios WHERE email = ?',
            [email],
            async function (err, results, fields) {
                if (err) {
                    console.error('Erro ao executar a consulta:', err);
                    return res.status(500).json({ msg: 'Erro interno do servidor' });
                }
                if (results.length > 0) {
                    // Se a consulta retornou resultados
                    for (const result of results) {
                        const senhaUsuario = result.senha
                        const compararSenha = await bcrypt.compare(senha, senhaUsuario)

                        if (!compararSenha) {
                            return res.status(422).json({ msg: 'Senha é inválida' })
                        } else {
                            const secret = process.env.SECRET

                            const token = jwt.sign({
                                id: result.id
                            }, secret)

                            res.status(200).json({ msg: 'Autenticação realizada com sucesso', token })

                            // Executa o código todos os domingos, cria relatório
                            cron.schedule('* * * * 0', () => {
                                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                                axios.get(`http://localhost:3000/relatorios/criar`)
                                    .then((res) => {
                                        console.log('Relatório criado!');
                                    })
                                    .catch((error) => {
                                        console.error('Erro ao criar relatório:', error);
                                    });
                            }, {
                                timezone: 'America/Sao_Paulo'
                            });
                        }
                    }
                } else {
                    return res.status(404).json({ msg: 'Usuário não cadastrado' })
                }
            }
        );
    } catch (err) {
        console.error('Erro:', err);
        return res.status(500).json({ msg: 'Erro interno do servidor' });
    }
};