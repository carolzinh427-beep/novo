import React from 'react';
import { siteConfig } from '../config/site';
import { CheckCircle2, Cpu, ShieldCheck, Globe, Sparkles, Clock, Compass } from 'lucide-react';
import { Carousel, CarouselItemData } from './Carousel';

export const DifferentialsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="carousel-icon" />,
    ShieldCheck: <ShieldCheck className="carousel-icon" />,
    Globe: <Globe className="carousel-icon" />,
    Sparkles: <Sparkles className="carousel-icon" />,
    Clock: <Clock className="carousel-icon" />,
    Compass: <Compass className="carousel-icon" />
  };

  const differentialItems: CarouselItemData[] = siteConfig.differentials.map((diff, idx) => ({
    id: idx + 1,
    title: diff.title,
    description: diff.description.replace(/\.$/, ''),
    step: `0${idx + 1}`,
    icon: iconMap[diff.icon] || <Sparkles className="carousel-icon" />
  }));

  return (
    <section id="diferenciais" className="py-12 sm:py-16 md:py-24 bg-white text-black border-t border-b border-gray-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Lado Esquerdo: Título Direto e Editorial */}
          <div className="lg:col-span-5 space-y-4">
            {/* Título sem subtítulo conforme solicitado */}
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-neutral-900">
              Precisão em Corte CNC
            </h2>

            {/* Box Editorial sem aspas, travessão ou ponto */}
            <div className="pt-2">
              <div className="p-4 border-l-2 border-[#D4AF37] bg-neutral-50 rounded-r-xs space-y-2">
                <p className="font-serif text-sm sm:text-base italic text-neutral-800 leading-snug">
                  Sua obra merece o mais alto nível de sofisticação e pontualidade Cada rocha da Stone Gran Lux é selecionada para se tornar o ponto focal do seu projeto
                </p>
                <span className="text-[9px] uppercase tracking-widest text-[#B89334] block font-bold">
                  ENGENHARIA & DESIGN STONE GRAN LUX
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2.5 text-xs font-semibold text-neutral-800">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Garantia VIP de 10 Anos em Todas as Peças</span>
            </div>
          </div>

          {/* Lado Direito: Carousel 3D do React Bits com Diferenciais */}
          <div className="lg:col-span-7 flex justify-center items-center overflow-hidden py-2">
            <div className="w-full flex justify-center items-center">
              <Carousel
                items={differentialItems}
                baseWidth={380}
                autoplay={true}
                autoplayDelay={3500}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
