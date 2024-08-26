import React from 'react';

interface FormContainerProps {
  name: string;
  children?: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = (props) => {
  return (
    <div className='w-86 h-auto bg-transparent sm:bg-cinzaEscuro rounded-lg text-center p-3'>
      <span className='text-white justify-center font-bold'>{props.name}</span>
      <br/><br/>
      {props.children}
    </div>
  );
};

export default FormContainer;
