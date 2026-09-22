import React from 'react';
import { MessageCircle, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { FoldText } from './FoldText';

export const Hero: React.FC = () => {
  const getWhatsappUrl = () => {
    const text = encodeURIComponent(siteConfig.defaultWhatsappMessage);
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="inicio" className="relative w-full min-h-[68vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0C] pt-20 pb-8 sm:pt-32 sm:pb-16">
      {/* Fundo Elegante Sem Gradiente - Mais visível no celular */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.heroImage}
          alt="Textura de Mármore Preto Nero com Veios Dourados - Stone Gran Lux"
          className="w-full h-full object-cover object-center opacity-70 sm:opacity-40"
          loading="eager"
        />
        {/* Overlay Escuro Mais Suave no Celular para Destacar os Veios Dourados */}
        <div className="absolute inset-0 bg-[#0A0A0C]/55 sm:bg-[#0A0A0C]/85" />
      </div>

      {/* Conteúdo Central Hero */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
        
        {/* Logo Oficial Exatamente Igual */}
        <div className="mb-2 sm:mb-4 flex flex-col items-center">
          <img
            src="/images/logo_stone_gran_lux.png"
            alt="Stone Gran Lux Logo Oficial"
            className="w-24 sm:w-36 md:w-44 h-auto object-contain drop-shadow-[0_4px_24px_rgba(212,175,55,0.45)] rounded-lg border border-[#D4AF37]/35 mb-1"
          />
          <h1 className="sr-only">STONE GRAN LUX</h1>
        </div>

        {/* H2 Semântico para SEO */}
        <h2 className="sr-only">Elegância Esculpida em Pedras Nobres & Exóticas</h2>

        {/* Frase menor embaixo dele, com o componente FoldText e tipografia nobre italiana sem cara de IA */}
        <div className="mb-5 sm:mb-8 max-w-lg flex flex-col items-center justify-center text-center">
          <FoldText
            text="Elegância Esculpida em"
            splitBy="word"
            hinge="top"
            trigger="mount"
            duration={0.7}
            stagger={0.05}
            fontSize="clamp(0.85rem, 2.2vw, 1.25rem)"
            fontWeight={400}
            color="#EAE6DD"
            style={{ fontFamily: "'Italiana', Georgia, serif", letterSpacing: '0.06em' }}
          />
          <FoldText
            text="Pedras Nobres & Exóticas"
            splitBy="word"
            hinge="top"
            trigger="mount"
            duration={0.7}
            stagger={0.05}
            fontSize="clamp(0.95rem, 2.5vw, 1.4rem)"
            fontWeight={400}
            color="#D4AF37"
            style={{ fontFamily: "'Italiana', Georgia, serif", letterSpacing: '0.06em' }}
            className="mt-0.5"
          />
        </div>

        {/* Botões de Ação Elegantes e Sem Gradiente */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-12 px-4 sm:px-0">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#C5A059] text-black font-semibold text-xs uppercase tracking-[0.16em] transition-colors duration-300 shadow-md group"
          >
            <MessageCircle className="w-4 h-4 fill-black text-black" />
            <span>Solicitar Orçamento VIP</span>
            <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#materiais"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-white/25 hover:border-[#D4AF37] text-gray-200 hover:text-white font-medium text-xs uppercase tracking-[0.16em] transition-colors bg-black/50"
          >
            <span>Explorar Catálogo</span>
          </a>
        </div>

        {/* Métricas e Pilares Minimalistas com Espaçamento Compacto no Celular */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-8 pt-4 sm:pt-8 border-t border-[#D4AF37]/25 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg sm:text-3xl font-bold text-[#D4AF37]">{siteConfig.yearsExperience}+ Anos</span>
            <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">Tradição & Prestígio</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-serif text-lg sm:text-3xl font-bold text-[#D4AF37]">{siteConfig.projectsCompleted}</span>
            <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">Projetos Executados</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-serif text-lg sm:text-3xl font-bold text-[#D4AF37]">Corte CNC</span>
            <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">Precisão Milimétrica</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-serif text-lg sm:text-3xl font-bold text-[#D4AF37]">{siteConfig.warrantyYears} Anos</span>
            <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">Garantia Técnica</span>
          </div>
        </div>

      </div>
    </section>
  );
};
