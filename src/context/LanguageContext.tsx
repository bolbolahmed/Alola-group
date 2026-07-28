import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isAr: boolean;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navbar
    'nav.brandTitle': 'العلا للتشطيبات المتكاملة',
    'nav.brandSubtitle': 'AL-OLA GROUP',
    'nav.services': 'خدماتنا',
    'nav.packages': 'الباقات والأسعار',
    'nav.projects': 'مشاريعنا',
    'nav.about': 'من نحن',
    'nav.contact': 'تواصل معنا',
    'nav.estimator': 'حاسبة الأسعار التفاعلية',
    'nav.adminMode': 'لوحة تحكم طلبات العملاء',
    'nav.clientMode': 'العودة لصفحة العميل',
    'nav.switchLang': 'English',

    // Hero
    'hero.badge': 'أعمال التشطيبات المتكاملة والحلول المعمارية',
    'hero.title': 'مجموعة العلا للتشطيبات الديكورية والمعمارية المتكاملة',
    'hero.desc': 'نحقق لك حلم السكن الراقي بأعلى معايير الجودة والاتقان. تصميم وتنفيد وتشطيب كافة الوحدات السكنية والتجارية تحت سقف واحد.',
    'hero.calcBtn': 'احسب تكلفة تشطيبك الآن',
    'hero.viewWorkBtn': 'تصفح سابقة أعمالنا',
    'hero.boxTitle': 'تشطيب متكامل تحت سقف واحد',
    'hero.boxDesc': 'حلول هندسية متكاملة تشمل التصميم، السباكة، الكهرباء، الديكورات، والأثاث بالتقسيط الميسر.',

    // Stats
    'stats.projects': 'مشروع مكتمل',
    'stats.experience': 'سنوات من الخبرة',
    'stats.satisfaction': 'نسبة رضا العملاء',
    'stats.engineers': 'مهندس وفني متخصص',

    // Services
    'services.tag': 'خدمات متكاملة',
    'services.title': 'حلول هندسية وديكورية شاملة',
    'services.subtitle': 'نقدم مجموعة متكاملة من الخدمات المعمارية والديكورية لتسليم عقارك بأعلى معايير الفخامة والاتقان.',

    // Packages
    'packages.tag': 'باقات التشطيب',
    'packages.title': 'اختر الباقة المناسبة لعقارك',
    'packages.subtitle': 'باقات تشطيب مرنة تلبي كافة الاحتياجات والميزانيات مع ضمان كتابي شامل على جميع الأعمال.',
    'packages.browseItems': 'تصفح البنود بالصور',
    'packages.calcCost': 'احسب التكلفة',
    'packages.meterPrice': 'جنيه / م²',

    // About
    'about.tag': 'نبذة عن المجموعة',
    'about.title': 'خبرة تمتد لسنوات في عالم الديكور والمعمار',
    'about.desc': 'مجموعة العلا للتشطيبات هي شركة رائدة في مجال التصميم الداخلي والمعماري والتشطيبات المتكاملة، حيث نلتزم بأعلى معايير الجودة والشفافية والدقة في المواعيد.',

    // Portfolio
    'portfolio.tag': 'معرض الأعمال',
    'portfolio.title': 'مشاريع تفخر بها العلا',
    'portfolio.subtitle': 'استكشف نماذج من أعمالنا المنفذة بدقة وإتقان في مختلف أنحاء الجمهورية.',
    'portfolio.all': 'الكل',
    'portfolio.residential': 'سكني',
    'portfolio.commercial': 'تجاري',
    'portfolio.buildings': 'مباني وعماير',

    // Testimonials
    'testimonials.tag': 'آراء العملاء',
    'testimonials.title': 'ماذا يقول عملاؤنا عنا',

    // Contact
    'contact.tag': 'تواصل معنا',
    'contact.title': 'احصل على استشارة مجانية وعرض سعر',
    'contact.subtitle': 'تواصل مع فريقنا الهندسي لتحديد موعد المعاينة المجانية ومناقشة تفاصيل مشروعك.',
    'contact.name': 'الاسم بالكامل',
    'contact.phone': 'رقم الهاتف / الواتساب',
    'contact.projectType': 'نوع المشروع',
    'contact.area': 'المساحة (م²)',
    'contact.tier': 'باقة التشطيب المفضلة',
    'contact.details': 'تفاصيل إضافية أو ملاحظات',
    'contact.submit': 'إرسال طلب الاستشارة',

    // Estimator
    'estimator.title': 'حاسبة تشطيب العقارات التفاعلية',
    'estimator.desc': 'احسب التكلفة التقديرية لتشطيب شقتك أو فيلتك خلال ثوانٍ معدودة',

    // Footer
    'footer.rights': 'جميع الحقوق محفوظة © مجموعة العلا للتشطيبات المتكاملة',
    'footer.phone': 'الهاتف',
    'footer.address': 'العنوان',
  },
  en: {
    // Navbar
    'nav.brandTitle': 'Al-Ola Integrated Finishing',
    'nav.brandSubtitle': 'AL-OLA GROUP',
    'nav.services': 'Services',
    'nav.packages': 'Packages & Pricing',
    'nav.projects': 'Our Projects',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    'nav.estimator': 'Interactive Price Calculator',
    'nav.adminMode': 'Inquiries Admin Panel',
    'nav.clientMode': 'Back to Client View',
    'nav.switchLang': 'العربية',

    // Hero
    'hero.badge': 'Integrated Finishing & Architectural Solutions',
    'hero.title': 'Al-Ola Group for Integrated Decorative & Architectural Finishing',
    'hero.desc': 'We bring your dream residence to life with the highest standards of luxury and precision. Complete design, execution, and finishing under one roof.',
    'hero.calcBtn': 'Calculate Finishing Cost',
    'hero.viewWorkBtn': 'Browse Our Portfolio',
    'hero.boxTitle': 'Turnkey Finishing Under One Roof',
    'hero.boxDesc': 'Complete engineering solutions including design, plumbing, electrical, decor, and furniture with flexible installment options.',

    // Stats
    'stats.projects': 'Completed Projects',
    'stats.experience': 'Years of Experience',
    'stats.satisfaction': 'Client Satisfaction',
    'stats.engineers': 'Engineers & Techs',

    // Services
    'services.tag': 'Comprehensive Services',
    'services.title': 'Comprehensive Architectural & Decor Solutions',
    'services.subtitle': 'We offer a complete suite of architectural and interior design services delivering your property with perfection.',

    // Packages
    'packages.tag': 'Finishing Packages',
    'packages.title': 'Choose the Right Package for Your Property',
    'packages.subtitle': 'Flexible finishing packages tailored for every need and budget with a full written warranty on all works.',
    'packages.browseItems': 'Browse Items with Photos',
    'packages.calcCost': 'Calculate Cost',
    'packages.meterPrice': 'EGP / m²',

    // About
    'about.tag': 'About Al-Ola',
    'about.title': 'Years of Architectural and Decor Excellence',
    'about.desc': 'Al-Ola Group is a leader in interior design, architecture, and turnkey finishing, committed to quality, transparency, and timely delivery.',

    // Portfolio
    'portfolio.tag': 'Our Portfolio',
    'portfolio.title': 'Featured Projects by Al-Ola',
    'portfolio.subtitle': 'Explore samples of our completed work executed with precision across the region.',
    'portfolio.all': 'All',
    'portfolio.residential': 'Residential',
    'portfolio.commercial': 'Commercial',
    'portfolio.buildings': 'Buildings & Towers',

    // Testimonials
    'testimonials.tag': 'Client Reviews',
    'testimonials.title': 'What Our Clients Say',

    // Contact
    'contact.tag': 'Contact Us',
    'contact.title': 'Get a Free Consultation & Quote',
    'contact.subtitle': 'Reach out to our engineering team to schedule a free site inspection and discuss your project.',
    'contact.name': 'Full Name',
    'contact.phone': 'Phone / WhatsApp',
    'contact.projectType': 'Project Type',
    'contact.area': 'Area (m²)',
    'contact.tier': 'Preferred Package',
    'contact.details': 'Additional Notes / Details',
    'contact.submit': 'Submit Consultation Request',

    // Estimator
    'estimator.title': 'Interactive Finishing Cost Calculator',
    'estimator.desc': 'Calculate the estimated finishing cost for your apartment or villa in seconds',

    // Footer
    'footer.rights': 'All Rights Reserved © Al-Ola Integrated Finishing Group',
    'footer.phone': 'Phone',
    'footer.address': 'Address',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('alola_lang');
    return (saved === 'en' || saved === 'ar') ? saved : 'ar';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('alola_lang', newLang);
  };

  const toggleLang = () => {
    const next = lang === 'ar' ? 'en' : 'ar';
    setLang(next);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations['ar']?.[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        isAr: lang === 'ar',
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
