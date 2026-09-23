import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest('a, button, input, select, textarea, [data-cursor="interactive"]');
      const isPortfolio = target.closest('[data-cursor="view"]');

      if (isPortfolio) {
        setHovered(true);
        setCursorText('VIEW');
      } else if (isInteractive) {
        setHovered(true);
        setCursorText('');
      } else {
        setHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div
        className={`fixed top-0 left-0 rounded-full transition-all duration-150 ease-out flex items-center justify-center font-mono text-[9px] tracking-widest text-black font-bold select-none ${
          hovered
            ? 'w-12 h-12 bg-champagne-gold/90 scale-100 shadow-[0_0_20px_rgba(197,160,89,0.5)]'
            : 'w-2.5 h-2.5 bg-champagne-gold scale-100'
        }`}
        style={{
          transform: `translate3d(${pos.x - (hovered ? 24 : 5)}px, ${pos.y - (hovered ? 24 : 5)}px, 0)`
        }}
      >
        {cursorText}
      </div>
    </div>
  );
};
