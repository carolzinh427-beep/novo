import React, { useState } from 'react';
import { MessageCircle, MapPin, Clock, Phone, Send } from 'lucide-react';
import { siteConfig } from '../config/site';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    material: 'Ilha Ônix Rosa',
    solution: 'Bancadas & Ilhas Cozinha',
    message: ''
  });

  const getWhatsappUrl = () => {
    const text = encodeURIComponent(
      `Olá Stone Gran Lux! Meu nome é *${formData.name || 'Cliente'}* (${formData.phone || 'Sem telefone'}).\n` +
      `Gostaria de um orçamento para: *${formData.solution}* no material *${formData.material}*.\n` +
      (formData.message ? `Detalhes: ${formData.message}` : '')
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(getWhatsappUrl(), '_blank');
  };

  return (
    <section id="contato" className="py-14 sm:py-20 md:py-28 bg-white text-neutral-900 border-t border-b border-neutral-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-10 sm:mb-16 space-y-3">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-neutral-900">
            Inicie Seu Atendimento com <br />
            <span className="text-[#9E7C1D] font-normal">
              Especialistas em Pedras Nobres
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Lado Esquerdo: Cards de Informações de Contato - Oculto no celular conforme solicitado */}
          <div className="hidden lg:block lg:col-span-5 space-y-8">
            
            <div className="bg-neutral-50 border border-neutral-200 p-6 sm:p-8 space-y-6 shadow-sm rounded-sm">
              <h3 className="font-serif text-2xl font-bold text-neutral-900">Atendimento Exclusivo Stone Gran Lux</h3>
              
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-[#D4AF37] hover:bg-[#C5A059] text-black transition-colors font-bold rounded-xs shadow-sm"
                >
                  <MessageCircle className="w-6 h-6 fill-black text-black shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-black block font-extrabold">WhatsApp Direto VIP</span>
                    <span className="font-serif text-xl">{siteConfig.whatsappFormatted}</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white border border-neutral-200 rounded-xs">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Central de Vendas</span>
                    <span className="font-semibold text-sm text-neutral-900">{siteConfig.phone}</span>
                  </div>
                </div>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white border border-neutral-200 hover:border-[#D4AF37] transition-colors rounded-xs"
                >
                  <InstagramIcon className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Instagram de Obras</span>
                    <span className="font-semibold text-sm text-neutral-900">{siteConfig.instagram}</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white border border-neutral-200 rounded-xs">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Showroom Principal</span>
                    <span className="font-semibold text-sm text-neutral-900 block">{siteConfig.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white border border-neutral-200 rounded-xs">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Horário de Funcionamento</span>
                    <span className="font-semibold text-xs text-neutral-700 block">{siteConfig.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed iframe */}
            <div className="bg-neutral-50 border border-neutral-200 p-2 aspect-[16/9] shadow-sm overflow-hidden rounded-sm">
              <iframe
                title="Mapa de Localização Stone Gran Lux"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197587842618!2d-46.67139192377402!3d-23.56134886161286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d3d376813b%3A0x8bb8c8c5c3789b70!2sAv.%20Europa%2C%201420%20-%20Jardins%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

          </div>

          {/* Lado Direito: Formulário Inteligente Compacto no Celular */}
          <div className="lg:col-span-7 bg-neutral-50 border border-[#D4AF37] sm:border-2 p-4 sm:p-8 md:p-10 shadow-lg text-neutral-900 space-y-4 sm:space-y-6 rounded-sm w-full max-w-2xl mx-auto">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">Receba uma Cotação Detalhada</h3>
              <p className="text-[11px] sm:text-xs text-neutral-600 font-light mt-0.5">
                Preencha os dados e receba o orçamento direto no seu WhatsApp em instantes
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div className="space-y-1 sm:space-y-1.5">
                  <label className="text-[11px] sm:text-xs uppercase tracking-wider text-neutral-700 font-semibold">Seu Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Dra. Patrícia Lima"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-white border border-neutral-300 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm font-light text-neutral-900 rounded-xs"
                  />
                </div>

                <div className="space-y-1 sm:space-y-1.5">
                  <label className="text-[11px] sm:text-xs uppercase tracking-wider text-neutral-700 font-semibold">Seu WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (61) 98888-7777"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-white border border-neutral-300 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm font-light text-neutral-900 rounded-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div className="space-y-1 sm:space-y-1.5">
                  <label className="text-[11px] sm:text-xs uppercase tracking-wider text-neutral-700 font-semibold">Pedra de Interesse</label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-white border border-neutral-300 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm font-light text-neutral-900 rounded-xs"
                  >
                    {siteConfig.materials.map((m) => (
                      <option key={m.id} value={m.name}>{m.name}</option>
                    ))}
                    <option value="Outra pedra sob consulta">Outra pedra sob consulta</option>
                  </select>
                </div>

                <div className="space-y-1 sm:space-y-1.5">
                  <label className="text-[11px] sm:text-xs uppercase tracking-wider text-neutral-700 font-semibold">Aplicação no Projeto</label>
                  <select
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-white border border-neutral-300 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm font-light text-neutral-900 rounded-xs"
                  >
                    {siteConfig.solutions.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1 sm:space-y-1.5">
                <label className="text-[11px] sm:text-xs uppercase tracking-wider text-neutral-700 font-semibold">Mensagem / Medidas do Projeto</label>
                <textarea
                  rows={2}
                  placeholder="Ex: Preciso de uma ilha de cozinha de 3m x 1.20m em Ilha Ônix Rosa com borda em 45º"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-white border border-neutral-300 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm font-light text-neutral-900 rounded-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 bg-[#D4AF37] hover:bg-[#C5A059] text-black font-semibold text-xs uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2 shadow-md rounded-xs"
              >
                <Send className="w-3.5 h-3.5 text-black" />
                <span>Enviar Solicitação para o WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
