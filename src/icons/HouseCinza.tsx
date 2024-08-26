import React from 'react';

interface HouseCinzaProps {
  title?: string;
  className?: string;
  stroke?: string;
}

const HouseCinza: React.FC<HouseCinzaProps> = ({
  title = "house 5",
  className = "",
  stroke = "#999999",
}) => {
  return (
    <svg height="24" width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className={className}>
      <title>{title}</title>
      <g fill="none" stroke={stroke}>
        <path d="M5.75,15.75v-4.75c0-.69,.56-1.25,1.25-1.25h0c.69,0,1.25,.56,1.25,1.25v4.75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        <path d="M2.655,6.45L9,1.75l6.345,4.7c.255,.189,.405,.487,.405,.804v6.496c0,1.105-.895,2-2,2H4.25c-1.105,0-2-.895-2-2V7.254c0-.317,.15-.615,.405-.804Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        <line strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="10.75" x2="12.25" y1="9.75" y2="9.75"/>
        <line stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="13.75" x2="13.75" y1="2.75" y2="5.269"/>
      </g>
    </svg>
  );
};

export default HouseCinza;
