const connection = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cron = require('node-cron');

exports.registrarUsuario = async (req, res) => {
    const { nome, email, dataNasc, genero, senha } = req.body

    // validação
    var ano = dataNasc.substring(0, 4);
    let anoAtual = new Date().getFullYear();
    if (!nome) {
        return res.status(422).json({ msg: 'O nome é obrigatório!' })
    }
    if (!email) {
        return res.status(422).json({ msg: 'O email é obrigatório!' })
    }
    if (!dataNasc) {
        return res.status(422).json({ msg: 'A data de nascimento é obrigatória!' })
    } else if (ano > anoAtual) {
        return res.status(422).json({ msg: 'Ano inválido!' })
    }
    if (!genero) {
        return res.status(422).json({ msg: 'O genero é obrigatório!' })
    }
    if (!senha) {
        return res.status(422).json({ msg: 'O senha é obrigatório!' })
    }

    //verifica se usuário existe
    connection.execute(
        'SELECT email FROM usuarios WHERE email = ?',
        [email],
        function (err, results) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                console.error('Erro ao executar a consulta:', err);
            } else {
                if (results.length > 0) {
                    // Se a consulta retornou resultados
                    return res.status(422).json({ msg: 'Por favor, utilize outro email' })
                } else {
                    return res.status(200).json({ msg: 'Usuário cadastrado com sucesso' })
                }
            }
        }
    );
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
};

exports.loginUsuario = async (req, res) => {
    const { email, senha } = req.body

    //validação
    if (!email) {
        return res.status(422).json({ msg: 'O email é obrigatório!' })
    }
    if (!senha) {
        return res.status(422).json({ msg: 'A senha é obrigatória!' })
    }

    //checa se usuario existe

    connection.execute(
        'SELECT * FROM usuarios WHERE email = ?',
        [email],
        function (err, results, fields) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                console.error('Erro ao executar a consulta:', err);
            } else {
                if (results.length > 0) {
                    // Se a consulta retornou resultados
                    results.forEach(async function (result) {
                        const senhaUsuario = result.senha
                        const compararSenha = await bcrypt.compare(senha, senhaUsuario)

                        if (!compararSenha) {
                            return res.status(422).json({ msg: 'Senha é inválida' })
                        }

                        try {

                            const secret = process.env.SECRET

                            const token = jwt.sign({
                                id: result.id
                            }, secret)

                            res.status(200).json({ msg: 'Autenticação realizada com sucesso', token })

                            //executa o código todos os domingos
                            cron.schedule('* * * * 0', () => {
                                const axiosInstancia = axios.create({
                                    baseURL: 'http://localhost:3000' // Altere conforme necessário
                                });

                                axiosInstancia.interceptors.request.use(
                                    function (config) {
                                        // Adicione o token JWT ao cabeçalho de autorização
                                        config.headers.Authorization = `Bearer ${token}`;
                                        return config;
                                    },
                                    function (error) {
                                        // Faça algo com erros de solicitação
                                        return Promise.reject(error);
                                    }
                                );

                                const dadosRelatorio = {
                                    emocao_pred: resultados.emocao_pred[0],
                                    mes: resultados.mes[0],
                                    semanaMes: resultados.semanaMes[0]
                                };

                                axiosInstancia.post('/create/relatorio', dadosRelatorio)
                                    .then(response => {
                                        console.log('Novo relatório inserido:');
                                    })
                                    .catch(error => {
                                        console.error('Erro ao inserir relatório:', error);
                                    });
                            }), {
                                timezone: 'America/Sao_Paulo'
                            };
                        } catch (err) {
                            console.log(err)

                            return res.status(500).json({
                                msg: 'Ocorreu um erro no servidor, tente novamente mais tarde!'
                            })
                        }

                    });

                } else {
                    return res.status(404).json({ msg: 'Usuário não encontrado' })
                }
            }
        }
    );
};