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
            return res.status(500).json({ error: 'Erro ao decodificar o token' });
        } else {
            // Token decodificado com sucesso
            const idLogado = decoded.id;

            let { titulo, texto, emocao } = req.body

            //Retorna quantas anotações o usuário tem
            connection.execute(
                'SELECT COUNT(id) AS numAnotacoes FROM anotacoes WHERE id_usuario = ?',
                [idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                        return res.status(500).json({ error: 'Erro ao contar anotações' });
                    } else {
                        const count = results[0].numAnotacoes;

                        if (count > 1) {
                            titulo = `Minha anotação #${count + 1}`;
                        } else {
                            titulo = `Minha primeira anotação`;
                        }

                        texto = 'Seu texto vem aqui!';
                        emocao = 'Feliz';

                        //cria anotação
                        connection.execute(
                            'INSERT INTO anotacoes (titulo, texto, emocao, id_usuario) VALUES (?, ?, ?, ?);',
                            [titulo, texto, emocao, idLogado],
                            function (err, results) {
                                if (err) {
                                    // Se ocorrer um erro durante a execução da consulta
                                    console.error('Erro ao executar a consulta:', err);
                                    return res.status(500).json({ error: 'Erro ao criar anotação' });
                                } else {
                                    //Seleciona o ID da última anotação criada pelo usuario
                                    connection.execute(
                                        'SELECT max(id) AS ultimaAnotacao FROM anotacoes WHERE id_usuario = ?',
                                        [idLogado],
                                        function (err, results) {
                                            if (err) {
                                                // Se ocorrer um erro durante a execução da consulta
                                                console.error('Erro ao executar a consulta:', err);
                                                return res.status(500).json({ error: 'Erro ao selecionar última anotação' });
                                            } else {
                                                const idAnotacao = results[0].ultimaAnotacao;
                                                //Insere o bloco referente a anotação criada na tabela de bloco
                                                connection.execute(
                                                    'INSERT INTO bloco_anotacao (id_anotacao, id_usuario) VALUES (?, ?)',
                                                    [idAnotacao, idLogado],
                                                    function (err, results) {
                                                        if (err) {
                                                            console.error('Erro ao executar a consulta:', err);
                                                            return res.status(500).json({ error: 'Erro ao inserir bloco de anotação' });
                                                        } else {
                                                            return res.status(202).json({ msg: 'Anotação criada com sucesso!' });
                                                        }
                                                    }
                                                );
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    }
                }
            );
        }
    })
};

//obtem notas de usuario logado
exports.obterNotas = async (req, res) => {
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
                'SELECT id, titulo, texto, emocao, data_criacao FROM anotacoes WHERE id_usuario = ?',
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
};

//retorna o bloco de uma nota
exports.retornaBlocoAnotacao = (req, res) => {

    id = req.params.id;

    //adiciona frase
    connection.execute(
        'SELECT id_anotacao, tamanho, id_cor FROM bloco_anotacao WHERE id_anotacao = ?',
        [id],
        function (err, results) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                console.error('Erro ao executar a consulta:', err);
                return res.status(404).json({ msg: "Erro ao execultar consulta." });
            } else {
                return res.status(202).json({ results })
            }
        }
    );
}

//obtem nota especifica
exports.nota = async (req, res) => {
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
            const id = req.params.id;

            // verificar se usuario existe
            connection.execute(
                'SELECT id, titulo, texto, emocao, data_edicao FROM anotacoes WHERE id_usuario = ? AND id = ?',
                [idLogado, id],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        if (results.length < 1) {
                            // Se a consulta retornou resultados
                            return res.status(404).json({ msg: 'Esta nota não existe ou pertence a outro usuário' })
                        } else {
                            return res.status(202).json({ results })
                        }
                    }
                }
            );
        }
    });
};

//obtem notas de uma semana especifica de um mês
exports.notaSemana = async (req, res) => {
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
            const mes = req.params.mes;
            const semanaMes = req.params.semanaMes;

            // verificar se usuario existe
            connection.execute(
                'SELECT * FROM anotacoes WHERE id_usuario = ? AND mes = ? AND semana_do_mes = ?',
                [idLogado, mes, semanaMes],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        if (results.length < 1) {
                            // Se a consulta retornou resultados
                            return res.status(404).json({ msg: 'não existem notas para determinada semana e mês' })
                        } else {
                            return res.status(202).json({ results })
                        }
                    }
                }
            );
        }
    });
};

//obtem ultima anotacao especifica
exports.ultimaNota = async (req, res) => {
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
                'SELECT max(id) AS ultimaAnotacao FROM anotacoes WHERE id_usuario = ?',
                [idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        if (results.length < 1) {
                            // Se a consulta retornou resultados
                            return res.status(404).json({ msg: 'Esta nota não existe' })
                        } else {
                            return res.status(202).json({ results })
                        }
                    }
                }
            );
        }
    });
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
                'DELETE FROM bloco_anotacao WHERE id_anotacao = ? AND id_usuario = ?',
                [id, idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
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

