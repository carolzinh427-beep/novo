import React from 'react';
import { siteConfig } from '../config/site';
import { Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="py-14 sm:py-20 md:py-28 bg-[#0A0A0C] text-white relative overflow-hidden border-t border-b border-[#D4AF37]/30">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/80 border border-[#D4AF37]/40 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[9px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              ENGENHARIA & PROCESSO DE ATENDIMENTO VIP
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-white">
            Do Conceito à Instalação <br />
            <span className="font-normal italic text-[#D4AF37]">
              em 4 Etapas Rigorosas
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-xl">
            Cada projeto Stone Gran Lux segue um protocolo estrito para garantir que sua pedra chegue perfeita à obra e com encaixe milimétrico
          </p>
        </div>

        {/* Linha do Tempo dos Processos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 relative">
          
          {/* Linha horizontal conectando as etapas no desktop */}
          <div className="hidden md:block absolute top-[30px] left-[10%] right-[10%] h-[1px] bg-[#D4AF37]/40 z-0" />

          {siteConfig.processSteps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col space-y-4 sm:space-y-6 group bg-[#121215] p-5 sm:p-6 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 rounded-xs shadow-lg hover:-translate-y-1">
              
              {/* Círculo com Número */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors duration-300 flex items-center justify-center shadow-sm">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] group-hover:text-black transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Informações da Etapa */}
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  {step.subtitle}
                </span>
                
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-[#D4AF37] transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {step.description.replace(/\.$/, '')}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
