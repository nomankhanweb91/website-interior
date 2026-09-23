import React from 'react';

interface VisualProps {
  type: 'living' | 'kitchen' | 'bedroom' | 'office' | 'bathroom' | 'turnkey' | 'furniture' | 'ceiling' | 'materials';
  title?: string;
  subtitle?: string;
  className?: string;
}

export const ArchitecturalVisual: React.FC<VisualProps> = ({
  type,
  title,
  subtitle,
  className = ''
}) => {
  const getThemeColors = () => {
    switch (type) {
      case 'living':
        return { bg: '#101010', accent: '#C5A059', gradient: 'from-[#1a1816] via-[#101010] to-[#0a0a0a]' };
      case 'kitchen':
        return { bg: '#0d1117', accent: '#D4AF37', gradient: 'from-[#14181f] via-[#0d1117] to-[#080a0f]' };
      case 'bedroom':
        return { bg: '#141210', accent: '#D4AF37', gradient: 'from-[#1c1815] via-[#141210] to-[#0c0a09]' };
      case 'office':
        return { bg: '#111317', accent: '#C5A059', gradient: 'from-[#161a20] via-[#111317] to-[#0a0c0f]' };
      case 'bathroom':
        return { bg: '#0e1114', accent: '#E8CCA1', gradient: 'from-[#15191f] via-[#0e1114] to-[#090b0d]' };
      case 'turnkey':
      case 'materials':
      default:
        return { bg: '#121212', accent: '#C5A059', gradient: 'from-[#1a1a1a] via-[#121212] to-[#0a0a0a]' };
    }
  };

  const theme = getThemeColors();

  return (
    <div
      className={`relative w-full h-full min-h-[280px] bg-gradient-to-br ${theme.gradient} border border-white/10 rounded-xl overflow-hidden group flex flex-col justify-between p-6 sm:p-8 select-none ${className}`}
      data-cursor="view"
    >
      {/* Background Architectural Grid & Vector Accents */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-105"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`grid-${type}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(197, 160, 89, 0.25)" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${type})`} />

        {/* Dynamic Architectural Lines based on type */}
        {type === 'living' && (
          <g stroke="#C5A059" strokeWidth="1" opacity="0.4" fill="none">
            <line x1="10%" y1="75%" x2="90%" y2="75%" />
            <rect x="20%" y="40%" width="60%" height="35%" rx="2" />
            <line x1="30%" y1="20%" x2="70%" y2="20%" strokeDasharray="4 4" />
            <circle cx="50%" cy="20%" r="6" fill="#C5A059" fillOpacity="0.3" />
          </g>
        )}

        {type === 'kitchen' && (
          <g stroke="#D4AF37" strokeWidth="1" opacity="0.4" fill="none">
            <rect x="15%" y="55%" width="70%" height="25%" rx="2" />
            <line x1="25%" y1="55%" x2="25%" y2="80%" />
            <line x1="50%" y1="55%" x2="50%" y2="80%" />
            <line x1="75%" y1="55%" x2="75%" y2="80%" />
            <rect x="25%" y="25%" width="50%" height="15%" strokeDasharray="3 3" />
          </g>
        )}

        {type === 'bedroom' && (
          <g stroke="#C5A059" strokeWidth="1" opacity="0.4" fill="none">
            <rect x="25%" y="45%" width="50%" height="35%" rx="4" />
            <line x1="20%" y1="40%" x2="80%" y2="40%" strokeWidth="2" />
            <circle cx="35%" cy="30%" r="10" strokeDasharray="2 2" />
            <circle cx="65%" cy="30%" r="10" strokeDasharray="2 2" />
          </g>
        )}

        {type === 'office' && (
          <g stroke="#C5A059" strokeWidth="1" opacity="0.4" fill="none">
            <polygon points="50,180 250,100 450,180 250,260" strokeDasharray="4 4" />
            <line x1="250" y1="100" x2="250" y2="40" strokeWidth="1.5" />
          </g>
        )}
      </svg>

      {/* Floating Spatial Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase px-2.5 py-1 rounded bg-black/40 border border-white/10 text-[#C5A059] backdrop-blur-sm">
          {type.toUpperCase()} · STUDIO SPEC
        </span>
        <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
      </div>

      {/* Title & Overlay Information */}
      <div className="relative z-10 mt-auto pt-8">
        {subtitle && (
          <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
            {subtitle}
          </p>
        )}
        {title && (
          <h4 className="font-serif text-xl sm:text-2xl text-white font-light group-hover:text-[#C5A059] transition-colors">
            {title}
          </h4>
        )}
        <div className="w-12 h-[1.5px] bg-[#C5A059] mt-3 transition-all duration-300 group-hover:w-20" />
      </div>

      {/* Subtle bottom gradient scrim */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
    </div>
  );
};
