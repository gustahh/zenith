import React from 'react';

interface EditarProps {
  title?: string;
  className?: string;
  stroke?: string;
}

const Editar: React.FC<EditarProps> = ({
  title = "pen writing 6",
  className = "",
  stroke = "#000000",
}) => {
  return (
    <svg height="18" width="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className={className}>
      <title>{title}</title>
      <g fill="#000000" stroke={stroke}>
        <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="12.054" x2="14.77" y1="4.932" y2="6.982"/>
        <path d="M6.396,15.25s2.529-.527,3.701-2.079l5.809-7.695c.566-.75,.417-1.817-.333-2.383h0c-.75-.566-1.817-.417-2.383,.333l-5.809,7.695c-1.172,1.552-.985,4.129-.985,4.129Z" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        <path d="M4.232,15.25c-1.933-1.297-2.397-2.458-2.471-3.27-.194-2.14,2.196-3.281,2.18-5.669-.01-1.532-1.006-2.77-1.817-3.561" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </g>
    </svg>
  );
};

export default Editar;
