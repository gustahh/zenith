const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vasco1898',
    database: 'zenith'
})

app.post('/registrar', (req, res) => {
    const query = 'INSERT INTO usuarios (`nome`, `email`, `dataNasc`, `genero`, `senha`) VALUES (?)';
    const values = [
        req.body.nome,
        req.body.email,
        req.body.dataNasc,
        req.body.genero,
        req.body.senha
    ] 
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Erro");
        }
        return res.json(data);
        
    })
    }
)

app.listen(8080, () => {
    console.log('Ouvindo!');
})