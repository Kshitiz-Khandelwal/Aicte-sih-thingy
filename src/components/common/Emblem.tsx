import React from 'react';

interface EmblemProps {
  className?: string;
  size?: number;
}

export const Emblem: React.FC<EmblemProps> = ({ className = '', size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 ${className}`}
      aria-label="APAAR Emblem"
    >
      {/* Outer gold ring with subtle rim */}
      <circle cx="24" cy="24" r="23" stroke="#B58545" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="21" fill="#102B48" stroke="#B58545" strokeWidth="0.75" />
      
      {/* Outer decorative sunburst / gear petals */}
      <circle cx="24" cy="24" r="18" stroke="#B58545" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
      
      {/* Inner geometric emblem: stylized interlocking pillars / torch of knowledge */}
      <path
        d="M24 10L26.5 17H34L28 21.5L30.5 28.5L24 24L17.5 28.5L20 21.5L14 17H21.5L24 10Z"
        fill="#B58545"
        opacity="0.85"
      />
      
      {/* Center core seal */}
      <circle cx="24" cy="24" r="5" fill="#102B48" stroke="#D8A968" strokeWidth="1" />
      <circle cx="24" cy="24" r="2" fill="#D8A968" />
      
      {/* Circular micro dots */}
      <circle cx="24" cy="5" r="1" fill="#B58545" />
      <circle cx="24" cy="43" r="1" fill="#B58545" />
      <circle cx="5" cy="24" r="1" fill="#B58545" />
      <circle cx="43" cy="24" r="1" fill="#B58545" />
    </svg>
  );
};

