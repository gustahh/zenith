import React from 'react';

interface PinProps {
  title?: string;
  className?: string;
  fill?: string;
  stroke?: string;
}

const Pin: React.FC<PinProps> = ({
  title = "pin tack",
  className = "",
  fill = "#000000",
  stroke = "#000000",
}) => {
  return (
    <svg height="18" width="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className={className}>
      <title>{title}</title>
      <g fill={fill} stroke={stroke}>
        <line
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="9"
          x2="9"
          y1="16.25"
          y2="12.25"
        />
        <path
          d="M14.25,12.25c-.089-.699-.318-1.76-.969-2.875-.335-.574-.703-1.028-1.031-1.375V3.75c0-1.105-.895-2-2-2h-2.5c-1.105,0-2,.895-2,2v4.25c-.329,.347-.697,.801-1.031,1.375-.65,1.115-.88,2.176-.969,2.875H14.25Z"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

export default Pin;
