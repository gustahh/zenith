import React from 'react';
import FormContainer from '../../components/FormContainer';
import FormLogin from '../../components/Login/FormLogin';

const Login: React.FC = () => {
  return (
    <div className="w-full h-screen bg-cinzaEscuro flex flex-col items-center justify-center sm:bg-verdeLimao">
      <FormContainer name="Bem vindo de volta!">
        <FormLogin />
      </FormContainer>
    </div>
  );
};

export default Login;
