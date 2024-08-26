import React from 'react';
import FormContainer from '../../components/FormContainer';
import FormRegistro from '../../components/Registro/FormRegistro';

const Registrar: React.FC = () => {
  return (
    <div className="w-full h-screen bg-cinzaEscuro flex flex-col items-center justify-center sm:bg-verdeLimao">
      <FormContainer name="Criar uma conta">
        <FormRegistro />
      </FormContainer>
    </div>
  );
}

export default Registrar;
