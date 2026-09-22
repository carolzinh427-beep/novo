import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getWhatsappUrl = () => {
    const text = encodeURIComponent("Olá Stone Gran Lux! Tenho uma dúvida específica sobre um projeto em pedra natural");
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="faq" className="py-14 sm:py-20 md:py-28 bg-[#0A0A0C] text-white relative overflow-hidden border-t border-[#D4AF37]/30">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/80 border border-[#D4AF37]/40 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[9px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              TIRE SUAS DÚVIDAS
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-white">
            Perguntas Frequentes <br />
            <span className="font-normal italic text-[#D4AF37]">
              Sobre Nossas Pedras & Serviços
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            Esclareça os principais pontos sobre durabilidade, prazos de entrega, medição 3D e processo de impermeabilização
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#121215] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all rounded-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-xl font-bold text-white hover:text-[#D4AF37] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[#D4AF37] font-mono text-xs sm:text-sm">0{idx + 1}</span>
                  {faq.question.replace(/\?$/, '')}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-gray-300 font-light leading-relaxed border-t border-white/5 pt-4 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating WhatsApp Help Line */}
        <div className="mt-12 text-center bg-black/60 p-6 border border-[#D4AF37]/40 rounded-sm space-y-3">
          <p className="font-serif text-lg text-white">Possui alguma dúvida técnica não listada?</p>
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-bold hover:underline"
          >
            <MessageCircle className="w-4 h-4 fill-[#D4AF37] text-black" />
            <span>Falar com um de Nossos Engenheiros no WhatsApp →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
