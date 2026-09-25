import React from 'react';

interface IbecLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function IbecLogo({ className = "h-14 w-auto", width = 200, height = 55 }: IbecLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 80"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="IBEC - Institute for Bioengineering of Catalonia"
    >
      <g transform="translate(10, 8)">
        {/* IBEC Orange Square Node */}
        <path
          d="M 16 34 L 16 8 L 42 8 L 42 34"
          fill="none"
          stroke="#ABB330"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.85"
        />
        <circle cx="16" cy="34" r="7" fill="#EA5B0C" />
        
        {/* IBEC Typography */}
        <text
          x="44"
          y="44"
          fontFamily="'IBM Plex Sans', sans-serif"
          fontWeight="700"
          fontSize="48"
          fill="#ABB330"
          letterSpacing="-1"
        >
          IBEC
        </text>
        
        {/* Registered symbol */}
        <text
          x="166"
          y="22"
          fontFamily="'IBM Plex Sans', sans-serif"
          fontWeight="600"
          fontSize="14"
          fill="#4A5471"
          fillOpacity="0.6"
        >
          R
        </text>
        
        {/* Subtitle */}
        <text
          x="16"
          y="62"
          fontFamily="'IBM Plex Sans', sans-serif"
          fontWeight="400"
          fontSize="11.5"
          letterSpacing="0.2"
          fill="#4A5471"
          fillOpacity="0.9"
        >
          Institute for Bioengineering of Catalonia
        </text>
      </g>
    </svg>
  );
}
