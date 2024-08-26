import React from 'react';

interface BlocoProps {
  title?: string;
  className?: string;
  fill?: string;
  stroke?: string;
}

const Bloco: React.FC<BlocoProps> = ({
  title = "layers",
  className = "",
  fill = "#000000",
  stroke = "#000000",
}) => {
  return (
    <svg height="18" width="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className={className}>
      <title>{title}</title>
      <g fill={fill} stroke={stroke}>
        <path
          d="M2.665,5.086L8.534,1.995c.292-.154,.64-.154,.932,0l5.87,3.091c.534,.281,.534,1.046,0,1.327l-5.87,3.091c-.292,.154-.64,.154-.932,0L2.665,6.414c-.534-.281-.534-1.046,0-1.327Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M15.736,9c0,.261-.134,.523-.401,.664l-5.87,3.091c-.292,.154-.64,.154-.932,0l-5.87-3.091c-.267-.141-.401-.402-.401-.664"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M15.736,12.25c0,.261-.134,.523-.401,.664l-5.87,3.091c-.292,.154-.64,.154-.932,0l-5.87-3.091c-.267-.141-.401-.402-.401-.664"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

export default Bloco;
