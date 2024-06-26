import React, { useState, useEffect } from 'react';
import FormContainer from "./FormContainer";
import Form2FA from "./Form2FA";
import axios from 'axios';

function Autentificacao(props) {
    const { email } = props;
    const [pergunta, setPergunta] = useState('');
    const [id, setId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                // Primeiro, buscar o ID do usuário
                const response = await axios.get('http://localhost:3000/auth/dados', {
                    params: { email: email }
                });

                // Extrair o ID do primeiro resultado
                const userId = response.data.results[0].id;
                setId(userId);

                // Em seguida, buscar a pergunta de segurança usando o ID do usuário
                const responsePergunta = await axios.get(`http://localhost:3000/2FA/pergunta/${userId}`);
                setPergunta(responsePergunta.data.results[0].pergunta);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                // Trate erros conforme necessário
            }
        };

        if (email) {
            fetchData();
        }
    }, [email]); // Executar o efeito quando o email mudar

    return (
        <>
            <div className={`${props.visibilidade}`}>
                <FormContainer name="Para prosseguir, responda sua pergunta de segurança">
                    <div className='flex items-center justify-center'>
                        <div className='text-white justify-center font-bold'>{pergunta}</div>
                    </div>

                    <Form2FA id={id} />
                </FormContainer>
            </div>
        </>
    );
}

export default Autentificacao;