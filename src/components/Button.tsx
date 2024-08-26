import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  click?: () => void;
  child?: React.ReactNode;
  text?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button type={props.type} className={props.className} onClick={props.click}>
      {props.child} 
      <span className='pl-1'>{props.text}</span>
    </button>
  );
};

export default Button;
