import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="py-20 bg-onyx-black text-white relative overflow-hidden border-b border-outline-variant/10">
      {/* Decorative Golden Gradient Backdrop Vector */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-luxury-gold to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Header Description Left (5 Columns on Large screens) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-body text-xs sm:text-sm text-luxury-gold uppercase tracking-widest font-semibold block">
              آراء شركاء النجاح
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight">
              ماذا يقول <br />
              <span className="luxury-gradient-text">عملاؤنا عنا.</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-secondary-fixed-dim max-w-sm leading-relaxed opacity-90">
              ثقة عملائنا في محافظة الإسكندرية والقاهرة ودمنهور هي المحرك الحقيقي للتميز الذي نقدمه في كل تفصيلة معمارية.
            </p>
            
            {/* Avatar Stack with Satisfied clients stats */}
            <div className="flex items-center gap-4 pt-4 font-body">
              <div className="flex -space-x-3 space-x-reverse">
                <div className="w-10 h-10 rounded-full border-2 border-onyx-black bg-surface-variant flex items-center justify-center text-primary text-xs font-bold shadow">
                  أز
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-onyx-black bg-luxury-gold flex items-center justify-center text-white text-xs font-bold shadow">
                  سف
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-onyx-black bg-surface-container flex items-center justify-center text-primary text-xs font-bold shadow">
                  أع
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-onyx-black bg-surface-variant flex items-center justify-center text-luxury-gold text-xs font-bold shadow">
                  سم
                </div>
              </div>
              <span className="text-xs sm:text-sm text-secondary-fixed-dim font-medium tracking-wide">
                انضم لأكثر من <span className="font-bold text-luxury-gold">٣٤٠</span> عميل راضٍ بالكامل
              </span>
            </div>
          </div>

          {/* Testimonial Cards Right (7 Columns on Large screens) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-luxury-gold/40 transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Gold Stars */}
                  <div className="text-luxury-gold flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <span
                        key={idx}
                        className="material-symbols-outlined text-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="font-body text-sm sm:text-base text-white/90 italic leading-relaxed mb-6">
                    "{t.comment}"
                  </p>
                </div>

                {/* Author Card */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5 font-body">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    {t.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-outline font-medium mt-0.5">
                      {t.role} &bull; {t.location}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
