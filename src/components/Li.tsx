import React from 'react';

interface LiProps {
  nome: string;
  cor: string;
  children: React.ReactNode;
}

const Li: React.FC<LiProps> = ({ nome, cor, children }) => {
  return (
    <li className='w-auto justify-center sm:w-44 h-8 flex sm:justify-start items-center p-4 rounded-md hover:dark:bg-white/20 hover:bg-black/20'>
      {children}
      <span className={`hidden sm:block text-${cor} float-left font-bold pl-2`}>{nome}</span>
    </li>
  );
};

export default Li;
