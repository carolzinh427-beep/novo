import React from 'react';
import { siteConfig } from '../config/site';
import { Stepper, Step } from './Stepper';
import { MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getWhatsappProcessUrl = (stepTitle?: string) => {
    const text = encodeURIComponent(
      stepTitle 
        ? `Olá Stone Gran Lux! Gostaria de entender mais sobre o processo de *${stepTitle}* para o meu projeto`
        : siteConfig.defaultWhatsappMessage
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="processo" className="py-14 sm:py-20 md:py-28 bg-[#0A0A0C] text-white relative overflow-hidden border-t border-b border-[#D4AF37]/30">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-white">
            Do Conceito à Instalação <br />
            <span className="font-serif italic font-normal text-[#D4AF37]">
              em 4 Etapas Rigorosas
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-xl mx-auto">
            Cada projeto Stone Gran Lux segue um protocolo estrito para garantir que sua pedra chegue perfeita à obra e com encaixe milimétrico
          </p>
        </div>

        {/* Stepper Interativo React Bits */}
        <Stepper
          initialStep={1}
          backButtonText="Etapa Anterior"
          nextButtonText="Próxima Etapa"
          completedContent={
            <div className="step-default py-6 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/10">
                <CheckCircle2 className="w-7 h-7 text-[#D4AF37]" />
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                  PROTOCOLO DE ALTO PADRÃO CONCLUÍDO
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Seu Projeto Merece a Perfeição
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto font-light leading-relaxed">
                Nossos engenheiros e consultores técnicos estão prontos para receber a sua planta e indicar as melhores opções de rochas nobres
              </p>

              <div className="pt-2">
                <a
                  href={getWhatsappProcessUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.16em] transition-colors shadow-lg rounded-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-black text-black" />
                  <span>Falar com Nossos Engenheiros</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </a>
              </div>
            </div>
          }
        >
          {siteConfig.processSteps.map((step, idx) => (
            <Step key={idx}>
              <div className="space-y-4 py-1">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#D4AF37] bg-black/60 px-2.5 py-1 border border-[#D4AF37]/40 rounded-xs">
                      {step.number}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                      {step.subtitle}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 font-mono tracking-wider">
                    ETAPA {idx + 1} DE 4
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-gray-300 font-light leading-relaxed">
                  {step.description.replace(/\.$/, '')}
                </p>

                <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-[#D4AF37] font-medium">Controle de Qualidade Stone Gran Lux</span>
                  </div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">Precisão Laser & CNC</span>
                </div>
              </div>
            </Step>
          ))}
        </Stepper>

      </div>
    </section>
  );
};
