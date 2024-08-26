import React from 'react';

interface LabelProps {
  nome: string;
  id?: string;
}

const Label: React.FC<LabelProps> = ({ nome, id }) => {
  return (
    <label className='float-left text-cinzaTexto font-bold' id={id}> 
      {nome}
    </label>
  );
};

export default Label;
