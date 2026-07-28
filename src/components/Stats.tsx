import { useLanguage } from '../context/LanguageContext';

export default function Stats() {
  const { isAr } = useLanguage();

  const statItems = [
    { 
      prefix: isAr ? 'أكثر من' : 'Over', 
      value: '+130', 
      label: isAr ? 'مشروعاً ناجحاً' : 'Successful Projects',
      description: isAr ? 'تعبر عن حجم الأعمال والإنجازات المتميزة للشركة' : 'Demonstrating our track record and architectural achievements'
    },
    { 
      prefix: isAr ? 'أكثر من' : 'Over', 
      value: '+5', 
      label: isAr ? 'سنوات خبرة' : 'Years Experience',
      description: isAr ? 'من الابتكار والحلول الهندسية وتطوير المساحات' : 'Of architectural innovation and spatial engineering excellence'
    },
    { 
      prefix: isAr ? 'أكثر من' : 'Over', 
      value: '+50', 
      label: isAr ? 'مشروع LUXURY' : 'LUXURY Projects',
      description: isAr ? 'بأعلى معايير الفخامة والفرش الفاخر للفلل والقصور' : 'Premium ultra-luxury finishes for villas and palaces'
    },
    { 
      prefix: isAr ? 'أكثر من' : 'Over', 
      value: '+30', 
      label: isAr ? 'مشروع VIP' : 'VIP Projects',
      description: isAr ? 'تشطيب متكامل بنظم ذكية ودقة تنفيذ لعملاء النخبة' : 'Turnkey smart finishing crafted with precision for elite clients'
    }
  ];

  return (
    <section className="relative bg-onyx-black py-20 border-b border-outline-variant/10 overflow-hidden">
      {/* Background Image with elegant dark overlay for perfect legibility */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/SXCc1ZzB/finishing.jpg"
          alt="خلفية تشطيبات فاخرة"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/80 md:bg-black/75 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statItems.map((stat, idx) => (
            <div key={idx} className="text-center group flex flex-col items-center justify-start h-full">
              <span className="text-[10px] md:text-xs text-[#d1c2b0] font-body mb-1 opacity-70 tracking-wide font-medium">
                {stat.prefix}
              </span>
              <div className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-gold group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="mt-2 font-body text-xs md:text-sm text-secondary-fixed-dim uppercase tracking-widest font-semibold opacity-90">
                {stat.label}
              </div>
              <p className="mt-2 text-[10px] md:text-xs text-[#b8a795] font-body max-w-[180px] mx-auto leading-relaxed opacity-75">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

