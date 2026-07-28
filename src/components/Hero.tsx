import logoImg from '../assets/images/alola_group_logo_1784447539957.jpg';
import heroBg from '../assets/images/regenerated_image_1785067891285.jpg';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenEstimator: () => void;
  onViewWork: () => void;
}

export default function Hero({ onOpenEstimator, onViewWork }: HeroProps) {
  const { isAr, t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image and Overlays with maximum clarity (no watermark feel) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/25 z-10" />
        <div
          className="w-full h-full bg-cover bg-center scale-105 animate-[pulse_12s_ease-in-out_infinite]"
          style={{
            backgroundImage: `url(${heroBg})`
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 w-full py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Fold */}
          <div className="lg:col-span-8 text-white space-y-6 md:space-y-8 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
            
            <div className={`inline-flex items-center gap-2 ${isAr ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-luxury-gold`}>
              <span className="font-body text-xs md:text-sm font-semibold text-luxury-gold tracking-widest uppercase drop-shadow-md">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {isAr ? (
                <>
                  من الجدران الخام <br />
                  <span className="luxury-gradient-text">إلى مسكن جاهز للسكن.</span>
                </>
              ) : (
                <>
                  From Raw Walls <br />
                  <span className="luxury-gradient-text">To a Turnkey Ready Home.</span>
                </>
              )}
            </h1>

            <p className="font-body text-base md:text-lg text-surface-container-low max-w-xl leading-relaxed drop-shadow-lg">
              {t('hero.desc')}
            </p>

            <div className="flex flex-wrap gap-4 pt-2 font-body">
              <button
                onClick={onOpenEstimator}
                className="bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end hover:from-gold-gradient-end hover:to-gold-gradient-start text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm shadow-2xl hover:shadow-luxury-gold/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                {t('hero.calcBtn')}
              </button>
              <button
                onClick={onViewWork}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm hover:bg-white/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>{t('hero.viewWorkBtn')}</span>
                <span className={`material-symbols-outlined text-sm transform ${isAr ? 'scale-x-[-1]' : ''}`}>
                  {isAr ? 'arrow_back' : 'arrow_forward'}
                </span>
              </button>
            </div>
          </div>

          {/* Floating Feature Card */}
          <div className="lg:col-span-4 justify-self-center lg:justify-self-end w-full max-w-lg space-y-6">
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors duration-300">
              <h3 className="font-heading font-bold text-2xl text-primary mb-4">
                {t('hero.boxTitle')}
              </h3>
              <ul className="space-y-3 text-on-surface-variant font-body text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-luxury-gold flex-shrink-0" />
                  <span className="font-semibold text-primary">{isAr ? 'شقق سكنية وفلل راقية' : 'Luxury Villas & Apartments'}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-luxury-gold flex-shrink-0" />
                  <span className="font-semibold text-primary">{isAr ? 'محلات تجارية ومعارض' : 'Commercial Shops & Showrooms'}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-luxury-gold flex-shrink-0" />
                  <span className="font-semibold text-primary">{isAr ? 'مبانٍ وأبراج كاملة' : 'Complete Buildings & Towers'}</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-outline-variant/30 flex justify-between items-center">
                <span className="font-body text-xs text-outline font-medium">{isAr ? 'تأسست عام 2021' : 'Established 2021'}</span>
                <span className="font-heading text-base text-primary font-bold">AL-OLA Integration</span>
              </div>
            </div>
          </div>

          {/* Full Width Rectangle Banner with Logo Image filling it completely */}
          <div className="lg:col-span-12 w-full pt-4">
            <div className="w-full bg-white/95 backdrop-blur-md p-0 rounded-2xl md:rounded-3xl border-2 border-luxury-gold/50 shadow-2xl overflow-hidden flex justify-center items-center">
              <img
                src={logoImg}
                alt="شعار مجموعة العلا للتشطيبات"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl md:rounded-3xl hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
