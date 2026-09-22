import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Search, Sparkles, MessageCircle, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig, MaterialItem } from '../config/site';

export const MaterialsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeModalMaterial, setActiveModalMaterial] = useState<MaterialItem | null>(null);

  const itemsPerPage = 6;

  const categories = [
    { id: 'all', label: 'Todas as Pedras' },
    { id: 'onix', label: 'Ônix Translúcidos' },
    { id: 'exoticos', label: 'Granitos Exóticos Luxo' },
    { id: 'quartzitos', label: 'Quartzitos Nobres' },
    { id: 'marmores', label: 'Mármores Selecionados' },
    { id: 'granitos', label: 'Linha Essenciais' },
  ];

  // Filtragem
  const filteredMaterials = useMemo(() => {
    return siteConfig.materials.filter((mat) => {
      const matchesCategory = selectedCategory === 'all' || mat.category === selectedCategory;
      const matchesSearch = mat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            mat.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            mat.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Paginação
  const totalPages = Math.ceil(filteredMaterials.length / itemsPerPage);

  const paginatedMaterials = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredMaterials.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredMaterials, currentPage, itemsPerPage]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const catalogElement = document.getElementById('materiais');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsappMaterialUrl = (materialName: string) => {
    const text = encodeURIComponent(
      `Olá Stone Gran Lux! Gostaria de consultar um orçamento exclusivo para a pedra *${materialName}* para o meu projeto.`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="materiais" className="py-14 sm:py-20 md:py-28 bg-[#0A0A0C] text-white relative overflow-hidden border-t border-[#D4AF37]/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Filtros e Barra de Pesquisa */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-black/80 p-4 border border-[#D4AF37]/30 rounded-sm shadow-xl">
          {/* Tabs de Categoria */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-all duration-300 border ${
                  selectedCategory === cat.id
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-semibold shadow-sm'
                    : 'bg-black/40 text-gray-400 border-white/10 hover:border-[#D4AF37]/50 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Barra de Pesquisa */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#D4AF37] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por nome..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-black border border-white/20 focus:border-[#D4AF37] text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Status de Exibição */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-6 px-1">
          <span>
            Exibindo <strong className="text-[#F7E7AD]">{filteredMaterials.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}</strong> a <strong className="text-[#F7E7AD]">{Math.min(currentPage * itemsPerPage, filteredMaterials.length)}</strong> de <strong className="text-[#F7E7AD]">{filteredMaterials.length}</strong> pedras encontradas
          </span>
          {totalPages > 1 && (
            <span className="font-mono">Página {currentPage} de {totalPages}</span>
          )}
        </div>

        {/* Grid de Pedras */}
        {paginatedMaterials.length === 0 ? (
          <div className="text-center py-16 bg-[#121215] border border-white/10 p-8 space-y-3">
            <p className="font-serif text-xl text-gray-300">Nenhuma pedra encontrada para a busca "{searchQuery}"</p>
            <button
              onClick={() => { handleCategoryChange('all'); setSearchQuery(''); }}
              className="px-6 py-2 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedMaterials.map((mat) => (
              <div
                key={mat.id}
                className="group bg-[#121215] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl relative rounded-sm hover:-translate-y-1"
              >
                {/* Corner Motifs */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37] z-20" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37] z-20" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37] z-20" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37] z-20" />

                <div>
                  {/* Image Container with Zoom & Badge */}
                  <div
                    className="relative aspect-[16/10] img-zoom-container bg-black overflow-hidden cursor-pointer"
                    onClick={() => setActiveModalMaterial(mat)}
                  >
                    <img
                      src={mat.image}
                      alt={`Pedra Nobre Stone Gran Lux - ${mat.name}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Badge de Status / Raraidade */}
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-black bg-[#D4AF37] px-2.5 py-1 shadow-sm">
                      {mat.specs.rarity}
                    </span>

                    {/* Overlay de Ampliação */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/90 border border-[#D4AF37] text-[#D4AF37] text-[11px] uppercase tracking-widest">
                        <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                        Ver Ficha Completa
                      </span>
                    </div>

                    {/* Tag do Nome */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-white drop-shadow-md">
                        {mat.name}
                      </span>
                      <span className="text-[10px] text-[#D4AF37] font-mono uppercase bg-black/60 px-2 py-0.5 border border-[#D4AF37]/30">
                        {mat.specs.thickness}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#D4AF37] font-medium border-b border-white/10 pb-2">
                      {mat.subtitle}
                    </p>
                    
                    <p className="text-xs text-gray-300 font-light leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {mat.description}
                    </p>

                    {/* Especificações Rápidas */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] bg-black/50 p-2 sm:p-2.5 border border-white/5 rounded-xs">
                      <div>
                        <span className="text-gray-400 block text-[9px] uppercase">Origem</span>
                        <span className="text-white font-medium truncate block">{mat.specs.origin}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[9px] uppercase">Acabamento</span>
                        <span className="text-white font-medium truncate block">{mat.specs.finish}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-1.5 pt-1">
                      {mat.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botão de Cotação */}
                <div className="p-4 sm:p-6 pt-0 space-y-2">
                  <a
                    href={getWhatsappMaterialUrl(mat.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 sm:py-3 px-4 bg-[#D4AF37] hover:bg-[#C5A059] text-black font-semibold text-xs uppercase tracking-[0.15em] flex items-center justify-between group/btn shadow-sm transition-colors duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 fill-black text-black" />
                      Cotar {mat.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-black group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Paginação do Catálogo (Página 1, Página 2, ...) */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 border-t border-[#D4AF37]/30">
            {/* Botão Anterior */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2 border transition-all ${
                currentPage === 1
                  ? 'bg-black/40 text-gray-600 border-white/5 cursor-not-allowed'
                  : 'bg-black text-[#D4AF37] border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </button>

            {/* Números das Páginas */}
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={`w-10 h-10 text-xs font-bold font-mono transition-all border ${
                      currentPage === pageNum
                        ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                        : 'bg-black/60 text-gray-400 border-white/10 hover:border-[#D4AF37]/50 hover:text-white'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Botão Próximo */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2 border transition-all ${
                currentPage === totalPages
                  ? 'bg-black/40 text-gray-600 border-white/5 cursor-not-allowed'
                  : 'bg-black text-[#D4AF37] border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
              }`}
            >
              Próxima
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Modal de Detalhes da Pedra Selecionada */}
      {activeModalMaterial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="absolute inset-0" onClick={() => setActiveModalMaterial(null)} />
          
          <div className="relative z-10 bg-[#121215] border-2 border-[#D4AF37] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-8">
            <button
              onClick={() => setActiveModalMaterial(null)}
              className="absolute top-4 right-4 z-20 px-3 py-1 bg-black text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-xs uppercase font-bold"
            >
              [X] Fechar
            </button>

            {/* Imagem no Modal */}
            <div className="md:w-1/2 relative bg-black flex items-center justify-center border border-white/10">
              <img
                src={activeModalMaterial.image}
                alt={activeModalMaterial.name}
                className="w-full h-auto max-h-[450px] object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-black/80 px-3 py-1 text-xs text-[#D4AF37] border border-[#D4AF37]">
                {activeModalMaterial.specs.rarity}
              </span>
            </div>

            {/* Detalhes do Modal */}
            <div className="md:w-1/2 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-1">
                  STONE GRAN LUX • PEDRA NOBRE
                </span>
                <h3 className="font-serif text-3xl font-bold text-white mb-2">
                  {activeModalMaterial.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-4 border-b border-white/10 pb-3">
                  {activeModalMaterial.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
                  {activeModalMaterial.description}
                </p>

                <div className="grid grid-cols-2 gap-4 bg-black/70 p-4 border border-[#D4AF37]/30 text-xs mb-6">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Origem da Rocha</span>
                    <span className="text-white font-semibold">{activeModalMaterial.specs.origin}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Acabamento</span>
                    <span className="text-white font-semibold">{activeModalMaterial.specs.finish}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Espessura Padrão</span>
                    <span className="text-white font-semibold">{activeModalMaterial.specs.thickness}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase">Status / Raraidade</span>
                    <span className="text-[#D4AF37] font-semibold">{activeModalMaterial.specs.rarity}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={getWhatsappMaterialUrl(activeModalMaterial.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#C5A059] text-black font-semibold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2.5 shadow-md transition-colors"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  Solicitar Orçamento Desta Pedra no WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
