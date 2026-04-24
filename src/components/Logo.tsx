import React from 'react';

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Octagon Background */}
      <polygon 
        points="60.6,5 139.4,5 195,60.6 195,139.4 139.4,195 60.6,195 5,139.4 5,60.6" 
        fill="#11009E" 
        stroke="#000000" 
        strokeWidth="1"
      />
      
      {/* 8-Pointed Star */}
      <g fill="#CC0000">
        <rect x="45" y="40" width="110" height="110" />
        <rect x="45" y="40" width="110" height="110" transform="rotate(45 100 95)" />
      </g>
      
      {/* SFSM Text */}
      <text 
        x="100" 
        y="110" 
        fontFamily="Georgia, 'Times New Roman', serif" 
        fontSize="42" 
        fontWeight="bold" 
        fill="#FFFFFF" 
        textAnchor="middle"
      >
        SFSM
      </text>
      
      {/* Bottom Text */}
      <text 
        x="100" 
        y="165" 
        fontFamily="Georgia, 'Times New Roman', serif" 
        fontSize="12" 
        fontWeight="bold" 
        fill="#FFFFFF" 
        textAnchor="middle"
        letterSpacing="1"
      >
        SECURITY
      </text>
      <text 
        x="100" 
        y="180" 
        fontFamily="Georgia, 'Times New Roman', serif" 
        fontSize="12" 
        fontWeight="bold" 
        fill="#FFFFFF" 
        textAnchor="middle"
        letterSpacing="1"
      >
        FIRE SAFETY
      </text>
    </svg>
  );
}
