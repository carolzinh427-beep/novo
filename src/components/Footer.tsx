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
    <footer className="bg-[#050505] text-white pt-20 pb-12 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Coluna 1: Logo & Brand Description */}
          <div className="md:col-span-5 space-y-6">
            <a href="#inicio" className="group inline-flex items-center gap-3">
              <img
                src="/images/logo_stone_gran_lux.png"
                alt="Stone Gran Lux"
                className="w-28 sm:w-36 h-auto object-contain rounded-md border border-[#D4AF37]/30"
              />
            </a>

            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
              Marmoraria de Luxo especializada em Ilha Ônix Rosa Ônix Branco Translúcido Granitos Exóticos Quartzitos e Mármores Raros Precisão CNC a laser e 10 Anos de Garantia Técnica
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black transition-colors border border-[#D4AF37]/40 rounded-xs"
                aria-label="WhatsApp Stone Gran Lux"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black transition-colors border border-[#D4AF37]/40 rounded-xs"
                aria-label="Instagram Stone Gran Lux"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold">Navegação</h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-light">
              <li>
                <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">Início</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#D4AF37] transition-colors">Por Que Nós</a>
              </li>
              <li>
                <a href="#materiais" className="hover:text-[#D4AF37] transition-colors">Catálogo de Pedras</a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-[#D4AF37] transition-colors">Aplicações</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#D4AF37] transition-colors">Contato & Orçamentos</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Localização & Atendimento */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold">Showroom & Atendimento</h4>
            <div className="space-y-3 text-xs text-gray-300 font-light">
              <p className="text-white font-medium">{siteConfig.fullAddress}</p>
              <p>{siteConfig.hours}</p>
              <p className="text-[#D4AF37] font-bold">{siteConfig.phone}</p>
              <p className="text-[10px] uppercase text-gray-400">Atendemos Projetos Residênciais & Corporativos VIP</p>
            </div>
          </div>

        </div>

        {/* Rodapé Final */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-light gap-4">
          <p>© 2026 {siteConfig.name} Todos os direitos reservados Marmoraria de Luxo</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <span>VOLTAR AO TOPO</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
