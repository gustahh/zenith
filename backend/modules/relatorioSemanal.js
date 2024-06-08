// relatorioSemanal.js
const axios = require('axios');

function CriarRelatorio() {
    const token = req.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    axios.get(`http://localhost:3000/relatorios/criar`)
        .then((res) => {
            console.log('Relatório criado!');
        })
        .catch((error) => {
            console.error('Erro ao criar relatório:', error);
        });
}

module.exports = CriarRelatorio;