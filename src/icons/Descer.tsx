import React from 'react';

interface DescerProps {
  title?: string;
  className?: string;
  stroke?: string;
}

const Descer: React.FC<DescerProps> = ({
  title = "chevron down",
  className = "",
  stroke = "#000000",
}) => {
  return (
    <svg height="14" width="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className={className}>
      <title>{title}</title>
      <g fill="#000000">
        <polyline fill="none" points="15.25 6.5 9 12.75 2.75 6.5" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </g>
    </svg>
  );
};

export default Descer;
