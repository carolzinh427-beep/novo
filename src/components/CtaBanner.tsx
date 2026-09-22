import React from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export const CtaBanner: React.FC = () => {
  const getWhatsappUrl = () => {
    const text = encodeURIComponent(
      `Olá Stone Gran Lux! Tenho o projeto em PDF/planta do meu ambiente e gostaria de solicitar um orçamento exclusivo.`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section className="relative py-14 sm:py-24 md:py-32 bg-[#070708] text-white overflow-hidden border-t border-b border-[#D4AF37]/30">
      {/* Background Image with Solid Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.heroImage}
          alt="Projeto Stone Gran Lux"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-[#070708]/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-[#D4AF37]/40 bg-black/60 backdrop-blur-md rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[9px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            ORÇAMENTO EXPRESSO VIA WHATSAPP
          </span>
        </div>

        <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
          Sua Obra de Arte em Pedra <br />
          <span className="font-normal italic text-[#D4AF37]">
            Começa com uma Mensagem.
          </span>
        </h2>

        <p className="text-xs sm:text-base text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
          Envie a planta do imóvel ou as medidas aproximadas e receba uma consultoria VIP em pedras exóticas, mármores e ilhas translúcidas.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#C5A059] text-black font-semibold text-xs uppercase tracking-[0.18em] transition-colors shadow-md flex items-center justify-center gap-2.5 group"
          >
            <MessageCircle className="w-4 h-4 fill-black text-black" />
            <span>Falar com um Consultor no WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <p className="text-xs text-gray-400 font-light pt-2">
          Atendimento imediato em horário comercial • Atendemos {siteConfig.city} e todo o Brasil
        </p>

      </div>
    </section>
  );
};
