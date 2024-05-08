const connection = require('../database/db');

exports.criarFrase = (req, res) => {
    const { texto, autor } = req.body

    // validação

    if (!texto) {
        return res.status(422).json({ msg: 'O texto é obrigatório!' })
    }
    if (!autor) {
        return res.status(422).json({ msg: 'O autor é obrigatório!' })
    }

    //adiciona frase
    connection.execute(
        'INSERT INTO frases (texto, autor) VALUES (?, ?)',
        [texto, autor],
        function (err, results) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                console.error('Erro ao executar a consulta:', err);
            } else {
                return res.status(202).json({ msg: 'Frase adicionada' })
            }
        }
    );
};

exports.fraseDia = (req, res) => {
    connection.execute(
        'select texto, autor, cor from frase_do_dia ORDER BY id DESC LIMIT 1',
        function (err, results) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                console.error('Erro ao executar a consulta:', err);
            } else {
                results.forEach(result => {
                    const frase = result.texto
                    const autor = result.autor
                    const cor = result.cor

                    return res.status(202).json({
                        frase_do_dia: frase,
                        autor: autor,
                        cor: cor
                    })
                });
            }
        }
    );
};