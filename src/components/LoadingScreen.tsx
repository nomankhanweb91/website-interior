import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 250);
          return 100;
        }
        return prev + 12;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070707] text-[#F7F5F0] transition-opacity duration-500 select-none">
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-[#C5A059] mb-3">
          Architecture & Turnkey Interiors
        </span>
        <h1 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-[#FAF8F5] mb-2">
          Elite Interior and Decore
        </h1>
        <p className="text-[11px] text-[#A0A0A0] tracking-widest uppercase mb-8 font-mono">
          Mumbai · Est. 2007
        </p>
        
        {/* Sleek gold progress line */}
        <div className="w-48 h-[1.5px] bg-white/10 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 bottom-0 bg-[#C5A059] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[10px] font-mono text-[#C5A059]/80 mt-3 tabular-nums">
          {progress}%
        </span>
      </div>
    </div>
  );
};
