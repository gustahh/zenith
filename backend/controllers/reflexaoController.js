const connection = require('../database/db');

exports.criarReflexao = (req, res) => {
    const { frase } = req.body

    // validação

    if (!frase) {
        return res.status(422).json({ msg: 'A frase é obrigatória!' })
    }

    //adiciona frase
    connection.execute(
        'INSERT INTO reflexao (frase) VALUES (?)',
        [frase],
        function (err, results) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                console.error('Erro ao executar a consulta:', err);
            } else {
                return res.status(202).json({ msg: 'Reflexão adicionada' })
            }
        }
    );
};

exports.reflexao = (req, res) => {
    connection.execute(
        'SELECT frase FROM reflexao ORDER BY RAND() LIMIT 1',
        function (err, results) {
            if (err) {
                // Se ocorrer um erro durante a execução da consulta
                console.error('Erro ao executar a consulta:', err);
            } else {
                return res.status(202).json({ results })
            }
        }
    );
};