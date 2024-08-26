import React, { useState, useEffect } from 'react';

const TrocaTema: React.FC = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>('');

  useEffect(() => {
    // Inicializa o estado com o tema armazenado no localStorage, se houver
    const temaSalvo = localStorage.getItem('tema') || 'light';
    setOpcaoSelecionada(temaSalvo);
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const novoTema = event.target.value;
    setOpcaoSelecionada(novoTema);

    // Atualiza o tema no localStorage e recarrega a página para aplicar o tema
    localStorage.setItem('tema', novoTema);
    window.location.reload();
  };

  return (
    <select
      value={opcaoSelecionada}
      onChange={handleSelectChange}
      name="trocatema"
      className='p-0 flex w-28 h-8 bg-preto/10 rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto'
    >
      <option value="light">Claro</option>
      <option value="dark">Escuro</option>
    </select>
  );
};

export default TrocaTema;
