'use client';

import React, { useState, useEffect } from 'react';

const steps = [
  { id: '01', title: 'Discovery & Strategy' },
  { id: '02', title: 'UI/UX Design' },
  { id: '03', title: 'Development & Testing' },
  { id: '04', title: 'Deployment & Scaling' },
];

export default function AnimatedProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000); // Change step every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-4">
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        
        return (
          <div key={step.id} className="flex items-center gap-4 text-sm transition-all duration-500">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs transition-all duration-500 ${
                isActive 
                  ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]' 
                  : 'bg-[#111] border border-[#222] text-zinc-500'
              }`}
            >
              {step.id}
            </div>
            <span 
              className={`font-medium transition-colors duration-500 ${
                isActive ? 'text-white' : 'text-zinc-300'
              }`}
            >
              {step.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
