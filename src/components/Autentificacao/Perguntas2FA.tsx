import { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';

interface Pergunta {
  id: string;
  pergunta: string;
}

interface Habilitar2FAProps {
  handle: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function Perguntas2FA(props: Habilitar2FAProps) {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>('');
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      axios.get('http://localhost:3000/2FA/perguntas')
        .then((res) => {
          setPerguntas(res.data.results);
        })
        .catch(err => {
          console.error('Erro ao buscar perguntas:', err);
        });
    } else {
      console.warn('Token não encontrado');
    }
  }, []);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setOpcaoSelecionada(value);
    props.handle(event); // Chama a função de manipulação recebida por props
  };

  return (
    <>
      <select
        onChange={handleSelectChange}
        name="pergunta"
        className='p-0 flex w-auto h-8 bg-preto/10 rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto'
      >
        {perguntas.map((pergunta) => (
          <option key={pergunta.id} value={pergunta.id}>
            {pergunta.pergunta}
          </option>
        ))}
      </select>
    </>
  );
}

export default Perguntas2FA;
