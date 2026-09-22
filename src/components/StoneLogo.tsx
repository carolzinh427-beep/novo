import React from 'react';

interface StoneLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showTagline?: boolean;
  showIcon?: boolean;
}

export const StoneLogo: React.FC<StoneLogoProps> = ({
  size = 'md',
  className = '',
  showTagline = false,
  showIcon = false,
}) => {
  // Dimension styles according to size
  const iconSizes = {
    sm: 'w-6 h-8',
    md: 'w-8 h-10',
    lg: 'w-12 h-14',
    hero: 'w-20 h-24 sm:w-28 sm:h-32',
  };

  const stoneTextSizes = {
    sm: 'text-sm tracking-[0.25em]',
    md: 'text-lg sm:text-xl tracking-[0.3em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.35em]',
    hero: 'text-2xl sm:text-4xl lg:text-5xl tracking-[0.35em]',
  };

  const granLuxTextSizes = {
    sm: 'text-[10px] tracking-[0.2em]',
    md: 'text-xs sm:text-sm tracking-[0.25em]',
    lg: 'text-base sm:text-lg tracking-[0.3em]',
    hero: 'text-base sm:text-2xl lg:text-3xl tracking-[0.3em]',
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      {showIcon && (
        <div className={`relative ${iconSizes[size]} mb-2 flex items-center justify-center`}>
          <svg
            viewBox="0 0 100 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
          >
            {/* Spire / Top Pinnacle */}
            <path d="M50 2 L50 22" stroke="#E6CA65" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="50" cy="5" r="2.5" fill="#FFF" />
            <path d="M47 22 L53 22 L51.5 12 L48.5 12 Z" fill="url(#goldGradient)" />
            
            {/* Upper Steeple / Crown Tiers */}
            <rect x="45" y="22" width="10" height="12" fill="url(#goldGradient)" stroke="#8A6D23" strokeWidth="0.5" />
            <line x1="48" y1="22" x2="48" y2="34" stroke="#FFF" strokeWidth="0.5" opacity="0.6" />
            <line x1="52" y1="22" x2="52" y2="34" stroke="#FFF" strokeWidth="0.5" opacity="0.6" />
            
            {/* Mid Tower Section */}
            <rect x="42" y="34" width="16" height="14" fill="url(#goldGradient)" stroke="#8A6D23" strokeWidth="0.5" />
            <rect x="38" y="48" width="24" height="16" fill="url(#goldGradient)" stroke="#8A6D23" strokeWidth="0.5" />
            
            {/* Vertical Column Slits for Architecture */}
            <line x1="42" y1="48" x2="42" y2="64" stroke="#4A3B10" strokeWidth="0.8" />
            <line x1="46" y1="48" x2="46" y2="64" stroke="#46" strokeWidth="0.8" />
            <line x1="50" y1="48" x2="50" y2="64" stroke="#4A3B10" strokeWidth="0.8" />
            <line x1="54" y1="48" x2="54" y2="64" stroke="#4A3B10" strokeWidth="0.8" />
            <line x1="58" y1="48" x2="58" y2="64" stroke="#4A3B10" strokeWidth="0.8" />
            
            {/* Lower Main Building Wings */}
            <path d="M22 85 L22 64 L78 64 L78 85 Z" fill="url(#goldGradient)" stroke="#8A6D23" strokeWidth="0.5" />
            <path d="M12 85 L88 85 L88 89 L12 89 Z" fill="url(#goldGradient)" stroke="#8A6D23" strokeWidth="0.5" />
            
            {/* Portico Columns Base */}
            <line x1="18" y1="64" x2="18" y2="85" stroke="#3A2C08" strokeWidth="1" />
            <line x1="26" y1="64" x2="26" y2="85" stroke="#3A2C08" strokeWidth="1" />
            <line x1="34" y1="64" x2="34" y2="85" stroke="#3A2C08" strokeWidth="1" />
            <line x1="42" y1="64" x2="42" y2="85" stroke="#3A2C08" strokeWidth="1" />
            <line x1="50" y1="64" x2="50" y2="85" stroke="#3A2C08" strokeWidth="1" />
            <line x1="58" y1="64" x2="58" y2="85" stroke="#3A2C08" strokeWidth="1" />
            <line x1="66" y1="64" x2="66" y2="85" stroke="#3A2C08" strokeWidth="1" />
            <line x1="74" y1="64" x2="74" y2="85" stroke="#3A2C08" strokeWidth="1" />

            {/* Triangular Pediment Entrance */}
            <path d="M38 64 L50 52 L62 64 Z" fill="#FDF7E2" stroke="#B89334" strokeWidth="1" />
            
            {/* Base Steps */}
            <rect x="8" y="89" width="84" height="4" fill="url(#goldGradient)" />
            <rect x="4" y="93" width="92" height="4" fill="#C5A059" />

            {/* Gradients */}
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F9F1D0" />
                <stop offset="30%" stopColor="#E6CA65" />
                <stop offset="70%" stopColor="#C5A059" />
                <stop offset="100%" stopColor="#8F7130" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* Brand Typography */}
      <div className="flex flex-col items-center">
        {/* STONE */}
        <span
          className={`font-serif font-bold text-white uppercase ${stoneTextSizes[size]} drop-shadow-md leading-none`}
          style={{ fontFamily: "'Cinzel', Georgia, serif", letterSpacing: '0.25em' }}
        >
          STONE
        </span>
        
        {/* GRAN LUX */}
        <span
          className={`font-serif font-semibold text-[#D4AF37] uppercase ${granLuxTextSizes[size]} mt-1.5 leading-none`}
          style={{ fontFamily: "'Cinzel', Georgia, serif", letterSpacing: '0.2em' }}
        >
          GRAN LUX
        </span>

        {showTagline && (
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4AF37]/90 font-light mt-2 border-t border-[#D4AF37]/30 pt-1">
            MARMORARIA DE ALTO PADRÃO
          </span>
        )}
      </div>
    </div>
  );
};
