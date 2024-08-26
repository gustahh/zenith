import React from 'react';
import BarraLateral from './BarraLateral';
import BarraMobile from './BarraMobile';

interface ViewProps {
  children: React.ReactNode;
}

const View: React.FC<ViewProps> = ({ children }) => {
  return (
    <>
      <BarraLateral />
      <div className='w-[100%] h-screen sm:w-[75%] sm:h-screen bg-ice dark:bg-cinzaEscuro p-5 float-left overflow-y-scroll'>
        {children}
      </div>
      <BarraMobile />
    </>
  );
};

export default View;
