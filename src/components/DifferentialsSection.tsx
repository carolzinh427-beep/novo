import React from 'react';
import { siteConfig } from '../config/site';
import { CheckCircle2 } from 'lucide-react';
import { PixelTransition } from './PixelTransition';

export const DifferentialsSection: React.FC = () => {

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

          {/* Lado Direito: Grid de Quadrados Menores com PixelTransition Automático */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
            {siteConfig.differentials.map((diff, idx) => (
              <PixelTransition
                key={idx}
                gridSize={8}
                pixelColor="#D4AF37"
                animationStepDuration={0.35}
                autoPlay={true}
                autoInterval={4200}
                autoDelay={idx * 600}
                aspectRatio="90%"
                className="shadow-xs hover:shadow-md transition-shadow rounded-xs cursor-pointer group"
                firstContent={
                  <div className="w-full h-full p-3 sm:p-4 bg-neutral-50 hover:bg-white flex flex-col justify-between transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] sm:text-xs font-serif font-bold text-[#B89334] tracking-widest uppercase">
                          0{idx + 1}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60" />
                      </div>

                      <h3 className="font-serif text-xs sm:text-sm md:text-base font-bold text-neutral-900 group-hover:text-[#B89334] transition-colors leading-snug">
                        {diff.title}
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-neutral-200/70 flex items-center justify-between text-[8px] sm:text-[9px] text-neutral-500 uppercase tracking-wider">
                      <span>Corte Laser CNC</span>
                      <span className="text-[#B89334] font-semibold">Detalhes →</span>
                    </div>
                  </div>
                }
                secondContent={
                  <div className="w-full h-full p-3 sm:p-4 bg-white flex flex-col justify-between border-t-2 border-[#D4AF37]">
                    <div>
                      <span className="text-[9px] font-bold text-[#B89334] uppercase tracking-widest block mb-1">
                        0{idx + 1} • Padrão Stone
                      </span>

                      <p className="text-[10px] sm:text-[11px] md:text-xs text-neutral-700 font-light leading-relaxed line-clamp-4">
                        {diff.description.replace(/\.$/, '')}
                      </p>
                    </div>

                    <div className="pt-1.5 border-t border-neutral-100 flex items-center justify-between text-[8px] sm:text-[9px] text-neutral-400 uppercase tracking-widest">
                      <span>Garantia 10 Anos</span>
                      <span className="text-[#B89334] font-bold">100% Usinado</span>
                    </div>
                  </div>
                }
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
