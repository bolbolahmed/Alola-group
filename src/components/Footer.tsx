import { Facebook, Instagram, Music } from 'lucide-react';
import logoImg from '../assets/images/alola_group_logo_1784447539957.jpg';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const { isAr, t } = useLanguage();

  return (
    <footer className="bg-inverse-surface dark:bg-onyx-black text-secondary-fixed-dim pt-16 border-t border-outline-variant/10">
      
      {/* Structural Columns Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5 font-body">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex flex-col items-start gap-3 select-none">
            <div className="flex flex-col text-start text-white font-heading">
              <span className="font-bold text-base md:text-lg leading-tight whitespace-nowrap">{t('nav.brandTitle')}</span>
              <span className="text-[10px] uppercase tracking-wider text-outline leading-none mt-1">{t('nav.brandSubtitle')}</span>
            </div>
            {/* Logo image positioned underneath the company text */}
            <img
              alt="Al-Ola Logo"
              className="h-16 w-auto rounded-xl opacity-90 hover:opacity-100 transition-all duration-300 shadow-md border border-white/10 mt-1 object-contain"
              src={logoImg}
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-xs sm:text-sm text-outline-variant/80 leading-relaxed font-normal">
            {isAr 
              ? 'نحن في العلا للتشطيبات المتكاملة نقدم حلولاً هندسية ومعمارية متكاملة تدمج بذكاء بين متانة الجودة وعصرية الابتكار لتحويل المساحات الخام إلى تحف فنية تنبض بالحياة والجمال.'
              : 'At Al-Ola Group, we deliver integrated engineering and architectural solutions combining durable quality with innovative design to transform raw spaces into living masterpieces.'}
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/share/1HVqhBNHNo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 hover:border-luxury-gold flex items-center justify-center text-white hover:text-luxury-gold transition-all duration-300 hover:scale-110"
              title="فيسبوك"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/al_olagroup?igsh=Yzdua2dvdHFvbDBh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 hover:border-luxury-gold flex items-center justify-center text-white hover:text-luxury-gold transition-all duration-300 hover:scale-110"
              title="انستجرام"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.tiktok.com/@elolagroup1?_r=1&_t=ZS-98DFsQBe0KC"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 hover:border-luxury-gold flex items-center justify-center text-white hover:text-luxury-gold transition-all duration-300 hover:scale-110"
              title="تيك توك"
            >
              <Music className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="space-y-4">
          <h4 className="font-heading font-bold text-lg text-luxury-gold tracking-wider">
            {isAr ? 'خدماتنا المتكاملة' : 'Integrated Services'}
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-outline-variant/95">
            <li className="flex items-center gap-2 cursor-pointer hover:text-luxury-gold transition-colors" onClick={() => onScrollTo('services-section')}>
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
              <span>{isAr ? 'تشطيب سكني ديلوكس' : 'Deluxe Residential Finishing'}</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-luxury-gold transition-colors" onClick={() => onScrollTo('services-section')}>
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
              <span>{isAr ? 'تجهيز معارض ومكاتب تجارية' : 'Commercial Shops & Offices'}</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-luxury-gold transition-colors" onClick={() => onScrollTo('services-section')}>
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
              <span>{isAr ? 'أعمال المقاولات MEP' : 'MEP Contracting Works'}</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-luxury-gold transition-colors" onClick={() => onScrollTo('services-section')}>
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
              <span>{isAr ? 'ديكورات وتصميم أسقف وجبس بورد' : 'Decor & Gypsum Board Ceiling'}</span>
            </li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="font-heading font-bold text-lg text-luxury-gold tracking-wider">
            {isAr ? 'روابط سريعة' : 'Quick Links'}
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-outline-variant/95">
            <li>
              <button onClick={() => onScrollTo('portfolio-section')} className="hover:text-luxury-gold transition-colors cursor-pointer text-start">
                {isAr ? 'مشاريعنا المنجزة' : 'Our Projects'}
              </button>
            </li>
            <li>
              <button onClick={() => onScrollTo('about-section')} className="hover:text-luxury-gold transition-colors cursor-pointer text-start">
                {isAr ? 'قصة نجاحنا ومن نحن' : 'About Us'}
              </button>
            </li>
            <li>
              <button onClick={() => onScrollTo('contact-section')} className="hover:text-luxury-gold transition-colors cursor-pointer text-start">
                {isAr ? 'احجز معاينة فنية مجانية' : 'Book Free Technical Inspection'}
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-4">
          <h4 className="font-heading font-bold text-lg text-luxury-gold tracking-wider">
            {isAr ? 'تواصل معنا' : 'Contact Us'}
          </h4>
          <ul className="space-y-3.5 text-xs sm:text-sm text-outline-variant/95">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-luxury-gold text-lg mt-0.5">location_on</span>
              <a
                href="https://maps.google.com/?q=شارع+مصطفى+كامل،+السيوف،+أبراج+المعتز،+الإسكندرية"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors text-start"
                title="افتح موقعنا على خرائط جوجل"
              >
                {isAr 
                  ? 'الإسكندرية، شارع مصطفى كامل، السيوف، أبراج المعتز، برج 3، ممر مستشفى دار العلاج، مبنى رقم 3 (خرائط Google)'
                  : 'Alexandria, Mostafa Kamel St, El-Seyouf, Al-Moataz Towers, Tower 3, Bldg 3 (Google Maps)'}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-luxury-gold text-lg">call</span>
              <a
                href="https://wa.me/201003656083"
                target="_blank"
                rel="noopener noreferrer"
                className="font-worksans tracking-wide text-white hover:text-luxury-gold transition-colors"
                title="تواصل معنا عبر واتساب"
              >
                +201003656083 ({isAr ? 'اتصال / واتساب' : 'Call / WhatsApp'})
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-luxury-gold text-lg">mail</span>
              <a
                href="mailto:elbilikdarb@gmail.com"
                className="font-worksans tracking-wide text-white hover:text-luxury-gold transition-colors"
              >
                elbilikdarb@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyrights bottom Row */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] sm:text-xs text-outline font-body">
        <p>&copy; 2026 {t('footer.rights')}</p>
        <div className="flex gap-4 sm:gap-6 font-semibold">
          <a href="#" className="hover:text-luxury-gold transition-colors">{isAr ? 'شروط الخدمة والاستخدام' : 'Terms of Service'}</a>
          <a href="#" className="hover:text-luxury-gold transition-colors">{isAr ? 'ملفات تعريف الارتباط (Cookies)' : 'Cookie Policy'}</a>
        </div>
      </div>

    </footer>
  );
}
