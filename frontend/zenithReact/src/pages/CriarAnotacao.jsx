import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Adicionar from '../icons/Adicionar';

const CriarAnotacao = () => {
    const navigate = useNavigate(); // Use o hook dentro do componente funcional

    const criarNota = async () => {
        try {
            console.log("Tentando criar nota...");
            // Cria a nota
            await axios.post('http://localhost:3000/notas/criar');

            // Pega o último ID (nota criada)
            const res = await axios.get('http://localhost:3000/notas/nota/ultima');

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
            <Button className='rounded-full sm:w-auto h-auto p-2 bg-verde rounded-md text-white
      font-bold text-sm flex items-center justify-content-start' text='Adicionar' child={<Adicionar />} click={criarNota} />
        </div>
    );
};

export default CriarAnotacao;