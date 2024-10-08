import React from 'react';

interface ConfiguracoesProps {
  title?: string;
  className?: string;
  fill?: string;
  stroke?: string;
}

const Configuracoes: React.FC<ConfiguracoesProps> = ({
  title = "sliders",
  className = "",
  fill = "#999999",
  stroke = "#999999",
}) => {
  return (
    <svg height="24" width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className={className}>
      <title>{title}</title>
      <g fill={fill} stroke={stroke}>
        <line fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="13.25" x2="16.25" y1="5.25" y2="5.25"/>
        <line fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="1.75" x2="8.75" y1="5.25" y2="5.25"/>
        <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="4.75" x2="1.75" y1="12.75" y2="12.75"/>
        <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="16.25" x2="9.25" y1="12.75" y2="12.75"/>
        <circle cx="11" cy="5.25" fill="none" r="2.25" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        <circle cx="7" cy="12.75" fill="none" r="2.25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </g>
    </svg>
  );
};

export default Configuracoes;
