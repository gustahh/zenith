const connection = require('../database/db');


exports.retornaBlocos = (req, res) => {
    //adiciona frase
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
            'SELECT id_anotacao, tamanho, id_cor FROM bloco_anotacao WHERE id_usuario = ',
            [idLogado],
                function (err, results) {
                    if (err) {
                        // Se ocorrer um erro durante a execução da consulta
                        console.error('Erro ao executar a consulta:', err);
                    } else {
                        return res.status(202).json({ results })
                    }
                }
        }
    }
    );
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
