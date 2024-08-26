import React from 'react';

interface FecharProps {
  title?: string;
  className?: string;
  stroke?: string;
}

const Fechar: React.FC<FecharProps> = ({
  title = "xmark",
  className = "",
  stroke = "#999999",
}) => {
  return (
    <svg height="24" width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className={className}>
      <title>{title}</title>
      <g fill="none" stroke={stroke}>
        <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="14" x2="4" y1="4" y2="14"/>
        <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="4" x2="14" y1="4" y2="14"/>
      </g>
    </svg>
  );
};

export default Fechar;
