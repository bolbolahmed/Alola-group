import aboutImg from '../assets/images/regenerated_image_1785067891285.jpg';

export default function About() {
  return (
    <section id="about-section" className="py-20 bg-[#f5eddf] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text/Content Area (7 Columns on large screens) */}
          <div className="lg:col-span-7 relative space-y-6 md:space-y-8">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-luxury-gold/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-4 font-body">
              <span className="text-xs sm:text-sm text-luxury-gold uppercase tracking-widest font-bold block">
                من نحن
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-tight">
                شركاؤك في <br />
                <span className="text-luxury-gold">التشطيب المتكامل.</span>
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed font-normal max-w-2xl">
                مجموعة العلا للتشطيبات المتكاملة شركة رائدة في أعمال التشطيبات والحلول المعمارية الداخلية والخارجية المتكاملة. تأسست عام 2021 بهدف تقديم حلول تشطيب شاملة ومبتكرة للشقق السكنية والمحلات التجارية والمباني الإدارية. نؤمن بأن كل مساحة فريدة، وتستحق أن تُشطَّب بأعلى معايير الجودة والصلابة والجمال الهندسي.
              </p>

              {/* Unique Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-outline-variant/30">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-luxury-gold text-2xl">verified</span>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-primary">
                    جودة لا تُساوَم
                  </h4>
                  <p className="text-xs sm:text-sm text-outline font-medium">
                    نعتمد على أجود المواد الخام المطابقة للمواصفات العالمية والكوادر الفنية الأكثر مهارة لضمان تنفيذ استثنائي يدوم طويلاً.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-luxury-gold text-2xl">schedule</span>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-primary">
                    التزام حاسم بالمواعيد
                  </h4>
                  <p className="text-xs sm:text-sm text-outline font-medium">
                    نحترم وقت عملائنا الثمين وجداولهم الزمنية، ونلتزم بمواعيد التسليم المتفق عليها في بنود التعاقد بدقة متناهية.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Graphical/Image Area (5 Columns on large screens) */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 border-2 border-luxury-gold translate-x-4 -translate-y-4 rounded-xl group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-500 pointer-events-none" />
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-surface-dim border border-outline-variant/35">
              <img
                alt="Our Professional Quality Work"
                className="w-full aspect-[4/3] sm:aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                src={aboutImg}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
