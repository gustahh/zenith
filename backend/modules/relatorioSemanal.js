// relatorioSemanal.js
const axios = require('axios');
const { getJwtToken } = require('./token');

function CriarRelatorio() {

    /*

    const token = getJwtToken();
    console.log(token);

    // Verifica se o token está definido
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        axios.get(`http://localhost:3000/relatorios/criar`)
            .then((res) => {
                console.log('Relatório criado!');
            })
            .catch((error) => {
                console.error('Erro ao criar relatório:', error);
            });
    } else {
        console.error('Token não definido.');
    */
}

module.exports = CriarRelatorio;