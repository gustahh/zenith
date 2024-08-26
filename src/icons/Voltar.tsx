import React from 'react';

interface VoltarProps {
  title?: string;
  className?: string;
  stroke?: string;
  fill?: string;
}

function Voltar({ title = "chevron left", className, stroke, fill }: VoltarProps) {
  return (
    <svg height="18" width="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className={className}>
      <title>{title}</title>
      <g fill={fill}>
        <polyline fill="none" points="11.5 15.25 5.25 9 11.5 2.75" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export default Voltar;
