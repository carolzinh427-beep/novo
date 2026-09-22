import React from 'react';
import { MessageCircle, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { StoneLogo } from './StoneLogo';

export const Hero: React.FC = () => {
  const getWhatsappUrl = () => {
    const text = encodeURIComponent(siteConfig.defaultWhatsappMessage);
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="inicio" className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0C] pt-24 pb-12 sm:pt-32 sm:pb-16">
      {/* Fundo Elegante Sem Gradiente */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.heroImage}
          alt="Textura de Mármore Preto Nero com Veios Dourados - Stone Gran Lux"
          className="w-full h-full object-cover object-center opacity-30 sm:opacity-40"
          loading="eager"
        />
        {/* Overlay Escuro Sólido e Uniforme */}
        <div className="absolute inset-0 bg-[#0A0A0C]/85" />
      </div>

      {/* Conteúdo Central Hero */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
        
        {/* Logo Central Proporcional */}
        <div className="mb-4 sm:mb-6">
          <StoneLogo size="hero" showTagline={false} />
        </div>

        {/* Título Principal Sem Gradiente */}
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight max-w-3xl tracking-wide mb-3 sm:mb-5 px-2">
          Elegância Esculpida em{' '}
          <span className="font-editorial italic font-normal text-[#D4AF37] block sm:inline">
            Pedras Nobres & Exóticas
          </span>
        </h1>

        {/* Subtítulo Confortável e Arejado */}
        <p className="text-xs sm:text-base text-gray-300 font-light leading-relaxed max-w-xl mb-6 sm:mb-8 px-2 sm:px-0">
          Transformamos superfícies nobres importadas e quartzitos raros em peças sob medida com corte CNC a laser e precisão milimétrica
        </p>

        {/* Botões de Ação Elegantes e Sem Gradiente */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-12 px-4 sm:px-0">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#C5A059] text-black font-semibold text-xs uppercase tracking-[0.18em] transition-colors duration-300 shadow-md group"
          >
            <MessageCircle className="w-4 h-4 fill-black text-black" />
            <span>Solicitar Orçamento VIP</span>
            <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#materiais"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 hover:border-[#D4AF37] text-gray-300 hover:text-white font-medium text-xs uppercase tracking-[0.18em] transition-colors bg-black/40"
          >
            <span>Explorar Catálogo</span>
          </a>
        </div>

        {/* Métricas e Pilares Minimalistas com Espaçamento Arejado */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-[#D4AF37]/20 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-3xl font-bold text-[#D4AF37]">{siteConfig.yearsExperience}+ Anos</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">Tradição & Prestígio</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-3xl font-bold text-[#D4AF37]">{siteConfig.projectsCompleted}</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">Projetos Executados</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-3xl font-bold text-[#D4AF37]">Corte CNC</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">Precisão Milimétrica</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-3xl font-bold text-[#D4AF37]">{siteConfig.warrantyYears} Anos</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">Garantia Técnica</span>
          </div>
        </div>

      </div>
    </section>
  );
};
