import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioProps {
  onOpenEstimator: () => void;
}

export default function Portfolio({ onOpenEstimator }: PortfolioProps) {
  const { isAr, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'buildings'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Fullscreen Lightbox Modal State
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const handleOpenLightbox = (project: Project, imageIndex: number = 0, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxProject(project);
    setLightboxImageIndex(imageIndex);
    setIsZoomed(false);
  };

  // Keyboard navigation for full-screen viewer
  useEffect(() => {
    if (!lightboxProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const gallery = lightboxProject.gallery || [lightboxProject.image];
      if (e.key === 'Escape') {
        setLightboxProject(null);
        setIsZoomed(false);
      } else if (e.key === 'ArrowLeft') {
        // Next image in RTL / Prev in LTR
        setLightboxImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
        setIsZoomed(false);
      } else if (e.key === 'ArrowRight') {
        setLightboxImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxProject]);

  // Touch Swipe Handlers for mobile viewer
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || !lightboxProject) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    const gallery = lightboxProject.gallery || [lightboxProject.image];

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left
        setLightboxImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
      } else {
        // Swiped right
        setLightboxImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
      }
      setIsZoomed(false);
    }
    setTouchStartX(null);
  };

  const filters: { id: typeof activeFilter; label: string }[] = [
    { id: 'all', label: isAr ? 'الكل' : 'All' },
    { id: 'residential', label: isAr ? 'سكني' : 'Residential' },
    { id: 'commercial', label: isAr ? 'تجاري' : 'Commercial' },
    { id: 'buildings', label: isAr ? 'مبانٍ' : 'Buildings' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="font-body text-xs sm:text-sm text-luxury-gold uppercase tracking-[0.3em] mb-3 block font-bold">
            {t('portfolio.tag')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-tight">
            {isAr ? (
              <>مشاريع منجزة <span className="text-luxury-gold">تتحدث عن نفسها.</span></>
            ) : (
              <>Completed Projects <span className="text-luxury-gold">Speaking Excellence.</span></>
            )}
          </h2>
        </motion.div>

        {/* Dynamic Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 font-body"
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 sm:px-8 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-primary border-primary text-white shadow-md'
                  : 'bg-white border-outline-variant/30 text-on-surface-variant hover:border-luxury-gold'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: 'easeOut' }}
              className="group flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300"
            >
              {/* Aspect Ratio Boxed Image */}
              <div 
                onClick={() => handleOpenProject(project)}
                className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-md mb-4 bg-surface-dim border border-outline-variant/15 cursor-pointer"
              >
                <img
                  alt={isAr ? project.titleAr : project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                  referrerPolicy="no-referrer"
                />
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full font-body text-xs font-semibold text-primary shadow-xs z-10">
                  {project.year}
                </div>

                {/* Cover Overlay on Hover with Action Buttons */}
                <div className="absolute inset-0 bg-onyx-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="flex flex-col sm:flex-row gap-2.5 items-center justify-center">
                    <button
                      onClick={(e) => handleOpenLightbox(project, 0, e)}
                      className="bg-luxury-gold hover:bg-gold-light text-white font-semibold text-xs py-2.5 px-4 rounded-full shadow-lg flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">zoom_in</span>
                      <span>{isAr ? 'معاينة مكبرة' : 'Fullscreen Zoom'}</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenProject(project);
                      }}
                      className="bg-white/95 hover:bg-white text-primary font-semibold text-xs py-2.5 px-4 rounded-full shadow-lg flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">info</span>
                      <span>{isAr ? 'المواصفات الفنية' : 'View Specs'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Metadata */}
              <div className="flex justify-between items-start font-body px-1">
                <div className="flex-1 cursor-pointer" onClick={() => handleOpenProject(project)}>
                  <h3 className="font-heading font-bold text-lg md:text-xl text-primary leading-tight transition-colors group-hover:text-luxury-gold">
                    {isAr ? project.titleAr : project.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5 items-center">
                    <p className="text-[11px] sm:text-xs text-outline font-medium flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs text-luxury-gold">location_on</span>
                      <span>{isAr ? project.locationAr : project.location}</span>
                    </p>
                    {(isAr ? project.finishingTypeAr : project.finishingTypeEn) && (
                      <span className="text-[10px] bg-luxury-gold/10 text-luxury-gold font-bold px-2 py-0.5 rounded-md flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-xs">verified</span>
                        <span>{isAr ? project.finishingTypeAr : project.finishingTypeEn}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right flex flex-col items-end pl-2">
                  <span className="font-heading font-bold text-base text-primary">
                    {project.area} {isAr ? 'م²' : 'm²'}
                  </span>
                  <span className="text-[10px] text-outline font-medium">
                    {isAr ? project.categoryAr : project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenEstimator}
            className="border-2 border-luxury-gold hover:bg-luxury-gold text-luxury-gold hover:text-white px-10 sm:px-12 py-3 rounded-lg font-body font-bold text-sm hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
          >
            {isAr ? 'ناقش مشروعك الفاخر معنا' : 'Discuss Your Luxury Project With Us'}
          </button>
        </div>

        {/* Detailed Technical Sheet Modal */}
        {selectedProject && (() => {
          const gallery = Array.from(new Set(selectedProject.gallery || [selectedProject.image]));
          const handlePrevImage = (e: React.MouseEvent) => {
            e.stopPropagation();
            setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
          };
          const handleNextImage = (e: React.MouseEvent) => {
            e.stopPropagation();
            setActiveImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
          };

          return (
            <div className="fixed inset-0 bg-onyx-black/75 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
              <div className="bg-[#fff8f0] rounded-xl max-w-3xl w-full border border-luxury-gold/30 shadow-2xl overflow-hidden font-body animate-slideUp flex flex-col my-8">
                
                {/* Image Gallery Interactive Viewer */}
                <div 
                  onClick={() => handleOpenLightbox(selectedProject, activeImageIndex)}
                  className="relative h-64 sm:h-80 md:h-[400px] bg-black flex items-center justify-center group/gallery select-none flex-shrink-0 cursor-pointer"
                  title="انقر لفتح المعاينة الفاخرة بالشاشة الكاملة"
                >
                  <img
                    alt={`${selectedProject.titleAr} - ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                    src={gallery[activeImageIndex]}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-80 group-hover/gallery:opacity-60 transition-opacity" />
                  
                  {/* Close Modal Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(null);
                    }}
                    className="absolute top-4 left-4 bg-white/25 hover:bg-white/45 text-white rounded-full w-9 h-9 flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer z-10"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>

                  {/* Expand Fullscreen Button */}
                  <button
                    onClick={(e) => handleOpenLightbox(selectedProject, activeImageIndex, e)}
                    className="absolute top-4 right-4 bg-black/60 hover:bg-luxury-gold text-white px-3 py-1.5 rounded-full backdrop-blur-md transition-all duration-200 text-xs font-semibold flex items-center gap-1 border border-white/20 z-10 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">fullscreen</span>
                    <span>عرض بالشاشة الكاملة</span>
                  </button>

                  {/* Left / Right Arrow Controls */}
                  {gallery.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-luxury-gold text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer border border-white/20 active:scale-95 shadow-lg"
                        aria-label="Previous image"
                      >
                        <span className="material-symbols-outlined font-bold text-2xl">chevron_right</span>
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-luxury-gold text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer border border-white/20 active:scale-95 shadow-lg"
                        aria-label="Next image"
                      >
                        <span className="material-symbols-outlined font-bold text-2xl">chevron_left</span>
                      </button>
                    </>
                  )}

                  {/* Page Indicator */}
                  {gallery.length > 1 && (
                    <div className="absolute bottom-16 right-6 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white/95 tracking-wider border border-white/10 z-10">
                      {activeImageIndex + 1} / {gallery.length}
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 right-6 text-white font-body left-6 text-right z-10">
                    <div className="flex flex-wrap gap-2 mb-2 items-center justify-start">
                      <span className="bg-luxury-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {selectedProject.categoryAr}
                      </span>
                      {selectedProject.finishingTypeAr && (
                        <span className="bg-white/15 border border-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full">
                          {selectedProject.finishingTypeAr}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white drop-shadow-md leading-tight">
                      {selectedProject.titleAr}
                    </h3>
                  </div>
                </div>

                {/* Horizontal Scroll of Gallery Thumbnails */}
                {gallery.length > 1 && (
                  <div className="bg-neutral-900 p-3 flex justify-center gap-2 overflow-x-auto border-b border-luxury-gold/25 flex-shrink-0">
                    {gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-16 h-12 rounded-md overflow-hidden flex-shrink-0 transition-all duration-200 cursor-pointer ${
                          activeImageIndex === idx
                            ? 'ring-2 ring-luxury-gold scale-105 opacity-100 shadow-lg'
                            : 'opacity-50 hover:opacity-85'
                        }`}
                      >
                        <img
                          src={img}
                          alt="thumbnail"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Technical Information Panel */}
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[350px]">
                  
                  {/* Meta details block */}
                  <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-sand-neutral/60 border border-outline-variant/20 text-center font-body">
                    <div>
                      <span className="text-[10px] text-outline font-semibold uppercase block">الموقع</span>
                      <span className="font-heading text-primary font-bold text-sm sm:text-base">{selectedProject.locationAr}</span>
                    </div>
                    <div className="border-r border-outline-variant/30">
                      <span className="text-[10px] text-outline font-semibold uppercase block">المساحة المغطاة</span>
                      <span className="font-heading text-primary font-bold text-sm sm:text-base font-worksans">{selectedProject.area} م²</span>
                    </div>
                    <div className="border-r border-outline-variant/30">
                      <span className="text-[10px] text-outline font-semibold uppercase block">سنة التسليم</span>
                      <span className="font-heading text-primary font-bold text-sm sm:text-base font-worksans">{selectedProject.year}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <h4 className="text-primary font-bold font-heading text-lg">نظرة عامة على المشروع:</h4>
                    <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                      {selectedProject.descriptionAr}
                    </p>
                    <p className="text-xs text-outline italic leading-relaxed pt-2 border-t border-outline-variant/10 font-worksans">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Highlights of Materials */}
                  <div className="border-t border-outline-variant/30 pt-6 space-y-3 font-body text-sm">
                    <h4 className="text-primary font-bold font-heading text-base">
                      مواصفات التشطيب المنفذة ({selectedProject.finishingTypeAr || "فاخر"}):
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-on-surface">
                      {(selectedProject.specsAr || [
                        "رخام إيطالي مصقول عالي المقاومة للأرضيات",
                        "أسقف جبس مقاومة للرطوبة وتمديدات ذكية",
                        "طلاءات جوتن الصديقة للبيئة مقاومة للبهتان",
                        "قواطع مدمجة عازلة للصوت والحرارة"
                      ]).map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 bg-white/50 p-2.5 rounded-lg border border-outline-variant/10">
                          <span className="w-2 h-2 rounded-full bg-luxury-gold mt-1.5 flex-shrink-0" />
                          <span className="text-on-surface-variant leading-relaxed">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer in Modal */}
                  <div className="border-t border-outline-variant/30 pt-6 flex justify-between items-center">
                    <button
                      onClick={() => handleOpenLightbox(selectedProject, activeImageIndex)}
                      className="text-xs text-luxury-gold hover:underline font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">zoom_in</span>
                      <span>افتح في عارض الصور الكامل</span>
                    </button>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="bg-primary hover:bg-onyx-black text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-all duration-300 cursor-pointer"
                    >
                      إغلاق التفاصيل
                    </button>
                  </div>

                </div>

              </div>
            </div>
          );
        })()}

        {/* Interactive Fullscreen Lightbox Image Viewer */}
        <AnimatePresence>
          {lightboxProject && (() => {
            const gallery = Array.from(new Set(lightboxProject.gallery || [lightboxProject.image]));
            const currentImg = gallery[lightboxImageIndex] || lightboxProject.image;

            const handlePrev = (e?: React.MouseEvent) => {
              e?.stopPropagation();
              setLightboxImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
              setIsZoomed(false);
            };

            const handleNext = (e?: React.MouseEvent) => {
              e?.stopPropagation();
              setLightboxImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
              setIsZoomed(false);
            };

            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col justify-between select-none overflow-hidden font-body"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Header Bar */}
                <div className="flex justify-between items-center px-4 sm:px-8 py-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-20 text-white">
                  <div className="flex items-center gap-3">
                    <span className="bg-luxury-gold text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {lightboxProject.categoryAr}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-sm sm:text-lg text-white leading-snug">
                        {lightboxProject.titleAr}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-white/70 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs text-luxury-gold">location_on</span>
                        <span>{lightboxProject.locationAr}</span>
                        {gallery.length > 1 && (
                          <span className="mr-2 text-luxury-gold font-bold">
                            • الصورة {lightboxImageIndex + 1} من {gallery.length}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Zoom Toggle Button */}
                    <button
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
                      title={isZoomed ? "تصغير الحجم" : "تكبير الصورة"}
                    >
                      <span className="material-symbols-outlined text-lg sm:text-xl">
                        {isZoomed ? 'zoom_in_map' : 'zoom_out_map'}
                      </span>
                    </button>

                    {/* Specifications Button */}
                    <button
                      onClick={() => {
                        setSelectedProject(lightboxProject);
                        setActiveImageIndex(lightboxImageIndex);
                        setLightboxProject(null);
                      }}
                      className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-luxury-gold hover:bg-gold-light text-white font-bold text-xs transition-all shadow-md cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">info</span>
                      <span>المواصفات الفنية</span>
                    </button>

                    {/* Close Button */}
                    <button
                      onClick={() => {
                        setLightboxProject(null);
                        setIsZoomed(false);
                      }}
                      className="p-2 sm:p-2.5 rounded-full bg-white/15 hover:bg-red-600/80 text-white transition-colors cursor-pointer border border-white/15"
                      title="إغلاق (Esc)"
                    >
                      <span className="material-symbols-outlined text-lg sm:text-xl">close</span>
                    </button>
                  </div>
                </div>

                {/* Main View Area with Large Navigation Arrows */}
                <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
                  {/* Previous Arrow (Right in RTL) */}
                  {gallery.length > 1 && (
                    <button
                      onClick={handlePrev}
                      className="absolute right-2 sm:right-8 z-30 bg-black/60 hover:bg-luxury-gold text-white p-3 sm:p-4 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer border border-white/20 hover:scale-110 active:scale-95 shadow-2xl group"
                      title="الصورة السابقة (السهم الأيمن)"
                    >
                      <span className="material-symbols-outlined text-2xl sm:text-3xl font-bold group-hover:scale-110 transition-transform">
                        chevron_right
                      </span>
                    </button>
                  )}

                  {/* Main Image */}
                  <div className="relative max-w-full max-h-full flex items-center justify-center overflow-auto p-2">
                    <motion.img
                      key={lightboxImageIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: isZoomed ? 1.4 : 1 }}
                      transition={{ duration: 0.3 }}
                      src={currentImg}
                      alt={`${lightboxProject.titleAr} - ${lightboxImageIndex + 1}`}
                      referrerPolicy="no-referrer"
                      onClick={() => setIsZoomed(!isZoomed)}
                      className={`max-h-[75vh] sm:max-h-[82vh] max-w-[92vw] object-contain rounded-lg shadow-2xl transition-transform duration-300 cursor-pointer ${
                        isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                      }`}
                    />
                  </div>

                  {/* Next Arrow (Left in RTL) */}
                  {gallery.length > 1 && (
                    <button
                      onClick={handleNext}
                      className="absolute left-2 sm:left-8 z-30 bg-black/60 hover:bg-luxury-gold text-white p-3 sm:p-4 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer border border-white/20 hover:scale-110 active:scale-95 shadow-2xl group"
                      title="الصورة التالية (السهم الأيسر)"
                    >
                      <span className="material-symbols-outlined text-2xl sm:text-3xl font-bold group-hover:scale-110 transition-transform">
                        chevron_left
                      </span>
                    </button>
                  )}
                </div>

                {/* Bottom Gallery Thumbnail Bar */}
                <div className="px-4 sm:px-8 py-3 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-20">
                  {gallery.length > 1 && (
                    <div className="flex justify-center items-center gap-2 overflow-x-auto pb-2 max-w-2xl mx-auto">
                      {gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setLightboxImageIndex(idx);
                            setIsZoomed(false);
                          }}
                          className={`relative w-12 h-9 sm:w-20 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 cursor-pointer border ${
                            lightboxImageIndex === idx
                              ? 'border-luxury-gold ring-2 ring-luxury-gold/80 scale-105 opacity-100 shadow-xl'
                              : 'border-white/20 opacity-40 hover:opacity-85'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`thumbnail-${idx}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="text-center text-xs text-white/70 max-w-xl mx-auto mt-1 flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                    <span className="text-luxury-gold font-bold">{lightboxProject.titleAr}</span>
                    <span>•</span>
                    <span>{lightboxProject.finishingTypeAr || "تشطيب فاخر"}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline text-white/50">استخدم الأسهم لملاحة الصور أو Esc للإغلاق</span>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

      </div>
    </section>
  );
}
