import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export const FloatingWhatsapp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const getWhatsappUrl = () => {
    const text = encodeURIComponent(siteConfig.defaultWhatsappMessage);
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-black/90 text-white text-xs px-4 py-3 shadow-2xl border border-[#D4AF37] rounded-sm backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <div className="flex flex-col">
            <span className="font-bold text-[#D4AF37]">Orçamento Online no WhatsApp</span>
            <span className="text-[10px] text-gray-300">Resposta imediata</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white text-xs ml-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-3.5 sm:p-4 bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center rounded-full"
        aria-label="Falar pelo WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
};
