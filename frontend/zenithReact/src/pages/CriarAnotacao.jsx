import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const CriarAnotacao = () => {
    const navigate = useNavigate(); // Use o hook dentro do componente funcional

    const criarNota = async () => {
        try {
            console.log("Tentando criar nota...");
            // Cria a nota
            await axios.post('http://localhost:3000/notas/criar');
            console.log("Nota criada. Tentando pegar o último ID...");

            // Pega o último ID (nota criada)
            const res = await axios.get('http://localhost:3000/notas/nota/ultima');
            console.log("Resposta da API para o último ID:", res.data);

            const ultimoId = res.data.results[0].ultimaAnotacao;
            console.log("Último ID da anotação:", ultimoId);

            // Redireciona para a nova nota criada
            navigate(`/anotacoes/${ultimoId}`);
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <div>
            <Button className='w-auto h-auto p-2 bg-verde rounded-md mr-2 text-white
      font-bold text-sm' text='Adicionar' click={criarNota} />
        </div>
    );
};

export default CriarAnotacao;