import { useState } from 'react';
import { SERVICES } from '../data';
import { ServiceDetail } from '../types';
import { motion } from 'motion/react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <section id="services-section" className="py-20 bg-[#fff8f0]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Title Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="font-body text-xs sm:text-sm text-luxury-gold uppercase tracking-[0.2em] mb-3 block font-semibold">
              ما نقدمه من تميز
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-tight">
              كل تفاصيل التشطيب، <span className="text-luxury-gold">منجزة بإتقان.</span>
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-sm leading-relaxed border-r-2 border-outline-variant pr-4">
            من الجبس الهيكلي المعزول حتى اللمسات النهائية للطلاء والأرضيات — نتولى إدارة كل الأعمال من البداية وحتى التسليم لتنعم بالراحة الكاملة.
          </p>
        </motion.div>

        {/* Bento-style Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. Large Feature: Residential Finishing (8 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onClick={() => setSelectedService(SERVICES[0])}
            className="md:col-span-8 group relative overflow-hidden rounded-xl h-96 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-outline-variant/10"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${SERVICES[0].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
            
            <div className="absolute bottom-0 right-0 p-6 md:p-8 w-full text-white z-20 font-body">
              <div className="flex gap-2 mb-4">
                <span className="bg-luxury-gold text-white px-3 py-1 rounded-full text-xs font-bold">
                  جبس وأسقف
                </span>
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
                  أرضيات
                </span>
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
                {SERVICES[0].titleAr}
              </h3>
              <p className="text-surface-variant text-xs sm:text-sm max-w-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {SERVICES[0].descriptionAr}
              </p>
              <span className="inline-flex items-center gap-1 text-luxury-gold text-xs font-bold mt-4 group-hover:translate-x-[-4px] transition-transform">
                <span>اضغط لعرض التفاصيل والمواصفات الكاملة</span>
                <span className="material-symbols-outlined text-sm">arrow_back</span>
              </span>
            </div>
          </motion.div>

          {/* 2. Secondary: Commercial Fit-Out (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            onClick={() => setSelectedService(SERVICES[1])}
            className="md:col-span-4 group relative overflow-hidden rounded-xl h-96 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-outline-variant/10 bg-onyx-black"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-30 transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${SERVICES[1].image}')` }}
            />
            <div className="absolute inset-0 bg-onyx-black/30 group-hover:bg-onyx-black/40 transition-colors z-10" />
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white z-20 font-body">
              <div className="w-14 h-14 rounded-full bg-primary-container/20 flex items-center justify-center border border-luxury-gold/30 mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-luxury-gold">business</span>
              </div>
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 text-white">
                {SERVICES[1].titleAr}
              </h3>
              <p className="text-xs text-surface-variant max-w-xs leading-relaxed opacity-95">
                {SERVICES[1].descriptionAr}
              </p>
              <span className="inline-flex items-center gap-1 text-luxury-gold text-xs font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>التفاصيل المعمارية</span>
                <span className="material-symbols-outlined text-xs">arrow_back</span>
              </span>
            </div>
          </motion.div>

          {/* 3. Small Item: Luxury Flooring (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onClick={() => setSelectedService(SERVICES[2])}
            className="md:col-span-4 group relative overflow-hidden rounded-xl h-72 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-outline-variant/10"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${SERVICES[2].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-black/80 to-transparent z-10" />
            <div className="absolute bottom-4 right-4 left-4 text-white z-20 font-body">
              <h4 className="font-heading font-bold text-lg mb-1">{SERVICES[2].titleAr}</h4>
              <p className="text-[11px] text-surface-variant opacity-90 line-clamp-2">
                {SERVICES[2].descriptionAr}
              </p>
            </div>
          </motion.div>

          {/* 4. Small Item: Plaster & Ceilings (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            onClick={() => setSelectedService(SERVICES[3])}
            className="md:col-span-4 group relative overflow-hidden rounded-xl h-72 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-outline-variant/10"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${SERVICES[3].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-black/80 to-transparent z-10" />
            <div className="absolute bottom-4 right-4 left-4 text-white z-20 font-body">
              <h4 className="font-heading font-bold text-lg mb-1">{SERVICES[3].titleAr}</h4>
              <p className="text-[11px] text-surface-variant opacity-90 line-clamp-2">
                {SERVICES[3].descriptionAr}
              </p>
            </div>
          </motion.div>

          {/* 5. Small Item: MEP (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            onClick={() => setSelectedService(SERVICES[4])}
            className="md:col-span-4 group relative overflow-hidden rounded-xl h-72 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-outline-variant/10"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${SERVICES[4].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-black/80 to-transparent z-10" />
            <div className="absolute bottom-4 right-4 left-4 text-white z-20 font-body">
              <h4 className="font-heading font-bold text-lg mb-1">{SERVICES[4].titleAr}</h4>
              <p className="text-[11px] text-surface-variant opacity-90 line-clamp-2">
                {SERVICES[4].descriptionAr}
              </p>
            </div>
          </motion.div>

        </div>

        {/* Detailed Interactive Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-onyx-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
            <div className="bg-[#fff8f0] rounded-xl max-w-2xl w-full border border-luxury-gold/30 shadow-2xl overflow-hidden font-body animate-slideUp">
              
              {/* Modal Banner */}
              <div className="relative h-48 md:h-56">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${selectedService.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-black via-onyx-black/40 to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 left-4 bg-white/20 hover:bg-white/40 text-white rounded-full w-9 h-9 flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
                <div className="absolute bottom-4 right-6 text-white">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl">
                    {selectedService.titleAr}
                  </h3>
                  <span className="text-luxury-gold text-xs font-semibold tracking-wide uppercase font-body mt-1 block">
                    {selectedService.title}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <h4 className="text-primary font-bold font-heading text-lg">وصف الخدمة:</h4>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                    {selectedService.descriptionAr}
                  </p>
                </div>

                <div className="border-t border-outline-variant/30 pt-6 space-y-4">
                  <h4 className="text-primary font-bold font-heading text-lg">ما تشمله هذه المرحلة (المواصفات الفنية):</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {selectedService.highlightsAr.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-on-surface">
                        <span className="material-symbols-outlined text-luxury-gold text-lg mt-0.5">
                          verified
                        </span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action in Modal */}
                <div className="border-t border-outline-variant/30 pt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="bg-primary text-white hover:bg-onyx-black font-bold px-6 py-3 rounded-lg text-sm transition-all duration-300 shadow cursor-pointer"
                  >
                    إغلاق المواصفات
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
