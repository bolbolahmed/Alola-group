import React, { useState } from 'react';
import { QuoteRequest } from '../types';

interface ContactFormProps {
  onSubmitRequest: (request: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>) => void;
}

export default function ContactForm({ onSubmitRequest }: ContactFormProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('شقة سكنية');
  const [details, setDetails] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: { fullName?: string; phone?: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'الرجاء إدخال الاسم بالكامل';
    if (!phone.trim()) {
      newErrors.phone = 'الرجاء إدخال رقم الهاتف أو واتساب';
    } else if (!/^[+0-9\s-]{7,15}$/.test(phone.trim())) {
      newErrors.phone = 'الرجاء إدخال رقم هاتف صحيح';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Map selected type text to category key
    let typeKey = 'residential';
    if (projectType === 'محل تجاري') typeKey = 'commercial';
    if (projectType === 'مبنى كامل') typeKey = 'buildings';
    if (projectType === 'أخرى') typeKey = 'other';

    onSubmitRequest({
      fullName,
      phone,
      projectType: typeKey,
      projectTypeAr: projectType,
      areaSize: 180, // Default average for form submissions
      qualityTier: 'vip', // Default average
      services: ['painting'],
      details: details,
      estimatedCost: 576000, // Estimated value in EGP (180 * 3200 for VIP)
      estimatedDuration: '٤٥ - ٦٠ يوم عمل'
    });

    setIsSuccess(true);
    setFullName('');
    setPhone('');
    setProjectType('شقة سكنية');
    setDetails('');

    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <section id="contact-section" className="py-20 bg-[#fff8f0] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Shadow Card Wrapper */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-outline-variant/20">
          
          {/* Left Column: Contact Cards Info (Onyx Black, 2 Columns) */}
          <div className="lg:col-span-2 bg-onyx-black p-8 sm:p-12 text-white space-y-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-luxury-gold/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10 font-body">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
                ابدأ مشروعك اليوم.
              </h2>
              <p className="text-sm text-secondary-fixed-dim leading-relaxed">
                أخبرنا عن مساحتك وسنعدّ لك عرض سعر مفصلاً ومخططاً زمنياً أولياً خلال 24 ساعة فقط — مجاناً وبدون أي التزام عليك.
              </p>
            </div>

            {/* Direct Channels list */}
            <div className="space-y-6 relative z-10 font-body">
              
              <a 
                href="https://wa.me/201003656083"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer hover:opacity-95"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/5 group-hover:bg-luxury-gold transition-colors duration-300">
                  <span className="material-symbols-outlined text-luxury-gold group-hover:text-white">call</span>
                </div>
                <div>
                  <p className="text-[10px] text-outline font-semibold uppercase leading-none">اتصل / واتساب</p>
                  <p className="text-sm sm:text-base font-bold mt-1 text-white font-worksans tracking-wide hover:text-luxury-gold transition-colors">+201003656083</p>
                </div>
              </a>

              <a 
                href="mailto:elbilikdarb@gmail.com"
                className="flex items-center gap-4 group cursor-pointer hover:opacity-95"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/5 group-hover:bg-luxury-gold transition-colors duration-300">
                  <span className="material-symbols-outlined text-luxury-gold group-hover:text-white">mail</span>
                </div>
                <div>
                  <p className="text-[10px] text-outline font-semibold uppercase leading-none">البريد الإلكتروني</p>
                  <p className="text-sm sm:text-base font-bold mt-1 text-white font-worksans tracking-wide hover:text-luxury-gold transition-colors">elbilikdarb@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://maps.google.com/?q=شارع+مصطفى+كامل،+السيوف،+أبراج+المعتز،+الإسكندرية"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer hover:opacity-95"
                title="افتح الموقع في خرائط جوجل"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/5 group-hover:bg-luxury-gold transition-colors duration-300">
                  <span className="material-symbols-outlined text-luxury-gold group-hover:text-white">location_on</span>
                </div>
                <div>
                  <p className="text-[10px] text-outline font-semibold uppercase leading-none">المكتب الرئيسي</p>
                  <p className="text-xs sm:text-sm font-bold mt-1 text-white leading-relaxed hover:text-luxury-gold transition-colors">شارع مصطفى كامل، السيوف، أبراج المعتز، برج 3، ممر مستشفى دار العلاج، الإسكندرية، مصر</p>
                </div>
              </a>

            </div>

            {/* Google Maps Button */}
            <div className="pt-2 relative z-10 font-body">
              <a
                href="https://maps.google.com/?q=شارع+مصطفى+كامل،+السيوف،+أبراج+المعتز،+الإسكندرية"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/5 hover:bg-luxury-gold/25 border border-white/10 hover:border-luxury-gold text-white text-xs font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group/map"
              >
                <span className="material-symbols-outlined text-sm text-luxury-gold group-hover/map:text-white transition-colors">map</span>
                <span>افتح موقعنا على خرائط جوجل 🧭</span>
              </a>
            </div>

            {/* Response Tracker footer */}
            <div className="pt-6 border-t border-white/10 relative z-10 font-body">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <p className="text-xs text-secondary-fixed-dim font-bold">مستشارونا متواجدون للرد خلال 24 ساعة</p>
              </div>
            </div>

          </div>

          {/* Right Column: Free Quote Request Form (3 Columns) */}
          <div className="lg:col-span-3 p-8 sm:p-12 bg-white flex flex-col justify-center">
            <h3 className="font-heading font-bold text-2xl text-primary mb-8 text-center lg:text-right">
              طلب عرض سعر مجاني
            </h3>

            {isSuccess ? (
              <div className="text-center py-12 space-y-4 font-body">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center border border-green-200 mx-auto">
                  <span className="material-symbols-outlined text-green-500 text-2xl font-bold">verified</span>
                </div>
                <h4 className="font-heading font-bold text-xl text-primary">نشكرك على تواصلك معنا!</h4>
                <p className="text-xs sm:text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                  لقد تلقينا طلب المعايرة والتسعير بنجاح. سيقوم الفريق الهندسي بالاتصال بك هاتفياً وتنسيق موعد في أسرع وقت.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-body">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-xs sm:text-sm font-semibold text-on-surface-variant">الاسم الكامل *</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="أدخل اسمك بالكامل"
                      className={`w-full bg-sand-neutral border-0 border-b-2 focus:ring-0 rounded-t-lg px-4 py-3 text-sm focus:border-luxury-gold transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-transparent'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-[10px] font-bold mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <label className="text-xs sm:text-sm font-semibold text-on-surface-variant">الهاتف / واتساب *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+20 100 365 6083"
                      className={`w-full bg-sand-neutral border-0 border-b-2 focus:ring-0 rounded-t-lg px-4 py-3 text-sm focus:border-luxury-gold transition-colors text-right ${
                        errors.phone ? 'border-red-500' : 'border-transparent'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[10px] font-bold mt-1">{errors.phone}</p>
                    )}
                  </div>

                </div>

                {/* Project Type Select */}
                <div className="space-y-1">
                  <label className="text-xs sm:text-sm font-semibold text-on-surface-variant">نوع المشروع *</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-sand-neutral border-0 border-b-2 border-transparent focus:border-luxury-gold focus:ring-0 rounded-t-lg px-4 py-3 text-sm transition-colors cursor-pointer"
                  >
                    <option value="شقة سكنية">شقة سكنية</option>
                    <option value="محل تجاري">محل تجاري</option>
                    <option value="مبنى كامل">مبنى كامل</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                </div>

                {/* Details Textarea */}
                <div className="space-y-1">
                  <label className="text-xs sm:text-sm font-semibold text-on-surface-variant">تفاصيل المشروع وملاحظاتك</label>
                  <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="أخبرنا باختصار عن متطلبات مساحتك، تشطيب كلي أم جزئي، موعد البدء المفضل..."
                    rows={4}
                    className="w-full bg-sand-neutral border-0 border-b-2 border-transparent focus:border-luxury-gold focus:ring-0 rounded-t-lg px-4 py-3 text-sm transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end hover:from-gold-gradient-end hover:to-gold-gradient-start text-white py-4 rounded-lg font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">send</span>
                  <span>إرسال طلب عروض الأسعار مجاناً</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
