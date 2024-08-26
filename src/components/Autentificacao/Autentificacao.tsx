import { useState, useEffect } from 'react';
import FormContainer from "../FormContainer";
import Form2FA from "./Form2FA";
import axios from 'axios';

interface AutentificacaoProps {
    email: string;
    visibilidade: string;
}

function Autentificacao({ email, visibilidade }: AutentificacaoProps) {
    const [pergunta, setPergunta] = useState<string>('');
    const [id, setId] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                // Primeiro, buscar o ID do usuário
                const response = await axios.get<{ results: { id: number }[] }>('http://localhost:3000/auth/dados', {
                    params: { email }
                });

                // Verificar se a resposta contém resultados
                if (response.data.results.length > 0) {
                    const userId = response.data.results[0].id;
                    setId(userId);

                    // Em seguida, buscar a pergunta de segurança usando o ID do usuário
                    const responsePergunta = await axios.get<{ results: { pergunta: string }[] }>(`http://localhost:3000/2FA/pergunta/${userId}`);
                    if (responsePergunta.data.results.length > 0) {
                        setPergunta(responsePergunta.data.results[0].pergunta);
                    } else {
                        setError('Pergunta de segurança não encontrada.');
                    }
                } else {
                    setError('Usuário não encontrado.');
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setError('Erro ao buscar dados. Tente novamente.');
            } finally {
                setLoading(false);
            }
        };

        if (email) {
            fetchData();
        }
    }, [email]);

    return (
        <div className={`${visibilidade}`}>
            {loading && <p>Carregando...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && (
                <FormContainer name="Para prosseguir, responda sua pergunta de segurança">
                    <div className='flex items-center justify-center'>
                        <div className='text-white justify-center font-bold'>{pergunta}</div>
                    </div>
                    <Form2FA id={id} />
                </FormContainer>
            )}
        </div>
    );
}

export default Autentificacao;
