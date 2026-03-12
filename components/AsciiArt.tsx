"use client";

import { useEffect, useRef, useState } from 'react';

const CHARS = [' ', '.', '·', '-', '=', '+', '*', '#', '%', '@'];

export default function AsciiArt() {
  const [frame, setFrame] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    let cols = 100;
    let rows = 40;

    const updateSize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      // Adjust divisors based on monospace font metrics (approx 6px width, 10px height)
      cols = Math.floor(width / 6); 
      rows = Math.floor(height / 10);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    const animate = () => {
      timeRef.current += 0.015; // Slow animation
      const t = timeRef.current;
      let output = '';

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // Flowing organic wave field
          const nx = x / 25;
          const ny = y / 15;
          const z = (
            Math.sin(nx + t) + 
            Math.cos(ny - t * 0.8) + 
            Math.sin((nx + ny) * 0.5 + t * 1.2)
          ) / 3;
          
          // Normalize z from [-1, 1] to [0, 1]
          let normalizedZ = (z + 1) / 2;
          
          // Vignette effect to fade out edges
          const edgeFadeX = Math.pow(Math.sin((x / cols) * Math.PI), 0.5);
          const edgeFadeY = Math.pow(Math.sin((y / rows) * Math.PI), 0.5);
          
          normalizedZ = normalizedZ * edgeFadeX * edgeFadeY;
          
          // Map to character array
          const charIdx = Math.floor(normalizedZ * CHARS.length);
          const safeIdx = Math.max(0, Math.min(CHARS.length - 1, charIdx));
          
          output += CHARS[safeIdx];
        }
        output += '\n';
      }

      setFrame(output);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pt-7 bg-[#050505] flex items-center justify-center overflow-hidden z-0">
      <pre className="text-[10px] leading-[10px] font-mono text-zinc-600 select-none">
        {frame}
      </pre>
    </div>
  );
}
