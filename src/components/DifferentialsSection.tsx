import React from 'react';
import { siteConfig } from '../config/site';
import { Cpu, ShieldCheck, Globe, Sparkles, Clock, Compass, CheckCircle2 } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-6 h-6 text-[#D4AF37]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
    Globe: <Globe className="w-6 h-6 text-[#D4AF37]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#D4AF37]" />,
    Clock: <Clock className="w-6 h-6 text-[#D4AF37]" />,
    Compass: <Compass className="w-6 h-6 text-[#D4AF37]" />,
  };

  return (
    <section id="diferenciais" className="py-14 sm:py-20 md:py-28 bg-white text-black border-t border-b border-gray-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Lado Esquerdo: Título Editorial Fixo com Fundo Branco */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF6E9] border border-[#D4AF37]/30 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E7C1D] font-bold">
                POR QUE A STONE GRAN LUX?
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-neutral-900">
              Precisão em Corte CNC. <br />
              <span className="font-semibold text-[#9E7C1D]">
                Acabamento de Alta Joalheria.
              </span>
            </h2>

            <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-md">
              Não entregamos apenas pedras cortadas. Combinamos tecnologia digital a laser com a tradição dos mestres marmoristas para criar peças milimetricamente ajustadas à sua arquitetura.
            </p>

            {/* Quote Box */}
            <div className="pt-4">
              <div className="p-6 border-l-4 border-[#D4AF37] bg-neutral-50 shadow-sm rounded-r-md">
                <p className="font-serif text-base sm:text-lg italic text-neutral-800">
                  "Sua obra merece o mais alto nível de sofisticação e pontualidade. Cada rocha da Stone Gran Lux é selecionada para se tornar o ponto focal do seu projeto."
                </p>
                <span className="text-[10px] uppercase tracking-widest text-[#B89334] block mt-3 font-bold">
                  — ENGENHARIA & DESIGN STONE GRAN LUX
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs font-semibold text-neutral-800">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
              <span>Garantia VIP de 10 Anos em Todas as Peças</span>
            </div>
          </div>

          {/* Lado Direito: Grid de Cards Brancos com Borda Dourada */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siteConfig.differentials.map((diff, idx) => (
              <div
                key={idx}
                className="p-6 bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-xl rounded-sm group relative"
              >
                <div className="w-12 h-12 bg-white border border-[#D4AF37]/40 rounded-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                  {iconMap[diff.icon] || <Sparkles className="w-6 h-6 text-[#D4AF37]" />}
                </div>

                <span className="text-[10px] font-serif font-bold text-[#B89334] tracking-widest uppercase block mb-1">
                  0{idx + 1} • DIFERENCIAL EXCLUSIVO
                </span>

                <h3 className="font-serif text-xl font-bold text-neutral-900 group-hover:text-[#B89334] transition-colors mb-2">
                  {diff.title}
                </h3>

                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
