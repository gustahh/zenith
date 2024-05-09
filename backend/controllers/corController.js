const connection = require('../database/db');

exports.criarCor = (req, res) => {
    const { cor, hex } = req.body

    // validação

    if (!cor) {
        return res.status(422).json({ msg: 'O nome da cor é obrigatório!' })
    }
    if (!hex) {
        return res.status(422).json({ msg: 'O hex é obrigatório!' })
    }

    //adiciona frase
    connection.execute(
        'INSERT INTO cores (nome, hex) VALUES (?, ?)',
        [cor, hex],
        function (err, results) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                console.error('Erro ao executar a consulta:', err);
            } else {
                return res.status(202).json({ msg: 'Cor adicionada' })
            }
        }
    );
};

exports.retornaCores = (req, res) => {
    //adiciona frase
    connection.execute(
        'SELECT nome FROM cores',
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