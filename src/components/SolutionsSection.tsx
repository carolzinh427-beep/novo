import React, { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { DepthCarousel, DepthCarouselItem } from './DepthCarousel';

export const SolutionsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getWhatsappSolutionUrl = (title: string) => {
    const text = encodeURIComponent(
      `Olá Stone Gran Lux! Gostaria de um orçamento especializado para *${title}* para o meu projeto`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  const carouselItems: DepthCarouselItem[] = siteConfig.solutions.map((sol, idx) => ({
    id: sol.id,
    image: sol.image,
    alt: sol.title,
    title: sol.title,
    subtitle: sol.subtitle,
    description: sol.description
  }));

  const currentSolution = siteConfig.solutions[activeIndex] || siteConfig.solutions[0];

  return (
    <section id="solucoes" className="py-12 sm:py-16 md:py-24 bg-white text-black border-t border-b border-neutral-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        
        {/* Header Elegante da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 pb-4 border-b border-neutral-200">
          <div>
            <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-light leading-tight tracking-tight text-neutral-900">
              Soluções de Luxo para <br className="hidden sm:inline" />
              <span className="font-semibold text-[#9E7C1D]">
                Cada Ambiente da Sua Residência
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 max-w-md font-light leading-relaxed">
            De bancadas gourmets com cubas ocultas a painéis verticais retroiluminados em pedra natural Navegue pelo carrossel para explorar cada projeto
          </p>
        </div>

        {/* DepthCarousel 3D React Bits sem fundo preto, fluindo perfeitamente com a seção */}
        <div className="w-full h-[360px] sm:h-[440px] md:h-[480px] relative overflow-hidden">
          <DepthCarousel
            items={carouselItems}
            cardWidth={300}
            cardHeight={380}
            radius={14}
            depth={220}
            spread={85}
            tilt={22}
            tiltDirection="right"
            perspective={1400}
            visibleCards={4}
            falloff={0.2}
            blur={5}
            autoplay={true}
            autoplayDelay={3800}
            loop={true}
            showControls={true}
            showIndicators={true}
            onChange={(idx) => setActiveIndex(idx)}
          />
        </div>

        {/* Detalhes do Ambiente Ativo em Foco */}
        <div className="mt-8 max-w-4xl mx-auto p-5 sm:p-7 bg-neutral-50 border border-[#D4AF37]/40 rounded-sm shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-500">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#9E7C1D]">
                0{activeIndex + 1} • {currentSolution.subtitle}
              </span>
            </div>
            
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-neutral-900">
              {currentSolution.title}
            </h3>
            
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              {currentSolution.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-2 text-[11px] sm:text-xs text-neutral-800">
              {currentSolution.highlights.map((item, idx) => (
                <span key={idx} className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          <a
            href={getWhatsappSolutionUrl(currentSolution.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 px-6 py-3.5 bg-neutral-900 hover:bg-[#B89334] text-white hover:text-black transition-colors duration-300 text-[10px] sm:text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2.5 shadow-sm rounded-xs group"
          >
            <span>Solicitar Orçamento</span>
            <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:text-black transition-colors shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};
