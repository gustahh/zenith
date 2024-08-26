import React, { ChangeEvent } from 'react';

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  handle: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, name, placeholder, handle }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className='w-full h-8 bg-preto/20 rounded-md mb-3 placeholder:text-cinzaTexto text-cinzaTexto pl-2 outline-none focus:border-2 border-verde'
      onChange={handle}
    />
  );
};

export default Input;
