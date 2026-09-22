import React from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/site';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getWhatsappUrl = () => {
    const text = encodeURIComponent(siteConfig.defaultWhatsappMessage);
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <footer className="bg-[#050505] text-white pt-8 pb-6 sm:pt-20 sm:pb-12 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Layout em 2 Colunas no Mobile (Esquerda e Direita) e 3 Colunas no Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-6 sm:gap-12 pb-6 sm:pb-16 border-b border-white/10">
          
          {/* LADO ESQUERDO: Logo, Descrição Curta, Telefone & Redes Sociais */}
          <div className="col-span-1 md:col-span-5 space-y-2.5 sm:space-y-6">
            <a href="#inicio" className="inline-block">
              <img
                src="/images/logo_stone_gran_lux.png"
                alt="Stone Gran Lux"
                className="w-20 sm:w-36 h-auto object-contain"
              />
            </a>

            <p className="text-[10px] sm:text-xs text-gray-400 font-light leading-snug max-w-sm">
              <span className="hidden sm:inline">Marmoraria de Luxo especializada em Ilha Ônix Rosa Ônix Branco Translúcido Granitos Exóticos Quartzitos e Mármores Raros Precisão CNC a laser e 10 Anos de Garantia Técnica</span>
              <span className="sm:hidden">Marmoraria de Alto Padrão • Pedras Exóticas & Corte CNC</span>
            </p>

            {/* Contato Direto */}
            <div className="pt-0.5">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] sm:text-sm font-serif font-bold text-[#D4AF37] hover:underline block leading-tight"
              >
                {siteConfig.phone}
              </a>
              <span className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider block mt-0.5">
                Atendimento VIP
              </span>
            </div>

            {/* Botões Sociais Compactos */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-black hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black transition-colors border border-[#D4AF37]/40 rounded-xs"
                aria-label="WhatsApp Stone Gran Lux"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-black hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black transition-colors border border-[#D4AF37]/40 rounded-xs"
                aria-label="Instagram Stone Gran Lux"
              >
                <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* LADO DIREITO (Mobile: Coluna 2 | Desktop: Colunas de Navegação e Showroom) */}
          <div className="col-span-1 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            
            {/* Navegação Rápida */}
            <div className="space-y-2 sm:space-y-4">
              <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.16em] text-[#D4AF37] font-bold">
                Navegação
              </h4>
              <ul className="space-y-1 sm:space-y-2.5 text-[10px] sm:text-xs text-gray-300 font-light">
                <li>
                  <a href="#inicio" className="hover:text-[#D4AF37] transition-colors block py-0.5">Início</a>
                </li>
                <li>
                  <a href="#diferenciais" className="hover:text-[#D4AF37] transition-colors block py-0.5">Diferenciais</a>
                </li>
                <li>
                  <a href="#materiais" className="hover:text-[#D4AF37] transition-colors block py-0.5">Catálogo</a>
                </li>
                <li>
                  <a href="#solucoes" className="hover:text-[#D4AF37] transition-colors block py-0.5">Soluções</a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-[#D4AF37] transition-colors block py-0.5">Orçamentos</a>
                </li>
              </ul>
            </div>

            {/* Showroom & Horário */}
            <div className="space-y-1.5 sm:space-y-4 pt-1 sm:pt-0">
              <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.16em] text-[#D4AF37] font-bold">
                Showroom
              </h4>
              <div className="space-y-1 sm:space-y-3 text-[10px] sm:text-xs text-gray-300 font-light leading-snug">
                <p className="text-white font-medium">{siteConfig.address}</p>
                <p className="text-gray-400 text-[9px] sm:text-xs">{siteConfig.hours}</p>
                <p className="hidden sm:block text-[10px] uppercase text-gray-400">Atendemos Projetos VIP</p>
              </div>
            </div>

          </div>

        </div>

        {/* Rodapé Final Compacto */}
        <div className="pt-4 sm:pt-8 flex flex-row items-center justify-between text-[9px] sm:text-[11px] text-gray-500 font-light gap-2">
          <p className="truncate">© 2026 {siteConfig.name}</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer shrink-0 font-medium"
          >
            <span>TOPO</span>
            <ArrowUp className="w-3 h-3 text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
