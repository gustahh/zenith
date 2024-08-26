import React from 'react';

interface LixeiraProps {
  title?: string;
  className?: string;
  fill?: string;
  stroke?: string;
}

const Lixeira: React.FC<LixeiraProps> = ({
  title = "trash",
  className = "",
  fill = "#000000",
  stroke = "#000000",
}) => {
  return (
    <svg height="18" width="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className={className}>
      <title>{title}</title>
      <g fill={fill} stroke={stroke}>
        <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="2.75" x2="15.25" y1="4.25" y2="4.25"/>
        <path d="M6.75,4.25v-1.5c0-.552,.448-1,1-1h2.5c.552,0,1,.448,1,1v1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        <path d="M13.5,6.75l-.4,7.605c-.056,1.062-.934,1.895-1.997,1.895H6.898c-1.064,0-1.941-.833-1.997-1.895l-.4-7.605" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </g>
    </svg>
  );
};

export default Lixeira;
