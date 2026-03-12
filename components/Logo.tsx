import React from 'react';

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="m-cutout">
          <rect x="0" y="0" width="96" height="96" fill="white" />
          <path 
            d="M 36 76 H 20 V 20 L 56 56" 
            stroke="black" 
            strokeWidth="18" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </mask>
      </defs>
      
      {/* Right half */}
      <path 
        d="M 60 76 H 76 V 20 L 40 56" 
        stroke="currentColor" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        mask="url(#m-cutout)" 
      />
      
      {/* Left half */}
      <path 
        d="M 36 76 H 20 V 20 L 56 56" 
        stroke="currentColor" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}
