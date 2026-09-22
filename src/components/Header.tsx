import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';
import { StoneLogo } from './StoneLogo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Pedras & Materiais', href: '#materiais' },
    { name: 'Aplicações', href: '#solucoes' },
    { name: 'Contato', href: '#contato' },
  ];

  const getWhatsappUrl = (customText?: string) => {
    const text = encodeURIComponent(customText || siteConfig.defaultWhatsappMessage);
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#09090B]/95 backdrop-blur-md py-3 text-white border-b border-[#D4AF37]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="group flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <div className="flex items-center">
            <StoneLogo size="sm" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] hover:bg-[#C5A059] text-black font-semibold text-xs uppercase tracking-[0.18em] transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-black text-black" />
            <span>Orçamento VIP</span>
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#D4AF37] text-black rounded-xs shadow-sm"
            aria-label="Orçamento WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-black text-black" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#D4AF37] transition-colors focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#0A0A0C]/98 backdrop-blur-2xl border-t border-[#D4AF37]/30 z-40 flex flex-col justify-between p-6 sm:p-8 animate-fade-in overflow-y-auto">
          <div className="flex flex-col gap-4 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-lg sm:text-xl tracking-wider text-white hover:text-[#D4AF37] transition-colors border-b border-white/10 pb-2.5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#D4AF37]">→</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-6 pt-5 border-t border-[#D4AF37]/30">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#C5A059] text-black font-semibold text-center text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2.5 shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              Solicitar Orçamento no WhatsApp
            </a>
            
            <div className="flex items-center justify-between text-xs text-gray-400 pt-2">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                {siteConfig.phone}
              </span>
              <span className="text-gray-300">{siteConfig.city} - {siteConfig.state}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
