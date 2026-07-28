import React, { useState, useEffect } from 'react';
import { QuoteRequest } from '../types';

export type QualityTierType = 'economic' | 'vip' | 'altra_vip' | 'super_altra_vip' | 'luxury_1' | 'luxury_2' | 'luxury_3';

interface QuoteEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitRequest: (request: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>) => void;
  initialQualityTier?: QualityTierType;
}

export default function QuoteEstimator({ isOpen, onClose, onSubmitRequest, initialQualityTier }: QuoteEstimatorProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState<'residential' | 'commercial' | 'buildings'>('residential');
  const [areaSize, setAreaSize] = useState<number>(120);
  const [qualityTier, setQualityTier] = useState<QualityTierType>('economic');
  
  // Included services
  const [includeFlooring, setIncludeFlooring] = useState(true);
  const [includeCeilings, setIncludeCeilings] = useState(true);
  const [includeMEP, setIncludeMEP] = useState(true);
  const [includePainting, setIncludePainting] = useState(true);
  const [includeSmartHome, setIncludeSmartHome] = useState(false);
  const [additionalDetails, setAdditionalDetails] = useState('');

  const tierLabels: Record<QualityTierType, string> = {
    economic: 'الباقة الاقتصادية',
    vip: 'باقة VIP',
    altra_vip: 'باقة Altra VIP',
    super_altra_vip: 'باقة super Altra VIP',
    luxury_1: 'باقة Luxury 1 (شاملة الأثاث)',
    luxury_2: 'باقة Luxury 2 (شاملة الأثاث الفخم)',
    luxury_3: 'باقة Luxury 3 (الملوك والقصور)'
  };

  const tiersList = [
    {
      id: 'economic' as const,
      label: 'الباقة الاقتصادية',
      desc: 'سعر المتر: ٤,٠٠٠ ج.م. سلك سويدي، سباكة كاسيل، دهان سايبس، كرانيش جبس، سيراميك كليوباترا فرز أول.',
      badge: 'ميزانية ذكية',
      price: 4000,
      duration: '٤٥ - ٦٠ يوم عمل',
      image: 'https://i.postimg.cc/FYrkDz2m/r1.jpg'
    },
    {
      id: 'vip' as const,
      label: 'باقة VIP',
      desc: 'سعر المتر: ٥,٠٠٠ ج.م. جبس بورد بالكامل، ليد واسبوتات، سيراميك ليزر 60×60، تأسيس ساوند سيستم.',
      badge: 'الأكثر طلباً',
      price: 5000,
      duration: '٦٠ - ٧٥ يوم عمل',
      image: 'https://i.postimg.cc/YCgN2mRG/r2.jpg'
    },
    {
      id: 'altra_vip' as const,
      label: 'باقة Altra VIP',
      desc: 'سعر المتر: ٥,٥٠٠ ج.م. قاعدة دفن جروهي، دهان جوتن مغسول، بورسلين مستورد ورخام إمبرادور.',
      badge: 'متميزة جداً',
      price: 5500,
      duration: '٦٠ - ٩٠ يوم عمل',
      image: 'https://i.postimg.cc/y89h6SjS/r3.jpg'
    },
    {
      id: 'super_altra_vip' as const,
      label: 'باقة super Altra VIP',
      desc: 'سعر المتر: ٦,٥٠٠ ج.م. أسقف مغلقة بالكامل، شاور بوكس، ليد بروفايل 10م، مواسير فريون نحاس وديكورات.',
      badge: 'فوق الممتازة',
      price: 6500,
      duration: '٦٠ - ٩٠ يوم عمل',
      image: 'https://i.postimg.cc/bZyS3rKy/R5.jpg'
    },
    {
      id: 'luxury_1' as const,
      label: 'باقة Luxury 1',
      desc: 'سعر المتر: ١١,٠٠٠ ج.م. تشمل الأثاث والفرش لـ 4 غرف، مطبخ كلادينج 10م، رخام جلاكسي وديكورات فيوتك.',
      badge: 'كاملة بالفرش',
      price: 11000,
      duration: '٦٠ - ٩٠ يوم عمل',
      image: 'https://i.postimg.cc/0ymG5Jn5/L1.jpg'
    },
    {
      id: 'luxury_2' as const,
      label: 'باقة Luxury 2',
      desc: 'سعر المتر: ١٤,٠٠٠ ج.م. فرش كامل، مطبخ كلادينج، شاور سيكوريت عمولة، خلاطات تركي، فريون وجوتن.',
      badge: 'بلاتينية فخمة',
      price: 14000,
      duration: '٦٠ - ٩٠ يوم عمل',
      image: 'https://i.postimg.cc/g2Ryc6sJ/M2.jpg'
    },
    {
      id: 'luxury_3' as const,
      label: 'باقة Luxury 3',
      desc: 'سعر المتر: ١٦,٠٠٠ ج.م. باقة الملوك والقصور، مطبخ بولي لاك فخم 12م، 50م جبس إضافي، رخام جلاكسي 5م.',
      badge: 'الفخامة المطلقة',
      price: 16000,
      duration: '٦٠ - ٩٠ يوم عمل',
      image: 'https://i.postimg.cc/YCgN2mRG/r2.jpg'
    }
  ];

  // Sync initial quality tier when modal opens
  useEffect(() => {
    if (isOpen && initialQualityTier) {
      setQualityTier(initialQualityTier);
      
      // Auto toggle smart home checkbox for premium tiers
      if (initialQualityTier === 'luxury_3' || initialQualityTier === 'super_altra_vip') {
        setIncludeSmartHome(true);
      } else {
        setIncludeSmartHome(false);
      }
    }
  }, [isOpen, initialQualityTier]);

  // Form error states
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSubmittedRequest, setLastSubmittedRequest] = useState<any>(null);

  // Dynamic calculations
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState('');

  useEffect(() => {
    // 1. Get base rate per sqm from selected package
    const matchedTier = tiersList.find(t => t.id === qualityTier);
    const baseSqmCost = matchedTier ? matchedTier.price : 4000;

    // 2. Project type multiplier
    let typeMultiplier = 1.0;
    if (projectType === 'commercial') typeMultiplier = 1.20;
    if (projectType === 'buildings') typeMultiplier = 1.10;

    // 3. Optional adjustments based on customizations (e.g. smart home add-on if not already premium)
    let extraAddon = 0;
    if (includeSmartHome && !['super_altra_vip', 'luxury_3'].includes(qualityTier)) {
      extraAddon += 150; // extra cost per sqm for smart home if selected in non-smart packages
    }

    // 4. Calculate total estimated cost in EGP
    const totalSqmRate = (baseSqmCost * typeMultiplier) + extraAddon;
    const computedTotal = Math.round(totalSqmRate * areaSize);
    setPrice(computedTotal);

    // 5. Calculate timeline from matched package duration with area multiplier
    const baseDuration = matchedTier ? matchedTier.duration : '٤٥ يوم عمل';
    setDuration(baseDuration);
  }, [projectType, areaSize, qualityTier, includeFlooring, includeCeilings, includeMEP, includePainting, includeSmartHome]);

  const validateForm = () => {
    const newErrors: { fullName?: string; phone?: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'الرجاء إدخال الاسم الكامل';
    if (!phone.trim()) {
      newErrors.phone = 'الرجاء إدخال رقم الهاتف / واتساب';
    } else if (!/^[+0-9\s-]{7,15}$/.test(phone.trim())) {
      newErrors.phone = 'الرجاء إدخال رقم هاتف صحيح';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const downloadCustomerReport = (req: any) => {
    if (!req) return;
    const currentTierLabel = tierLabels[req.qualityTier as QualityTierType] || req.qualityTier;

    // Map checked services Ar
    const servicesMap: Record<string, string> = {
      flooring: '- تركيب الأرضيات والباركيه والرخام الفاخر',
      ceilings: '- تركيب الأسقف المعلقة والديكورات الجبسية والليد',
      mep: '- التمديدات الكهربائية والصحية المتكاملة وتأسيس النحاس',
      painting: '- الدهانات الراقية وأعمال ورق الحائط والديكورات',
      smarthome: '- أنظمة التحكم والمنزل الذكي (Smart Home)'
    };
    
    const servicesList = req.services.map((s: string) => servicesMap[s] || `- ${s}`);

    const reportContent = `================================================
العلا للتشطيبات المتكاملة - تقرير المقايسة التقديرية للعميل
Al-Ola Integration - Interactive Estimate & Design Specs
================================================

تاريخ التقديم والتوليد: ${new Date().toLocaleDateString('ar-EG')}

تفاصيل العميل والمشروع:
----------------------
اسم العميل: ${req.fullName}
رقم الهاتف: ${req.phone}
نوع المشروع: ${req.projectTypeAr}
المساحة الإجمالية للموقع: ${req.areaSize} متر مربع
مستوى جودة الباقة المحددة: ${currentTierLabel}

الخدمات والبنود المشمولة بالمقايسة:
----------------------------------
${servicesList.length > 0 ? servicesList.join('\n') : 'لم يتم تحديد بنود فرعية'}

التقدير المالي والزمني الأولي:
---------------------------
التكلفة الإجمالية المقدرة: ${req.estimatedCost.toLocaleString()} جنيه مصري
الجدول الزمني المتوقع للتسليم: ${req.estimatedDuration}

ملاحظات وتوجيهات هندسية من فريق العلا:
---------------------------------------
- هذه التسعيرة مبدئية استرشادية مبنية على المساحة والخامات المحددة من قبل العميل.
- يرجى تنسيق زيارة فنية مجانية لمعاينة الموقع وأخذ القياسات الدقيقة وتقديم كراسة الشروط والمقايسات النهائية.

ملاحظاتك الإضافية:
${req.details || 'لا توجد ملاحظات إضافية'}

------------------------------------------------
نشكرك على اختيارك العلا للتشطيبات المتكاملة
للتواصل والاتصال: +201003656083 | elbilikdarb@gmail.com
================================================`;

    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AlOla-Estimate-${req.fullName}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Map checked services
    const services: string[] = [];
    if (includeFlooring) services.push('flooring');
    if (includeCeilings) services.push('ceilings');
    if (includeMEP) services.push('mep');
    if (includePainting) services.push('painting');
    if (includeSmartHome) services.push('smarthome');

    // Arabic label for project type
    let typeAr = 'شقة سكنية';
    if (projectType === 'commercial') typeAr = 'محل تجاري';
    if (projectType === 'buildings') typeAr = 'مبنى كامل';

    const reqData = {
      fullName,
      phone,
      projectType,
      projectTypeAr: typeAr,
      areaSize,
      qualityTier,
      services,
      details: additionalDetails,
      estimatedCost: price,
      estimatedDuration: duration,
    };

    onSubmitRequest(reqData);
    setLastSubmittedRequest(reqData);

    setIsSuccess(true);
    setFullName('');
    setPhone('');
    setAdditionalDetails('');
    setIncludeSmartHome(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-onyx-black/60 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-2xl bg-[#fff8f0] h-full shadow-2xl flex flex-col z-10 animate-slideLeft border-r border-outline-variant/30 text-on-surface">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-outline-variant/30 bg-onyx-black text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-luxury-gold text-2xl">calculate</span>
            <div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">حاسبة الأسعار التفاعلية</h2>
              <p className="font-body text-xs text-secondary-fixed-dim">احصل على تقدير فوري لمشروعك بالجنيه المصري (ج.م)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors cursor-pointer border-0"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Drawer Body - Scrollable Form */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 font-body">
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 max-w-lg mx-auto">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center border border-green-300">
                <span className="material-symbols-outlined text-green-600 text-3xl font-bold">check</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-2xl text-primary">تم إرسال طلبك بنجاح!</h3>
                <p className="text-sm text-on-surface-variant">
                  لقد تم تسجيل تفاصيل التسعيرة التقديرية لمساحتك بنجاح. سيقوم مهندسو العلا بمراجعة طلبك والتواصل معك هاتفياً على الرقم <span className="font-bold text-primary">{phone}</span> لتنسيق معاينة مجانية على أرض الواقع بالتفصيل.
                </p>
              </div>

              {lastSubmittedRequest && (
                <div className="w-full bg-white rounded-xl border border-outline-variant/30 p-5 text-right space-y-3 shadow-xs">
                  <h4 className="font-heading font-bold text-sm text-primary border-b border-outline-variant/20 pb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-luxury-gold text-lg">receipt_long</span>
                    <span>ملخص المقايسة التقديرية الخاصة بك:</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-y-2 text-xs">
                    <div className="text-outline">نوع المشروع:</div>
                    <div className="font-bold text-on-surface">{lastSubmittedRequest.projectTypeAr}</div>
                    
                    <div className="text-outline">مساحة الموقع الإجمالية:</div>
                    <div className="font-bold text-on-surface font-worksans">{lastSubmittedRequest.areaSize} م²</div>
                    
                    <div className="text-outline">جودة المواد والتنفيذ:</div>
                    <div className="font-bold text-on-surface">
                      {tierLabels[lastSubmittedRequest.qualityTier as QualityTierType]}
                    </div>
                    
                    <div className="text-outline">التكلفة الإجمالية المقدرة:</div>
                    <div className="font-bold text-luxury-gold font-worksans text-sm">{lastSubmittedRequest.estimatedCost?.toLocaleString()} جنيه مصري</div>
                    
                    <div className="text-outline">الجدول الزمني للتسليم:</div>
                    <div className="font-bold text-on-surface">{lastSubmittedRequest.estimatedDuration}</div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={() => downloadCustomerReport(lastSubmittedRequest)}
                  className="flex-grow bg-primary hover:bg-primary/95 text-white py-3 px-5 rounded-lg font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border-0"
                >
                  <span className="material-symbols-outlined text-lg">download</span>
                  <span>تحميل كراسة المواصفات والتسعيرة (TXT)</span>
                </button>
                
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setLastSubmittedRequest(null);
                    onClose();
                  }}
                  className="bg-sand-neutral hover:bg-outline-variant/20 text-on-surface-variant py-3 px-6 rounded-lg font-bold text-xs sm:text-sm border border-outline-variant/40 transition-colors cursor-pointer"
                >
                  إغلاق النافذة
                </button>
              </div>

            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-8">
              
              {/* Section 1: Project Metadata */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-lg text-primary flex items-center gap-2 border-b border-outline-variant/20 pb-2">
                  <span className="text-luxury-gold">١.</span> نوع المشروع والمساحة
                </h3>
                
                {/* Project Type Tiles */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'residential', label: 'سكني', icon: 'home' },
                    { id: 'commercial', label: 'تجاري', icon: 'business' },
                    { id: 'buildings', label: 'مبنى كامل', icon: 'domain' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.id as any)}
                      className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center text-center gap-2 cursor-pointer border-0 ${
                        projectType === type.id
                          ? 'border-luxury-gold bg-primary-container/10 text-primary'
                          : 'border-outline-variant/30 hover:border-outline bg-white'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-2xl ${projectType === type.id ? 'text-luxury-gold' : 'text-outline'}`}>
                        {type.icon}
                      </span>
                      <span className="text-xs sm:text-sm font-bold">{type.label}</span>
                    </button>
                  ))}
                </div>

                {/* Area Size Slider */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-center text-sm font-semibold text-on-surface-variant">
                    <span>مساحة المشروع الإجمالية:</span>
                    <span className="text-luxury-gold text-base font-bold font-worksans tracking-wide">{areaSize} م²</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="1500"
                    step="10"
                    value={areaSize}
                    onChange={(e) => setAreaSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-outline-variant/30 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
                  />
                  <div className="flex justify-between text-[11px] text-outline">
                    <span>40 م² (شقة صغيرة)</span>
                    <span>500 م² (فيلا / متجر كبير)</span>
                    <span>1500 م² (مبنى / مجمع)</span>
                  </div>
                </div>
              </div>

              {/* Section 2: Quality Tier - The 7 Custom Packages */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-lg text-primary flex items-center gap-2 border-b border-outline-variant/20 pb-2">
                  <span className="text-luxury-gold">٢.</span> اختر الباقة المطلوبة للتنفيذ
                </h3>
                
                <div className="grid grid-cols-1 gap-3 max-h-[380px] overflow-y-auto pr-1">
                  {tiersList.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setQualityTier(tier.id)}
                      className={`p-3.5 rounded-xl border-2 text-right transition-all flex flex-col sm:flex-row items-stretch gap-3 bg-white relative cursor-pointer border-0 ${
                        qualityTier === tier.id
                          ? 'border-luxury-gold ring-1 ring-luxury-gold bg-amber-50/20'
                          : 'border-outline-variant/30 hover:border-outline'
                      }`}
                    >
                      {/* Image Preview Thumbnail */}
                      <div className="w-full sm:w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative bg-surface-container">
                        <img
                          src={tier.image}
                          alt={tier.label}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                        <span className={`absolute top-1 right-1 text-[9px] font-bold px-2 py-0.5 rounded-md shadow-xs ${
                          qualityTier === tier.id ? 'bg-luxury-gold text-white' : 'bg-onyx-black/75 text-white backdrop-blur-xs'
                        }`}>
                          {tier.badge}
                        </span>
                      </div>

                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex justify-between items-center mb-1 gap-2">
                            <span className="text-sm font-bold text-primary truncate">{tier.label}</span>
                            <span className="text-xs font-bold text-luxury-gold font-worksans whitespace-nowrap">
                              {tier.price.toLocaleString()} ج.م / م²
                            </span>
                          </div>
                          <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">
                            {tier.desc}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-outline-variant/10 text-[11px]">
                          <div className="flex items-center gap-1 font-bold text-luxury-gold">
                            <span className="material-symbols-outlined text-xs">payments</span>
                            <span>الضمان: ١٠ سنوات</span>
                          </div>
                          <div className="font-semibold text-outline">
                            المدة: {tier.duration}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 3: Inclusion Services */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-lg text-primary flex items-center gap-2 border-b border-outline-variant/20 pb-2">
                  <span className="text-luxury-gold">٣.</span> الأعمال والخدمات المطلوبة
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'flooring', label: 'أرضيات فاخرة (سيراميك / بورسلين / رخام)', checked: includeFlooring, setChecked: setIncludeFlooring, icon: 'grid_view' },
                    { id: 'ceilings', label: 'جبس وأسقف ديكورية مع إضاءة ليد مخفية', checked: includeCeilings, setChecked: setIncludeCeilings, icon: 'architecture' },
                    { id: 'mep', label: 'تمديدات كهربائية وسباكة (تأسيس كامل)', checked: includeMEP, setChecked: setIncludeMEP, icon: 'construction' },
                    { id: 'painting', label: 'أعمال الطلاء والدهانات وورق الحائط', checked: includePainting, setChecked: setIncludePainting, icon: 'format_paint' },
                    { id: 'smarthome', label: 'أنظمة التحكم والمنزل الذكي (Smart Home)', checked: includeSmartHome, setChecked: setIncludeSmartHome, icon: 'nest_detect' }
                  ].map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                        service.checked ? 'border-primary-container/50 bg-white shadow-sm' : 'border-outline-variant/20 hover:bg-white/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={service.checked}
                        onChange={(e) => service.setChecked(e.target.checked)}
                        className="rounded border-outline-variant text-luxury-gold focus:ring-luxury-gold w-4 h-4 cursor-pointer"
                      />
                      <span className="material-symbols-outlined text-primary text-lg flex-shrink-0">
                        {service.icon}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Section 4: Contact Details */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-lg text-primary flex items-center gap-2 border-b border-outline-variant/20 pb-2">
                  <span className="text-luxury-gold">٤.</span> بيانات الاتصال وملاحظاتك
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-on-surface-variant block">الاسم الكامل *</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="أدخل اسمك بالكامل"
                      className={`w-full bg-white border rounded-lg px-4 py-3 text-sm focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-outline-variant/60'
                      }`}
                    />
                    {errors.fullName && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-on-surface-variant block">الهاتف / واتساب *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+20 100 365 6083"
                      className={`w-full bg-white border rounded-lg px-4 py-3 text-sm focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors text-right ${
                        errors.phone ? 'border-red-500' : 'border-outline-variant/60'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <label className="text-xs font-bold text-on-surface-variant block">ملاحظات أو تفاصيل إضافية (اختياري)</label>
                  <textarea
                    value={additionalDetails}
                    onChange={(e) => setAdditionalDetails(e.target.value)}
                    placeholder="مثل: تاريخ البدء المفضل، متطلبات خاصة بالرخام، الطابق، إلخ..."
                    rows={3}
                    className="w-full bg-white border border-outline-variant/60 rounded-lg px-4 py-3 text-sm focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors"
                  />
                </div>
              </div>

            </form>
          )}
        </div>

        {/* Fixed Footer: Real-time estimate display & submit */}
        {!isSuccess && (
          <div className="p-6 border-t border-outline-variant/30 bg-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Live Pricing Breakdown */}
            <div className="flex gap-8 w-full md:w-auto font-body">
              <div>
                <span className="text-xs text-outline font-semibold block">التكلفة التقديرية:</span>
                <span className="text-2xl sm:text-3xl font-bold text-primary font-worksans tracking-wide flex items-baseline gap-1">
                  {price.toLocaleString()} <span className="text-xs font-bold text-on-surface-variant">جنيه مصري</span>
                </span>
              </div>
              
              <div className="border-r border-outline-variant/45 pr-6">
                <span className="text-xs text-outline font-semibold block">الجدول الزمني المقدر:</span>
                <span className="text-base sm:text-lg font-bold text-on-surface">
                  {duration}
                </span>
              </div>
            </div>

            {/* Submission Button */}
            <div className="w-full md:w-auto">
              <button
                type="button"
                onClick={handleFormSubmit}
                className="w-full md:w-64 bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end hover:from-gold-gradient-end hover:to-gold-gradient-start text-white py-3.5 px-6 rounded-lg font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-0"
              >
                <span className="material-symbols-outlined text-sm">send</span>
                <span>إرسال طلب المعاينة مجاناً</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
