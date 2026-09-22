import React from 'react';
import { siteConfig } from '../config/site';
import { Cpu, ShieldCheck, Globe, Sparkles, Clock, Compass, CheckCircle2 } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />,
    ShieldCheck: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />,
    Globe: <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />,
    Sparkles: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />,
    Clock: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />,
    Compass: <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />,
  };

  return (
    <section id="diferenciais" className="py-12 sm:py-16 md:py-24 bg-white text-black border-t border-b border-gray-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Lado Esquerdo: Título Direto e Editorial */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            {/* Título sem subtítulo conforme solicitado */}
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-neutral-900">
              Precisão em Corte CNC
            </h2>

            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed max-w-md">
              Não entregamos apenas pedras cortadas Combinamos tecnologia digital a laser com a tradição dos mestres marmoristas para criar peças milimetricamente ajustadas à sua arquitetura
            </p>

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

          {/* Lado Direito: Grid de Quadrados Menores e Compactos */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
            {siteConfig.differentials.map((diff, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-[#D4AF37] transition-all duration-300 shadow-xs hover:shadow-md rounded-xs group flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white border border-[#D4AF37]/40 rounded-xs flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform shadow-2xs">
                    {iconMap[diff.icon] || <Sparkles className="w-4 h-4 text-[#D4AF37]" />}
                  </div>

                  <span className="text-[9px] font-serif font-bold text-[#B89334] tracking-widest uppercase block mb-1">
                    0{idx + 1}
                  </span>

                  <h3 className="font-serif text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#B89334] transition-colors mb-1.5 leading-snug">
                    {diff.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-neutral-600 font-light leading-relaxed">
                    {diff.description.replace(/\.$/, '')}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
