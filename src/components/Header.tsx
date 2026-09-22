import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { PillNav, PillNavItem } from './PillNav';

export const Header: React.FC = () => {
  const [activeHref, setActiveHref] = useState('#inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'diferenciais', 'materiais', 'solucoes', 'processo', 'contato'];
      const scrollY = window.scrollY + 200;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveHref(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: PillNavItem[] = [
    { label: 'Início', href: '#inicio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Catálogo', href: '#materiais' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ];

  const getWhatsappUrl = () => {
    const text = encodeURIComponent(siteConfig.defaultWhatsappMessage);
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <PillNav
      logo="/images/logo_stone_gran_lux.png"
      logoAlt="Stone Gran Lux"
      items={navItems}
      activeHref={activeHref}
      baseColor="#D4AF37"
      pillColor="#16161A"
      hoveredPillTextColor="#0A0A0C"
      pillTextColor="#FFFFFF"
      whatsappUrl={getWhatsappUrl()}
    />
  );
};
