import React from 'react';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export const SolutionsSection: React.FC = () => {
  const getWhatsappSolutionUrl = (title: string) => {
    const text = encodeURIComponent(
      `Olá Stone Gran Lux! Gostaria de um orçamento especializado para *${title}* para o meu projeto.`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="solucoes" className="py-12 sm:py-16 bg-white text-black border-t border-b border-neutral-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        
        {/* Header Compacto da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 pb-4 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#FAF6E9] border border-[#D4AF37]/30 rounded-full mb-2">
              <Sparkles className="w-3 h-3 text-[#B89334]" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#9E7C1D] font-bold">
                APLICAÇÕES ARQUITETÔNICAS SOB MEDIDA
              </span>
            </div>

            <h2 className="font-serif text-xl sm:text-3xl font-light leading-tight tracking-tight text-neutral-900">
              Soluções de Luxo para <br className="hidden sm:inline" />
              <span className="font-semibold text-[#9E7C1D]">
                Cada Ambiente da Sua Residência
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 max-w-md font-light leading-relaxed">
            De bancadas gourmets com cubas ocultas a painéis verticais retroiluminados em pedra natural.
          </p>
        </div>

        {/* Grid Lado a Lado Compacto (2 Colunas no Mobile, 4 Colunas no Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {siteConfig.solutions.map((sol, index) => (
            <div
              key={sol.id}
              className="group bg-neutral-50 border border-neutral-200 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl flex flex-col justify-between rounded-sm"
            >
              <div>
                {/* Imagem do Projeto Compacta */}
                <div className="relative aspect-[4/3] img-zoom-container bg-neutral-200 overflow-hidden">
                  <img
                    src={sol.image}
                    alt={`Stone Gran Lux - ${sol.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                  
                  <span className="absolute top-2 left-2 font-serif text-[9px] sm:text-[10px] font-bold tracking-wider text-[#D4AF37] bg-black/80 px-2 py-0.5 border border-[#D4AF37]/40 uppercase">
                    0{index + 1}
                  </span>
                </div>

                {/* Conteúdo Informativo Reduzido */}
                <div className="p-3 sm:p-4 space-y-2">
                  <h3 className="font-serif text-sm sm:text-lg font-bold text-neutral-900 group-hover:text-[#B89334] transition-colors leading-tight line-clamp-1">
                    {sol.title}
                  </h3>
                  
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#B89334] font-semibold line-clamp-1">
                    {sol.subtitle}
                  </p>

                  <p className="text-[10px] sm:text-xs text-neutral-600 font-light leading-snug line-clamp-2">
                    {sol.description}
                  </p>

                  {/* Highlights de Engenharia Reduzidos */}
                  <div className="pt-2 border-t border-neutral-200 space-y-1 hidden sm:block">
                    {sol.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[10px] text-neutral-800">
                        <CheckCircle2 className="w-3 h-3 text-[#D4AF37] shrink-0" />
                        <span className="font-medium truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botão de Solicitação do Projeto Compacto */}
              <div className="p-3 sm:p-4 pt-0">
                <a
                  href={getWhatsappSolutionUrl(sol.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-2.5 bg-neutral-900 hover:bg-[#B89334] text-white hover:text-black transition-colors duration-300 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold flex items-center justify-between shadow-xs rounded-xs"
                >
                  <span className="truncate">Orçar</span>
                  <ChevronRight className="w-3 h-3 text-[#D4AF37] group-hover:text-black shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
