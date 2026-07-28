import { useState } from 'react';

export type QualityTierType = 'economic' | 'vip' | 'altra_vip' | 'super_altra_vip' | 'luxury_1' | 'luxury_2' | 'luxury_3';

export type SpecTabType = 'interior' | 'ceilings' | 'paints' | 'plumbing' | 'kitchens' | 'alumetal' | 'furniture';

interface SpecDetail {
  title: string;
  desc: string;
  image: string;
  brand: string;
  isIncluded: boolean;
}

export interface PackageDetail {
  id: QualityTierType;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  priceRate: string;
  duration: string;
  warranty: string;
  image: string;
  gallery: string[];
  popular?: boolean;
  specs: Array<{ category: string; details: string }>;
}

export const ILLUSTRATED_SPECS_MAP: Record<QualityTierType, Record<SpecTabType, SpecDetail>> = {
  economic: {
    interior: {
      title: 'التشطيب الداخلي والأرضيات',
      desc: 'صالة مريحة وتشطيب أرضيات بسيراميك كليوباترا فرز أول بمقاسات عملية. توزيع منسق للألوان والإنارة يمنح إحساساً بالاتساع والمظهر العصري النظيف بأقل تكلفة مناسبة للميزانيات الذكية.',
      image: 'https://i.postimg.cc/FYrkDz2m/r1.jpg',
      brand: 'سيراميك كليوباترا فرز أول - جودة تثبيت معتمدة',
      isIncluded: true
    },
    ceilings: {
      title: 'تفاصيل الأسقف والجبس',
      desc: 'كرانيش جبسية كلاسيكية ناعمة للغرف والممرات، مع بيت نور مخصص وموزع بعناية للريسبشن لإضفاء لمسة جمالية أنيقة في منطقة الاستقبال لضيوفك.',
      image: 'https://i.postimg.cc/jdBQrhHD/g1.jpg',
      brand: 'مصيص وجبس بلدي ممتاز - تشطيب أملس خالٍ من التموجات',
      isIncluded: true
    },
    paints: {
      title: 'أعمال الدهانات والطلاء',
      desc: 'تأسيس حوائط متكامل يشمل وش سيلز مائي، عدد 2 سكينة معجون أسمنتي لمقاومة الرطوبة، وسكينة معجون جاهز للتنعيم، تليها بطانة وتلقيطة ثم وش دهان نهائي ممتاز من شركة سايبس لضمان ثبات اللون.',
      image: 'https://i.postimg.cc/0ymG5Jn5/L1.jpg',
      brand: 'دهانات سايبس (Sipes Paint) المعتمدة',
      isIncluded: true
    },
    plumbing: {
      title: 'أعمال السباكة والصحي',
      desc: 'تأسيس متكامل للمطبخ والحمام بمواسير صرف كاسيل ألماني وتغذية بضمان 10 سنوات كاملة، مع عزل كامل للحمام على البارد لمنع تسريب المياه نهائياً لحفظ سلامة المبنى.',
      image: 'https://i.postimg.cc/Gh6J1jFR/b1.jpg',
      brand: 'صرف Castle ألماني - تغذية BR بضمان 10 سنوات',
      isIncluded: true
    },
    kitchens: {
      title: 'تأسيس وتجهيزات المطبخ',
      desc: 'توفير التمديدات الكهربائية اللازمة لكافة الأجهزة وتجهيز مخارج الصرف والتغذية بمواقع مدروسة تناسب المطابخ العصرية لتنفيذ مطبخك بكل مرونة وسهولة لاحقاً.',
      image: 'https://i.postimg.cc/rKCt1xYq/k1.jpg',
      brand: 'توزيع نقاط MEP هندسي بنسب معيارية',
      isIncluded: true
    },
    alumetal: {
      title: 'الألوميتال والنوافذ',
      desc: 'شبابيك ألوميتال عملية للمطبخ والحمام بقطاع صغير PS مميز، مقاوم للغبار والماء والرياح وبزجاج مصنفر لحفظ الخصوصية التامة للعائلة.',
      image: 'https://i.postimg.cc/fT1jhvcD/1111.jpg',
      brand: 'قطاعات ألومنيوم PS الصغيرة المعتمدة',
      isIncluded: true
    },
    furniture: {
      title: 'الأثاث والفرش',
      desc: 'الباقة الاقتصادية تركز على تقديم تشطيب هندسي متميز وتأسيس قوي للبنية التحتية والمواد، وهي غير شاملة لبنود الأثاث أو الفرش الخشبي لتلائم الميزانية المحدودة.',
      image: 'https://i.postimg.cc/t4PdRVkg/M1.jpg',
      brand: 'غير شاملة (متاحة في باقات Luxury 1, 2, 3 بالكامل)',
      isIncluded: false
    }
  },
  vip: {
    interior: {
      title: 'التشطيب الداخلي والأرضيات',
      desc: 'أرضيات الريسبشن والممرات والغرف بالكامل من السيراميك الفاخر قطع ليزر مقاس 60×60، يعطيك مظهراً متكاملاً وأنيقاً مع إدخال جانب ديكور ريسبشن راقٍ من ورق حائط أو دهان ديكوري فخم.',
      image: 'https://i.postimg.cc/YCgN2mRG/r2.jpg',
      brand: 'سيراميك قطع ليزر فرز أول (كليوباترا أو رويال)',
      isIncluded: true
    },
    ceilings: {
      title: 'تفاصيل الأسقف والجبس بورد',
      desc: 'تنفيذ أسقف معلقة من الجبس بورد الفخم بالكامل للشقة ببيوت نور أنيقة، شاملة الليد المدمج والاسبوتات الموزعة هندسياً لإضاءة متوازنة ومريحة جداً للعين.',
      image: 'https://i.postimg.cc/xTBySPvk/g2.jpg',
      brand: 'ألواح كناوف (Knauf) مع إكسسوارات صاج محملة وإنارة ليد مدمجة',
      isIncluded: true
    },
    paints: {
      title: 'أعمال الدهانات والطلاء',
      desc: 'تأسيس حوائط دقيق مع 3 سكاكين معجون جاهز وأجود البطانات والدهانات النهائية من شركة سايبس لضمان ملمس ناعم وعمر افتراضي طويل مع جانب ديكوري خلفية لغرفة النوم الرئيسية.',
      image: 'https://i.postimg.cc/K1G3JjCd/L2.jpg',
      brand: 'دهانات سايبس مع خلفيات ديكورية متميزة',
      isIncluded: true
    },
    plumbing: {
      title: 'أعمال السباكة والصحي',
      desc: 'تأسيس سباكة فائق بمواد BR المعتمدة ومواسير كاسيل الألمانية، مع عزل كامل للحمام بالكامل وتجهيز مخرج صرف وتغذية لشاور حديث مريح ووحدة مغسلة معلقة.',
      image: 'https://i.postimg.cc/BQRcGCTq/b2.jpg',
      brand: 'صرف Castle ألماني - تغذية BR بضمان 10 سنوات معتمدة',
      isIncluded: true
    },
    kitchens: {
      title: 'تأسيس وتجهيزات المطبخ',
      desc: 'توزيع نقاط الطاقة الكهربائية والسباكة والغاز بشكل مدروس ومحسوب هندسياً لجميع الأجهزة، ليتيح لك تركيب المطبخ المناسب لك لاحقاً بدون أي تعديلات أو تكسير.',
      image: 'https://i.postimg.cc/4NjbT16h/k2.jpg',
      brand: 'تخطيط نقاط MEP مع لوحة توزيع إلكترونية مستقلة',
      isIncluded: true
    },
    alumetal: {
      title: 'الألوميتال والنوافذ',
      desc: 'شبابيك المطبخ والحمام قطاع صغير PS محكم الإغلاق، مع توريد وتركيب 5 أمتار نوافذ ألوميتال زجاج عازل للصوت والأتربة للغرف والتراس.',
      image: 'https://i.postimg.cc/D8dbrLpN/2222.jpg',
      brand: 'قطاع PS ألوميتال ممتاز وزجاج عازل',
      isIncluded: true
    },
    furniture: {
      title: 'الأثاث والفرش',
      desc: 'الباقة تشتمل على تأسيس متكامل ومخرجات كهربائية للساوند سيستم والأنظمة الذكية، ويمكن إضافة باقة الفرش الملكي عند الطلب.',
      image: 'https://i.postimg.cc/g2Ryc6sJ/M2.jpg',
      brand: 'تأسيس كامل جاهز لاستقبال الفرش',
      isIncluded: false
    }
  },
  altra_vip: {
    interior: {
      title: 'التشطيب الداخلي والأرضيات الماسية',
      desc: 'الريسبشن والممرات والمطابخ بورسلين مستورد فاخر مقاسات كبيرة أو رخام طبيعي إمبرادور، مع سيراميك باركيه للغرف وتطعيمات رخامية للمداخل والعتبات.',
      image: 'https://i.postimg.cc/y89h6SjS/r3.jpg',
      brand: 'بورسلين ورخام إمبرادور طبيعي معالج',
      isIncluded: true
    },
    ceilings: {
      title: 'تفاصيل الأسقف والجبس بورد',
      desc: 'أسقف معلقة بالكامل بتصاميم مودرن هندسية مع دمج بيت نور ليد بروفايل وأجهزة سبوت لايت جودة عالية خافضة للإبهار.',
      image: 'https://i.postimg.cc/NfZ7wx69/g3.jpg',
      brand: 'أسقف كناوف الألمانية مع شرائط ليد بروفايل',
      isIncluded: true
    },
    paints: {
      title: 'الدهانات والطلاء الفاخر',
      desc: 'دهانات جوتن الحريرية فينوماستيك القابلة للغسل، مع تجاليد جدران خشبية أو بديل رخام Super Marble وجوانب ديكورية قطيفة فيلفيت للريسبشن والماستر.',
      image: 'https://i.postimg.cc/1360RNBf/R4.jpg',
      brand: 'طلاء جوتن فينوماستيك + تجاليد بديل رخام وخشب',
      isIncluded: true
    },
    plumbing: {
      title: 'أعمال السباكة والصحي المتقدمة',
      desc: 'تأسيس طقم صحي بقاعدة دفن جروهي الألمانية وشاور بوكس زجاجي وعزل مائي سيكا 1.7 مع طقم خلاطات وشاور سيستم إيطالي.',
      image: 'https://i.postimg.cc/SNH7pG6S/b3.jpg',
      brand: 'جروهي ألماني - عزل سيكا 1.7 - شاور سيستم إيطالي',
      isIncluded: true
    },
    kitchens: {
      title: 'تجهيزات المطبخ الحديثة',
      desc: 'تجهيز كامل للمطبخ بتأسيس تغذية وصرف مستقل لغسالة الأطباق والملابس مع مخرج شفاط ومواسير فريون نحاس وتأسيس ساوند سيستم.',
      image: 'https://i.postimg.cc/VdBbqnHf/k3.jpg',
      brand: 'تأسيس MEP كامل + ساوند سيستم مدمج',
      isIncluded: true
    },
    alumetal: {
      title: 'الألوميتال والنوافذ',
      desc: 'قطاع ألوميتال جامبو أو PS كبير مزدوج مع زجاج دبل عازل تماماً للصوت والحرارة والأتربة.',
      image: 'https://i.postimg.cc/9rtqdZg8/3333.jpg',
      brand: 'قطاع PS كبير مع زجاج دبل عازل',
      isIncluded: true
    },
    furniture: {
      title: 'الأثاث والفرش',
      desc: 'تشمل تأسيس شبكات الصوت والترفيه والتحكم الإلكتروني بالكامل مجهزة لاستقبال الفرش.',
      image: 'https://i.postimg.cc/t4PdRVkg/M1.jpg',
      brand: 'جاهزية كاملة للفرش الفاخر',
      isIncluded: false
    }
  },
  super_altra_vip: {
    interior: {
      title: 'التشطيب الداخلي والأرضيات الفائقة',
      desc: 'أرضيات ريسبشن وممرات بورسلين ليزر فاخر 120×60 مع سيراميك باركيه للغرف ومعابر رخام إمبراطور وجلاكسي فاخر.',
      image: 'https://i.postimg.cc/bZyS3rKy/R5.jpg',
      brand: 'بورسلين ليزر 120×60 ورخام جلاكسي',
      isIncluded: true
    },
    ceilings: {
      title: 'تفاصيل الأسقف والجبس بورد',
      desc: 'أسقف جبس بورد مغلقة بالكامل بجميع الفراغات مع 10 أمتار ليد بروفايل حديث وتأسيس مواسير فريون نحاس كونسيلد.',
      image: 'https://i.postimg.cc/jdBQrhHD/g1.jpg',
      brand: 'أسقف مغلقة بالكامل مع ليد بروفايل وفريون نحاس',
      isIncluded: true
    },
    paints: {
      title: 'الدهانات والطلاء الفاخر',
      desc: 'دهانات جوتن فينوماستيك الأصلي مع تجليد بديل رخام super marble وتجاليد بديل خشب وبانوهات فيوتك وورق حائط 3D.',
      image: 'https://i.postimg.cc/yD13vxwY/R6.jpg',
      brand: 'دهانات جوتن العالمية + تجاليد 3D وبديل رخام',
      isIncluded: true
    },
    plumbing: {
      title: 'أعمال السباكة والصحي',
      desc: 'قاعدة دفن معلقة جروهي مع كابينة شاور زجاجية سيكوريت مغلقة وعزل سيكا 1.7 وشاور سيستم إيطالي مع نواكيل كاملة.',
      image: 'https://i.postimg.cc/2VFBQh9P/b4.jpg',
      brand: 'جروهي ألماني + كابينة شاور زجاج سيكوريت',
      isIncluded: true
    },
    kitchens: {
      title: 'تجهيزات المطبخ الشاملة',
      desc: 'تجهيز كامل للمطابخ الحديثة مع رخام جلاكسي فاخر وتأسيس شبكة ساوند سيستم صوتية متكاملة بالشقة بالكامل.',
      image: 'https://i.postimg.cc/rKCt1xYq/k1.jpg',
      brand: 'رخام جلاكسي + ساوند سيستم مدمج',
      isIncluded: true
    },
    alumetal: {
      title: 'الألوميتال والنوافذ',
      desc: 'قطاع صغير PS محكم الغلق مع زجاج سنجل عازل للأتربة والضوضاء.',
      image: 'https://i.postimg.cc/sDb9RJYy/4444.jpg',
      brand: 'قطاع PS عالي المتانة بطلاء إلكتروستاتيك',
      isIncluded: true
    },
    furniture: {
      title: 'الأثاث والفرش',
      desc: 'تأسيس هندسي كامل جاهز لاستقبال الفرش، ويمكن إضافة الأثاث بالكامل عند ترقية الباقة لـ Luxury.',
      image: 'https://i.postimg.cc/g2Ryc6sJ/M2.jpg',
      brand: 'تأسيس متكامل مجهز للفرش',
      isIncluded: false
    }
  },
  luxury_1: {
    interior: {
      title: 'التشطيب الداخلي والأرضيات الشاملة',
      desc: 'أرضيات سيراميك ليزر فاخر 60×60 للشقة بالكامل مع رخام جلاكسي للمعابر والمطابخ والفرش الكامل لـ 4 غرف نوم.',
      image: 'https://i.postimg.cc/0ymG5Jn5/L1.jpg',
      brand: 'سيراميك ليزر 60×60 ورخام جلاكسي مع الفرش',
      isIncluded: true
    },
    ceilings: {
      title: 'تفاصيل الأسقف والجبس بورد',
      desc: 'أسقف جبس بورد معلقة بالكامل للشقة بإنارات ليد واسبوتات راقية.',
      image: 'https://i.postimg.cc/xTBySPvk/g2.jpg',
      brand: 'أسقف جبس بورد معلقة مع إنارة كاملة',
      isIncluded: true
    },
    paints: {
      title: 'الدهانات والطلاء الفاخر',
      desc: 'طلاء جوتن/سايبس فاخر مع 3 جوانب ديكور ريسبشن وماستر ورق حائط 3D وبانوهات فيوتك.',
      image: 'https://i.postimg.cc/K1G3JjCd/L2.jpg',
      brand: 'دهانات ممتازة + 3 جوانب ديكور ورق حائط 3D',
      isIncluded: true
    },
    plumbing: {
      title: 'السباكة والصحي المتقدم',
      desc: 'قاعدة دفن معلقة جروهي مع كابينة شاور زجاجية وتأسيس عزل سيكا 1.7 وتغذية BR بضمان 10 سنوات.',
      image: 'https://i.postimg.cc/crM8Rwkp/b5.jpg',
      brand: 'جروهي + كابينة شاور وعزل سيكا 1.7',
      isIncluded: true
    },
    kitchens: {
      title: 'المطبخ والأنظمة المدمجة',
      desc: 'تنفيذ مطبخ كلادينج فاخر بطول 10 أمتار مع تأسيس ساوند سيستم بالشقة بالكامل.',
      image: 'https://i.postimg.cc/4NjbT16h/k2.jpg',
      brand: 'مطبخ كلادينج 10م + ساوند سيستم كامل',
      isIncluded: true
    },
    alumetal: {
      title: 'الألوميتال والنوافذ',
      desc: 'عمل 5 أمتار ألوميتال نوافذ داخلية قطاع PS زجاج عازل.',
      image: 'https://i.postimg.cc/xTBySPvC/BO1.jpg',
      brand: 'قطاع PS ألوميتال مع زجاج عازل',
      isIncluded: true
    },
    furniture: {
      title: 'الأثاث والفرش الفاخر الكامل',
      desc: 'فرش وأثاث كامل 4 غرف (نوم ماستر، سفرة، جزامة، أطفال، ركنة/انتريه، وحدة شاشة) مع إضافة غرفة عند تجاوز 120م².',
      image: 'https://i.postimg.cc/t4PdRVkg/M1.jpg',
      brand: 'فرش متكامل 4 غرف + غرفة مجاناً للمساحات > 120م²',
      isIncluded: true
    }
  },
  luxury_2: {
    interior: {
      title: 'التشطيب الداخلي والأرضيات الفخمة',
      desc: 'الريسبشن والممرات بورسلين ليزر فاخر بالكامل، أرضيات الغرف سيراميك باركيه، رخام جلاكسي، وفرش كامل 4 غرف نوم.',
      image: 'https://i.postimg.cc/FYrkDz2m/r1.jpg',
      brand: 'بورسلين ليزر + رخام جلاكسي + أثاث فاخر',
      isIncluded: true
    },
    ceilings: {
      title: 'تفاصيل الأسقف والجبس بورد',
      desc: 'أسقف جبس بورد معلقة بالكامل بمستويات متعددة وإضاءات ليد بروفايل واسبوتات.',
      image: 'https://i.postimg.cc/NfZ7wx69/g3.jpg',
      brand: 'أسقف كناوف متعددة المستويات',
      isIncluded: true
    },
    paints: {
      title: 'الدهانات والطلاء الفاخر',
      desc: 'طلاء نهائي جوتن فينوماستيك قابل للغسيل مع تجاليد خشب طبيعي وحجر وورق حائط 3D.',
      image: 'https://i.postimg.cc/1360RNBf/R4.jpg',
      brand: 'دهانات جوتن + تجاليد خشب وحجر ورخام',
      isIncluded: true
    },
    plumbing: {
      title: 'السباكة والصحي المتقدم',
      desc: 'قاعدة دفن جروهي، شاور سيستم متطور، وحدة حمام عمولة وكابينة سيكوريت عمولة.',
      image: 'https://i.postimg.cc/pX3YtBfd/b6.jpg',
      brand: 'جروهي + وحدة حمام عمولة + سيكوريت',
      isIncluded: true
    },
    kitchens: {
      title: 'المطبخ والأنظمة المدمجة',
      desc: 'مطبخ كلادينج فخم بطول 10 أمتار وتأسيس ساوند سيستم صوتي مدمج بالكامل.',
      image: 'https://i.postimg.cc/VdBbqnHf/k3.jpg',
      brand: 'مطبخ كلادينج 10م + ساوند سيستم كامل',
      isIncluded: true
    },
    alumetal: {
      title: 'الألوميتال والنوافذ',
      desc: 'نوافذ قطاع صغير PS مع عمل 7 أمتار ألوميتال نوافذ داخلية عازلة.',
      image: 'https://i.postimg.cc/FswgQxy7/BO2.jpg',
      brand: 'قطاع PS ألوميتال عالي المتانة',
      isIncluded: true
    },
    furniture: {
      title: 'الأثاث والفرش الملكي',
      desc: 'أثاث كامل لـ 4 غرف نوم فاخرة بكافة الكماليات والديكورات مع إضافة غرفة مجاناً للمساحات الكبيرة.',
      image: 'https://i.postimg.cc/g2Ryc6sJ/M2.jpg',
      brand: 'أثاث متكامل فاخر للغاية لـ 4 غرف',
      isIncluded: true
    }
  },
  luxury_3: {
    interior: {
      title: 'التشطيب الداخلي والأرضيات القصرية',
      desc: 'الريسبشن والممرات بورسلين فاخر 120×60 مع معابر رخام إمبراطور وعتبات جلاكسي وأثاث ملكي فاخر بالكامل.',
      image: 'https://i.postimg.cc/YCgN2mRG/r2.jpg',
      brand: 'بورسلين ملكي 120×60 + رخام إمبراطور وجلاكسي',
      isIncluded: true
    },
    ceilings: {
      title: 'تفاصيل الأسقف والجبس بورد',
      desc: 'أسقف جبس بورد بالكامل بالإضافة إلى 50 متراً إضافياً من الديكورات الجبسية والإنارة الساقطة الفخمة.',
      image: 'https://i.postimg.cc/jdBQrhHD/g1.jpg',
      brand: 'أسقف جبس بورد ملكية مع 50م ديكورات إضافية',
      isIncluded: true
    },
    paints: {
      title: 'الدهانات والطلاء الملكي',
      desc: 'طلاء جوتن فينوماستيك الأصلي وديكورات ريسبشن فخمة من الخشب والحجر وورق حائط 3D CNC.',
      image: 'https://i.postimg.cc/bZyS3rKy/R5.jpg',
      brand: 'دهانات جوتن العالمية مع ديكورات 3D خشب وحجر',
      isIncluded: true
    },
    plumbing: {
      title: 'السباكة والصحي الملكي',
      desc: 'قاعدة دفن جروهي، شاور سيستم متطور، كابينة سيكوريت عمولة ووحدة حمام عمولة فاخرة مع عزل سيكا 1.7.',
      image: 'https://i.postimg.cc/Gh6J1jFR/b1.jpg',
      brand: 'جروهي ألمانيا مع كابينة سيكوريت عمولة',
      isIncluded: true
    },
    kitchens: {
      title: 'المطبخ والأنظمة الملكية',
      desc: 'مطبخ بولي لاك PolyLac عالي اللمعان والصلابة بطول 12 متراً طولياً مع ساوند سيستم صوتي مدمج بالكامل.',
      image: 'https://i.postimg.cc/rKCt1xYq/k1.jpg',
      brand: 'مطبخ PolyLac بولي لاك 12م مع ساوند سيستم كامل',
      isIncluded: true
    },
    alumetal: {
      title: 'الألوميتال والنوافذ',
      desc: 'قطاع PS ألوميتال ممتاز مع 7 أمتار نوافذ داخلية زجاج عازل ومظهر عصري.',
      image: 'https://i.postimg.cc/fT1jhvcD/1111.jpg',
      brand: 'قطاع PS عالي الجودة متين',
      isIncluded: true
    },
    furniture: {
      title: 'الأثاث والفرش الفاخر الكامل',
      desc: 'فرش وأثاث كامل 4 غرف (نوم ماستر، سفرة، جزامة، أطفال، ركنة/انتريه، وحدة شاشة) مع إضافة غرفة عند تجاوز 120م².',
      image: 'https://i.postimg.cc/t4PdRVkg/M1.jpg',
      brand: 'فرش متكامل 4 غرف + غرفة مجاناً للمساحات > 120م²',
      isIncluded: true
    }
  },
  luxury_2: {
    interior: {
      title: 'التشطيب الداخلي والأرضيات الفخمة',
      desc: 'الريسبشن والممرات بورسلين ليزر فاخر بالكامل، أرضيات الغرف سيراميك باركيه، رخام جلاكسي، وفرش كامل 4 غرف نوم.',
      image: 'https://i.postimg.cc/FYrkDz2m/r1.jpg',
      brand: 'بورسلين ليزر + رخام جلاكسي + أثاث فاخر',
      isIncluded: true
    },
    ceilings: {
      title: 'تفاصيل الأسقف والجبس بورد',
      desc: 'أسقف جبس بورد معلقة بالكامل بمستويات متعددة وإضاءات ليد بروفايل واسبوتات.',
      image: 'https://i.postimg.cc/NfZ7wx69/g3.jpg',
      brand: 'أسقف كناوف متعددة المستويات',
      isIncluded: true
    },
    paints: {
      title: 'الدهانات والطلاء الفاخر',
      desc: 'طلاء نهائي جوتن فينوماستيك قابل للغسيل مع تجاليد خشب طبيعي وحجر وورق حائط 3D.',
      image: 'https://i.postimg.cc/1360RNBf/R4.jpg',
      brand: 'دهانات جوتن + تجاليد خشب وحجر ورخام',
      isIncluded: true
    },
    plumbing: {
      title: 'السباكة والصحي المتقدم',
      desc: 'قاعدة دفن جروهي، شاور سيستم متطور، وحدة حمام عمولة وكابينة سيكوريت عمولة.',
      image: 'https://i.postimg.cc/pX3YtBfd/b6.jpg',
      brand: 'جروهي + وحدة حمام عمولة + سيكوريت',
      isIncluded: true
    },
    kitchens: {
      title: 'المطبخ والأنظمة المدمجة',
      desc: 'مطبخ كلادينج فخم بطول 10 أمتار وتأسيس ساوند سيستم صوتي مدمج بالكامل.',
      image: 'https://i.postimg.cc/VdBbqnHf/k3.jpg',
      brand: 'مطبخ كلادينج 10م + ساوند سيستم كامل',
      isIncluded: true
    },
    alumetal: {
      title: 'الألوميتال والنوافذ',
      desc: 'نوافذ قطاع صغير PS مع عمل 7 أمتار ألوميتال نوافذ داخلية عازلة.',
      image: 'https://i.postimg.cc/FswgQxy7/BO2.jpg',
      brand: 'قطاع PS ألوميتال عالي المتانة',
      isIncluded: true
    },
    furniture: {
      title: 'الأثاث والفرش الملكي',
      desc: 'أثاث كامل لـ 4 غرف نوم فاخرة بكافة الكماليات والديكورات مع إضافة غرفة مجاناً للمساحات الكبيرة.',
      image: 'https://i.postimg.cc/g2Ryc6sJ/M2.jpg',
      brand: 'أثاث متكامل فاخر للغاية لـ 4 غرف',
      isIncluded: true
    }
  },
  luxury_3: {
    interior: {
      title: 'التشطيب الداخلي والأرضيات القصرية',
      desc: 'الريسبشن والممرات بورسلين فاخر 120×60 مع معابر رخام إمبراطور وعتبات جلاكسي وأثاث ملكي فاخر بالكامل.',
      image: 'https://i.postimg.cc/YCgN2mRG/r2.jpg',
      brand: 'بورسلين ملكي 120×60 + رخام إمبراطور وجلاكسي',
      isIncluded: true
    },
    ceilings: {
      title: 'تفاصيل الأسقف والجبس بورد',
      desc: 'أسقف جبس بورد بالكامل بالإضافة إلى 50 متراً إضافياً من الديكورات الجبسية والإنارة الساقطة الفخمة.',
      image: 'https://i.postimg.cc/jdBQrhHD/g1.jpg',
      brand: 'أسقف جبس بورد ملكية مع 50م ديكورات إضافية',
      isIncluded: true
    },
    paints: {
      title: 'الدهانات والطلاء الملكي',
      desc: 'طلاء جوتن فينوماستيك الأصلي وديكورات ريسبشن فخمة من الخشب والحجر وورق حائط 3D CNC.',
      image: 'https://i.postimg.cc/bZyS3rKy/R5.jpg',
      brand: 'دهانات جوتن العالمية مع ديكورات 3D خشب وحجر',
      isIncluded: true
    },
    plumbing: {
      title: 'السباكة والصحي الملكي',
      desc: 'قاعدة دفن جروهي، شاور سيستم متطور، كابينة سيكوريت عمولة ووحدة حمام عمولة فاخرة مع عزل سيكا 1.7.',
      image: 'https://i.postimg.cc/Gh6J1jFR/b1.jpg',
      brand: 'جروهي ألمانيا مع كابينة سيكوريت عمولة',
      isIncluded: true
    },
    kitchens: {
      title: 'المطبخ والأنظمة الملكية',
      desc: 'مطبخ بولي لاك PolyLac عالي اللمعان والصلابة بطول 12 متراً طولياً مع ساوند سيستم صوتي مدمج بالكامل.',
      image: 'https://i.postimg.cc/rKCt1xYq/k1.jpg',
      brand: 'مطبخ PolyLac بولي لاك 12م مع ساوند سيستم كامل',
      isIncluded: true
    },
    alumetal: {
      title: 'الألوميتال والنوافذ',
      desc: 'قطاع PS ألوميتال ممتاز مع 7 أمتار نوافذ داخلية زجاج عازل ومظهر عصري.',
      image: 'https://i.postimg.cc/fT1jhvcD/1111.jpg',
      brand: 'قطاع PS عالي الجودة متين',
      isIncluded: true
    },
    furniture: {
      title: 'الأثاث والفرش الملكي للقصور',
      desc: 'أثاث ملكي فاخر لـ 4 غرف نوم كاملة بكافة الكماليات والديكورات والملحقات المجانية للمساحات الكبيرة.',
      image: 'https://i.postimg.cc/t4PdRVkg/M1.jpg',
      brand: 'أثاث القصور والفرش المكتمل بالكامل',
      isIncluded: true
    }
  }
};

const packagesData: PackageDetail[] = [
  {
    id: 'economic',
    titleAr: 'الباقة الاقتصادية المتميزة',
    titleEn: 'Economic Standard',
    subtitleAr: 'الحل الذكي والعملي للراغبين في تشطيب متكامل بجودة عالية وتكلفة اقتصادية مدروسة تناسب ميزانيتك.',
    priceRate: '٤,٠٠٠',
    duration: '٤٥ - ٦٠ يوم عمل',
    warranty: 'ضمان ٥ سنوات شامل',
    image: 'https://i.postimg.cc/FYrkDz2m/r1.jpg',
    gallery: [
      'https://i.postimg.cc/FYrkDz2m/r1.jpg',
      'https://i.postimg.cc/jdBQrhHD/g1.jpg',
      'https://i.postimg.cc/0ymG5Jn5/L1.jpg',
      'https://i.postimg.cc/Gh6J1jFR/b1.jpg',
      'https://i.postimg.cc/rKCt1xYq/k1.jpg'
    ],
    specs: [
      { category: 'الكهرباء والأنظمة', details: 'سلك سويدي معتمد، علب ومفاتيح فينوس، لوحة 12 خط، دوائر ستالايت وتلفزيون للريسبشن والنوم.' },
      { category: 'السباكة والعزل', details: 'صرف كاسيل ألماني، تغذية BR بضمان 10 سنوات، عزل حمامات على البارد مع طقم صحي استاندرد.' },
      { category: 'الدهانات والتشطيب', details: 'تأسيس كامل للدهانات مع 2 سكينة معجون أسمنتي للرطوبة وسكينة معجون تنعيم جاهز ودهانات سايبس معتمدة.' },
      { category: 'الأسقف والجبس', details: 'كرانيش جبسية ناعمة للغرف والممرات مع بيت نور مخصص للريسبشن.' },
      { category: 'الأرضيات والسيراميك', details: 'سيراميك كليوباترا فرز أول بالكامل للشقة.' },
      { category: 'الألوميتال والنجارة', details: 'شبابيك المطبخ والحمام قطاع صغير PS وباب شقة خشبي متين.' }
    ]
  },
  {
    id: 'vip',
    titleAr: 'باقة VIP الفاخرة',
    titleEn: 'VIP Luxury',
    subtitleAr: 'الخيار الأفضل للباحثين عن الرقي والأسقف المعلقة بالكامل مع لمسات الجبس بورد وبورسلين وسيراميك قطع ليزر.',
    priceRate: '٥,٠٠٠',
    duration: '٥٠ - ٦٥ يوم عمل',
    warranty: 'ضمان ٥ سنوات شامل',
    image: 'https://i.postimg.cc/YCgN2mRG/r2.jpg',
    popular: true,
    gallery: [
      'https://i.postimg.cc/YCgN2mRG/r2.jpg',
      'https://i.postimg.cc/xTBySPvk/g2.jpg',
      'https://i.postimg.cc/K1G3JjCd/L2.jpg',
      'https://i.postimg.cc/BQRcGCTq/b2.jpg',
      'https://i.postimg.cc/4NjbT16h/k2.jpg'
    ],
    specs: [
      { category: 'الكهرباء والأنظمة', details: 'سلك سويدي معتمد، علب ومفاتيح فينوس الفاخرة، لوحة 12 خط، تأسيس تكييفات الريسبشن والإنترنت والصوتيات.' },
      { category: 'السباكة والعزل', details: 'صرف كاسيل ألماني، تغذية BR بضمان 10 سنوات، عزل حمامات سيكا 1.7 معتمد، قاعدة معلقة ووحدة شاور حديثة.' },
      { category: 'الدهانات والتشطيب', details: 'تأسيس كامل للدهانات مع 3 سكاكين معجون جاهز وأجود دهانات سايبس مع جانب ديكوري مميز خلفية للسرير.' },
      { category: 'الأسقف والجبس', details: 'أسقف معلقة جبس بورد كناوف Knauf بالكامل للشقة شاملة بيوت نور وإضاءة ليد غير مباشرة.' },
      { category: 'الأرضيات والسيراميك', details: 'سيراميك قطع ليزر فرز أول كليوباترا أو رويال بالكامل للشقة بلمعان جذاب.' },
      { category: 'الألوميتال والنجارة', details: 'شبابيك ألوميتال PS متينة بقطاع عريض وزجاج عاكس للخصوصية التامة.' }
    ]
  },
  {
    id: 'altra_vip',
    titleAr: 'باقة ألترا VIP الماسية',
    titleEn: 'Altra VIP Elite',
    subtitleAr: 'تشطيب استثنائي يتجاوز التوقعات، يجمع بين الرخام الفاخر وجدران بديل الرخام والخشب مع دهانات جوتن الحريرية.',
    priceRate: '٥,٥٠٠',
    duration: '٦٠ - ٧٥ يوم عمل',
    warranty: 'ضمان ١٠ سنوات ممتد',
    image: 'https://i.postimg.cc/y89h6SjS/r3.jpg',
    gallery: [
      'https://i.postimg.cc/y89h6SjS/r3.jpg',
      'https://i.postimg.cc/NfZ7wx69/g3.jpg',
      'https://i.postimg.cc/1360RNBf/R4.jpg',
      'https://i.postimg.cc/SNH7pG6S/b3.jpg',
      'https://i.postimg.cc/VdBbqnHf/k3.jpg'
    ],
    specs: [
      { category: 'الكهرباء والأنظمة', details: 'سلك سويدي، علب ماجيك وشنايدر/فينوس، لوحة رئيسية 24 خط، تأسيس تكييفات وصوتيات متكاملة بالكامل في الأرجاء.' },
      { category: 'السباكة والعزل', details: 'صرف كاسيل ألماني، التغذية BR ضمان 10 سنوات، عزل حمام سيكا 1.7 معتمد، قاعدة دفن جروهي (Grohe) ألمانية فاخرة، عمل لياسة أسمنتية كاملة وتأسيس صرف وشاور.' },
      { category: 'الدهانات والطلاء', details: 'وش سيلز مائي، 2 معجون أسمنتي رطوبة، معجون تنعيم جاهز وبطانة وتلقيطة، 2 وش دهان نهائي جوتن (Jotun) فينوماستيك الأصلي القابل للغسيل الكامل.' },
      { category: 'الأسقف والجبس', details: 'جبس بورد لإجمالي المساحة بالكامل، جبس بورد أبيض للريسبشن والغرف، جبس بورد أحمر مقاوم للحريق للمطبخ, جبس بورد أخضر مقاوم للرطوبة للحمام.' },
      { category: 'الأرضيات والرخام', details: 'الريسبشن والممرات بورسلين مستورد فاخر (بحد أقصى 280ج للمتر)، غرف النوم سيراميك شرائح باركيه فرز أول (بحد أقصى 130ج للمتر)، المطبخ والحمام فرز أول (بحد أقصى 110ج للمتر). معابر الغرف رخام إمبراطور وعتبة الباب رخام جلاكسي.' },
      { category: 'الألوميتال والنجارة', details: 'المطبخ والحمام قطاع صغير PS، أبواب الغرف جاهزة تركي ممتازة وباب الشقة مصفح تركي فخم.' },
      { category: 'الديكورات واللمسات', details: 'ديكور ريسبشن (ورق حائط أو حجر أو تجليدة خشب بحد أقصى 7 متر)، ورق حائط لغرفة الماستر أو المعيشة، وورق حائط 3D لغرف الأطفال بحد أقصى 5 متر طولي CNC.' },
      { category: 'الساوند سيستم', details: 'تأسيس متكامل للساوند سيستم في الأرجاء.' }
    ]
  },
  {
    id: 'super_altra_vip',
    titleAr: 'باقة سوبر ألترا VIP المتميزة',
    titleEn: 'Super Altra VIP Supreme',
    subtitleAr: 'تجربة تشطيب متطورة جداً بالليد بروفايل وتأسيس الفريون النحاس بالكامل مع رخام جلاكسي بديكورات فاخرة.',
    priceRate: '٦,٥٠٠',
    duration: '٦٠ - ٧٥ يوم عمل',
    warranty: 'ضمان ١٠ سنوات ممتد',
    image: 'https://i.postimg.cc/bZyS3rKy/R5.jpg',
    gallery: [
      'https://i.postimg.cc/bZyS3rKy/R5.jpg',
      'https://i.postimg.cc/yD13vxwY/R6.jpg',
      'https://i.postimg.cc/2VFBQh9P/b4.jpg',
      'https://i.postimg.cc/sDb9RJYy/4444.jpg',
      'https://i.postimg.cc/t4PdRVkg/M1.jpg'
    ],
    specs: [
      { category: 'الكهرباء والأنظمة', details: 'سلك سويدي، علب ماجيك وشنايدر/فينوس، لوحة 24 خط، دوائر ستالايت وتلفزيون وإنترنت، تأسيس تكييفات، دفيتير، كشاف طوارئ ريسبشن ومطبخ، ليد واسبوتات بالكامل، تأسيس راوتر، 10 متر ليد بروفايل عصري، تأسيس مواسير فريون نحاس (بحد أقصى 10 متر)، وتأسيس خراطيم الساوند سيستم.' },
      { category: 'السباكة والعزل', details: 'صرف كاسيل، تغذية BR بضمان 10 سنوات، عزل حمامات سيكا 1.7، قاعدة دفن معلقة، عمل لياسة أسمنتية، كابينة شاور زجاجية مغلقة فخمة.' },
      { category: 'الدهانات', details: 'تأسيس كامل للدهانات عالي الدقة (سيلز مائي، معجون رطوبة أسمنتي، معجون جاهز تنعيم، بطانة وتلقيطة)، مع 2 وش طلاء نهائي جوتن فينوماستيك الأصلي قابل للغسيل والمسح.' },
      { category: 'الأسقف والجبس', details: 'تشمل عمل أسقف جبس بورد مغلقة بالكامل بمساحة الشقة (متر إضافي بمشتملاتها الفنية والإنشائية من إضاءة مخفية ومباشرة).' },
      { category: 'الأرضيات والسيراميك', details: 'أرضيات الريسبشن والممرات بورسلين فاخر 120×60، غرف النوم شرائح سيراميك باركيه (بحد أقصى 150ج للمتر)، حوائط المطبخ والحمام فرز أول ليزر (بحد أقصى 140ج للمتر). معابر رخام إمبراطور.' },
      { category: 'الألوميتال والنجارة', details: 'المطبخ والحمام قطاع صغير PS، ألوميتال الغرف والتراس يتم تحديد مواصفاته وتكلفته الدقيقة بعد المعاينة الميدانية. أبواب جاهزة تركي وباب رئيسي مصفح.' },
      { category: 'الديكورات الفاخرة', details: 'ديكور ريسبشن مميز (ورق حائط أو حجر أو تجليدة خشب أو بلاطات 3D أو تجليد بديل رخام super marble أو دهان قطيفة فيلفيت 1.20×2.40 بحد أقصى 10 متر)، ورق حائط لجانب في كل غرفه، ورق حائط 3D للأطفال بحد أقصى 10 متر طولي CNC.' },
      { category: 'الساوند سيستم', details: 'تأسيس شبكة ساوند سيستم صوتية متكاملة بجميع الغرف.' }
    ]
  },
  {
    id: 'luxury_1',
    titleAr: 'باقة Luxury 1 (تشمل الأثاث والمطبخ)',
    titleEn: 'Luxury 1 Complete Home',
    subtitleAr: 'باقة ملكية مذهلة وشاملة بالكامل للتشطيب عالي الجودة مع المطبخ والأثاث لعدد 4 غرف كاملة بكافة تفاصيلها وكمالياتها الجمالية.',
    priceRate: '١١,٠٠٠',
    duration: '٦٠ - ٩٠ يوم عمل',
    warranty: 'ضمان ١٠ سنوات ممتد',
    image: 'https://i.postimg.cc/0ymG5Jn5/L1.jpg',
    gallery: [
      'https://i.postimg.cc/0ymG5Jn5/L1.jpg',
      'https://i.postimg.cc/xTBySPvC/BO1.jpg',
      'https://i.postimg.cc/g2Ryc6sJ/M2.jpg',
      'https://i.postimg.cc/crM8Rwkp/b5.jpg',
      'https://i.postimg.cc/K1G3JjCd/L2.jpg'
    ],
    specs: [
      { category: 'الكهرباء', details: 'سلك سويدي، علب ماجيك ومفاتيح فينوس الفاخرة، لوحة 12 خط، دوائر ستالايت وإنترنت وتلفزيون للريسبشن والنوم، تأسيس تكييفات الريسبشن (كهرباء فقط)، دفيتير للطرقة والنوم الرئيسية، تأسيس كابل HD وكشاف طوارئ للريسبشن، ليد واسبوتات بالكامل.' },
      { category: 'السباكة', details: 'صرف كاسيل ألماني، التغذية BR بضمان 10 سنوات، عزل حمامات سيكا 1.7، قاعدة دفن معلقة، عمل لياسة أسمنتية، كابينة شاور زجاجية مغلقة.' },
      { category: 'الدهانات والأسقف', details: 'تأسيس ممتاز و2 وش دهان نهائي سايبس راقٍ. أسقف جبس بورد بالكامل للشقة (أبيض للريسبشن والغرف، مقاوم حريق للمطبخ، مقاوم رطوبة للحمام).' },
      { category: 'الأرضيات والرخام', details: 'الشقة بالكامل سيراميك قطع ليزر فاخر 60×60 (بحد أقصى 130ج للمتر)، حوائط المطبخ والحمام (بحد أقصى 100ج للمتر)، مع رخام جلاكسي فاخر للمطابخ والمعابر (عدد 4 متر رخام جلاكسي).' },
      { category: 'الألوميتال', details: 'المطبخ والحمام قطاع صغير PS، مع عمل 5 متر ألوميتال نوافذ داخلية قطاع صغير زجاج سنجل PS.' },
      { category: 'الديكورات الفاخرة', details: 'عدد 3 جوانب ديكور للريسبشن وغرفة النوم (بديل خشب أو بديل رخام أو بانوهات فيوتك رقيقة أو ورق حائط ثلاثي الأبعاد)، مع عدد 1 جانب ديكور خلفية لغرفة الأطفال ورق حائط 3D.' },
      { category: 'الأثاث والفرش', details: 'فرش وأثاث كامل يشمل عدد 4 غرف + الكماليات: (غرفة نوم ماستر، غرفة سفرة، وحدة جزامة أنيقة، غرفة أطفال، ركنة أو انتريه راقٍ، وحدة شاشة تلفزيون). في حالة تخطي المساحة 120م² يتم إضافة غرفة إضافية مجاناً حسب رغبة العميل.' },
      { category: 'المطبخ والأنظمة', details: 'تنفيذ مطبخ كلادينج فاخر وعالي الجودة بطول 10 متر طولي، مع تأسيس ساوند سيستم بالكامل.' }
    ]
  },
  {
    id: 'luxury_2',
    titleAr: 'باقة Luxury 2 (تشمل الأثاث والمطبخ الفخم)',
    titleEn: 'Luxury 2 Elite Furnished',
    subtitleAr: 'الباقة المكتملة الفاخرة للأثاث الراقي والتشطيب الماسي، تشمل مطبخ كلادينج، بورسلين، كابينة سيكوريت عمولة وتأسيس تكييفات نحاس فريون.',
    priceRate: '١٤,٠٠٠',
    duration: '٦٠ - ٩٠ يوم عمل',
    warranty: 'ضمان ١٠ سنوات ممتد',
    image: 'https://i.postimg.cc/g2Ryc6sJ/M2.jpg',
    gallery: [
      'https://i.postimg.cc/g2Ryc6sJ/M2.jpg',
      'https://i.postimg.cc/pX3YtBfd/b6.jpg',
      'https://i.postimg.cc/FswgQxy7/BO2.jpg',
      'https://i.postimg.cc/1360RNBf/R4.jpg',
      'https://i.postimg.cc/VdBbqnHf/k3.jpg'
    ],
    specs: [
      { category: 'الكهرباء والتكييف', details: 'سلك سويدي، علب ماجيك، مفاتيح فينوس، لوحة رئيسية 18 خط، دوائر ستالايت وإنترنت وتلفزيون وتأسيس تكييفات (كهرباء فقط)، تأسيس مواسير فريون نحاس (بحد أقصى 5 متر)، تأسيس خراطيم الساوند سيستم, دفيتير، تأسيس كابل HD وكشاف طوارئ ريسبشن، ليد واسبوتات بالكامل في الأسقف.' },
      { category: 'السباكة المتقدمة', details: 'صرف كاسيل، تغذية BR بضمان 10 سنوات، عزل حمامات سيكا 1.7، تأسيس شاور كامل، عمل لياسة أسمنتية، وحدة حمام عمولة مصممة خصيصاً، كابينة شاور زجاج سيكوريت عمولة، طقم صحي مع قاعدة دفن جروهي، شاور سيستم متطور، 3 قطع خلاطات تركي فاخرة، مع طقم إكسسوار ونواكيل ستانلس كامل.' },
      { category: 'الدهانات والأسقف', details: 'تأسيس دهانات فائق مع 2 وش طلاء نهائي جوتن قابل للغسيل والمسح بالكامل. أسقف جبس بورد للشقة بالكامل بمستويات مختلفة مقاومة للحرارة والرطوبة.' },
      { category: 'الأرضيات والرخام', details: 'الريسبشن والممرات بورسلين ليزر بالكامل، أرضيات الغرف سيراميك شرائح باركيه فرز أول (بحد أقصى 150ج للمتر)، حوائط المطبخ والحمام فرز أول (بحد أقصى 140ج للمتر)، عتبة باب الشقة رخام فخم، بالإضافة لعدد 4 متر رخام جلاكسي فاخر.' },
      { category: 'الألوميتال', details: 'المطبخ والحمام شبابيك قطاع صغير PS، مع عمل 7 متر ألوميتال نوافذ داخلية قطاع صغير زجاج سنجل PS.' },
      { category: 'الديكورات والأثاث', details: 'ديكور ريسبشن فاخر (ورق حائط أو حجر أو تجليدة خشب طبيعي)، ورق حائط لغرفة الماستر والمعيشة، ورق حائط 3D للأطفال بحد أقصى 5 متر CNC طولي. أثاث كامل لـ 4 غرف نوم فاخرة (نوم، سفرة، جزامة، أطفال, ركنة أو انتريه، وحدة شاشة) مع إضافة غرفة عند تجاوز مساحة الشقة 120م².' },
      { category: 'المطبخ والمميزات', details: 'مطبخ كلادينج فخم بطول 10 متر طولي، وتأسيس ساوند سيستم صوتي مدمج بالشقة بالكامل.' }
    ]
  },
  {
    id: 'luxury_3',
    titleAr: 'باقة Luxury 3 (باقة الملوك والقصور)',
    titleEn: 'Luxury 3 Royal Palace',
    subtitleAr: 'قمة الرفاهية والأناقة المعمارية للقصور والفيلات الفاخرة. تشمل أرقى مستويات الأثاث والمطابخ البولي لاك ومساحات جبسية إضافية ضخمة.',
    priceRate: '١٦,٠٠٠',
    duration: '٦٠ - ٩٠ يوم عمل',
    warranty: 'ضمان ١٠ سنوات ممتد',
    image: 'https://i.postimg.cc/YCgN2mRG/r2.jpg',
    gallery: [
      'https://i.postimg.cc/YCgN2mRG/r2.jpg',
      'https://i.postimg.cc/jdBQrhHD/g1.jpg',
      'https://i.postimg.cc/bZyS3rKy/R5.jpg',
      'https://i.postimg.cc/Gh6J1jFR/b1.jpg',
      'https://i.postimg.cc/rKCt1xYq/k1.jpg'
    ],
    specs: [
      { category: 'الكهرباء والتكييف', details: 'سلك سويدي، علب ماجيك، مفاتيح فينوس، لوحة رئيسية 24 خط، دوائر ستالايت وإنترنت وتلفزيون وتأسيس تكييفات (كهرباء وصرف)، تأسيس مواسير فريون نحاس (بحد أقصى 10 متر)، تأسيس خراطيم الساوند سيستم، دفيتير، تأسيس كابل HD وكشاف طوارئ ريسبشن، ليد واسبوتات بالكامل في الأسقف.' },
      { category: 'السباكة الراقية', details: 'صرف كاسيل، تغذية BR بضمان 10 سنوات، عزل حمامات سيكا 1.7، تأسيس شاور كامل، عمل لياسة أسمنتية، وحدة حمام عمولة مصممة خصيصاً، كابينة شاور زجاج سيكوريت عمولة، طقم صحي مع قاعدة دفن جروهي، شاور سيستم متطور، 3 قطع خلاطات تركي فاخرة، مع طقم إكسسوار ونواكيل ستانلس كامل.' },
      { category: 'الدهانات والأسقف', details: 'تأسيس دهانات فائق مع 2 وش طلاء نهائي جوتن قابل للغسيل والمسح بالكامل. أسقف جبس بورد معلقة للشقة بالكامل بالإضافة إلى 50 متر إضافي من الديكورات الجبسية والإنارة الساقطة.' },
      { category: 'الأرضيات والرخام', details: 'الريسبشن والممرات بورسلين فاخر مقاس 120×60 (بحد أقصى 150ج للمتر)، أرضيات الغرف سيراميك شرائح باركيه فرز أول (بحد أقصى 150ج للمتر)، حوائط المطبخ والحمام فرز أول (بحد أقصى 150ج للمتر)، معابر من رخام إمبراطور وعتبات رخام جلاكسي (عدد 5 متر رخام جلاكسي فاخر).' },
      { category: 'الألوميتال', details: 'شبابيك المطبخ والحمام شبابيك قطاع صغير PS، مع عمل 7 متر ألوميتال نوافذ داخلية قطاع صغير زجاج سنجل PS.' },
      { category: 'الديكورات والأثاث', details: 'ديكور ريسبشن فخم (ورق حائط أو حجر أو تجليدة خشب أو بلاطات ثلاثية الأبعاد 3D أو super marble أو دهان قطيفة فيلفيت بحد أقصى 10 متر), ورق حائط لجانب في كل غرفه، ورق حائط 3D للأطفال بحد أقصى 10 متر CNC طولي. أثاث كامل لـ 4 غرف نوم فاخرة (غرفة نوم رئيسية، سفرة، جزامة، أطفال، ركنة أو انتريه فخم، وحدة شاشة) مع إضافة غرفة عند تجاوز مساحة الشقة 120م².' },
      { category: 'المطبخ والأنظمة', details: 'مطبخ بولي لاك (PolyLac) فخم جداً عالي اللمعان والصلابة بطول 12 متر طولي، وتأسيس ساوند سيستم صوتي مدمج بالشقة بالكامل.' }
    ]
  }
];

interface PackagesProps {
  onSelectPackage: (pkgId: QualityTierType) => void;
}

function parseDetailsToPoints(details: string): string[] {
  if (!details) return [];
  return details
    .split(/[،,؛;]|\s+\.\s+/)
    .map(p => p.trim())
    .filter(p => p.length > 0);
}

export default function Packages({ onSelectPackage }: PackagesProps) {
  const [activeTab, setActiveTab] = useState<QualityTierType | 'all'>('all');
  const [selectedSpecPkg, setSelectedSpecPkg] = useState<PackageDetail | null>(null);
  const [activeSpecTab, setActiveSpecTab] = useState<SpecTabType>('interior');

  const [activeImages, setActiveImages] = useState<Record<string, number>>({
    economic: 0,
    vip: 0,
    altra_vip: 0,
    super_altra_vip: 0,
    luxury_1: 0,
    luxury_2: 0,
    luxury_3: 0,
  });

  const [expandedPkgs, setExpandedPkgs] = useState<Record<string, boolean>>({
    economic: false,
    vip: false,
    altra_vip: false,
    super_altra_vip: false,
    luxury_1: false,
    luxury_2: false,
    luxury_3: false,
  });

  const handlePrevImage = (pkgId: string, galleryLength: number) => {
    setActiveImages((prev) => ({
      ...prev,
      [pkgId]: (prev[pkgId] - 1 + galleryLength) % galleryLength,
    }));
  };

  const handleNextImage = (pkgId: string, galleryLength: number) => {
    setActiveImages((prev) => ({
      ...prev,
      [pkgId]: (prev[pkgId] + 1) % galleryLength,
    }));
  };

  const handleSelectImageIndex = (pkgId: string, idx: number) => {
    setActiveImages((prev) => ({
      ...prev,
      [pkgId]: idx,
    }));
  };

  const filteredPackages = activeTab === 'all' 
    ? packagesData 
    : packagesData.filter(p => p.id === activeTab);

  return (
    <section id="packages-section" className="py-24 bg-gradient-to-b from-[#fff8f0] to-[#fdf3e7] border-t border-outline-variant/15 font-body">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm text-luxury-gold uppercase tracking-[0.25em] mb-3 block font-bold">
            باقات خدمات التشطيب المتكاملة
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary font-bold leading-tight mb-5">
            باقات مصممة لتفوق <span className="text-luxury-gold">توقعاتك</span>
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            تقدم شركة العلا للتشطيبات المتكاملة بالإسكندرية ومختلف المحافظات ٧ مستويات للتشطيب الفاخر والمتكامل لتلائم ميزانيتك وطموحك مع احتساب فوري للتكلفة.
          </p>
        </div>

        {/* Tab Switcher for Quick Filter - Scrollable on mobile to support 7 packages */}
        <div className="flex justify-center mb-12">
          <div className="bg-sand-neutral/30 p-1.5 rounded-xl border border-outline-variant/30 flex gap-1 overflow-x-auto max-w-full pb-2 md:pb-1.5 scrollbar-thin">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-primary hover:bg-sand-neutral/20'
              }`}
            >
              عرض الكل
            </button>
            <button
              onClick={() => setActiveTab('economic')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'economic'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-primary hover:bg-sand-neutral/20'
              }`}
            >
              الاقتصادية
            </button>
            <button
              onClick={() => setActiveTab('vip')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'vip'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-primary hover:bg-sand-neutral/20'
              }`}
            >
              باقة VIP
            </button>
            <button
              onClick={() => setActiveTab('altra_vip')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'altra_vip'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-primary hover:bg-sand-neutral/20'
              }`}
            >
              Altra VIP
            </button>
            <button
              onClick={() => setActiveTab('super_altra_vip')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'super_altra_vip'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-primary hover:bg-sand-neutral/20'
              }`}
            >
              Super Altra
            </button>
            <button
              onClick={() => setActiveTab('luxury_1')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'luxury_1'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-primary hover:bg-sand-neutral/20'
              }`}
            >
              Luxury 1
            </button>
            <button
              onClick={() => setActiveTab('luxury_2')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'luxury_2'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-primary hover:bg-sand-neutral/20'
              }`}
            >
              Luxury 2
            </button>
            <button
              onClick={() => setActiveTab('luxury_3')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'luxury_3'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-primary hover:bg-sand-neutral/20'
              }`}
            >
              Luxury 3
            </button>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border transition-all duration-300 relative ${
                pkg.popular 
                  ? 'border-luxury-gold ring-1 ring-luxury-gold/50 lg:-translate-y-2' 
                  : 'border-outline-variant/20 hover:border-luxury-gold/30'
              }`}
            >
              {/* Popular ribbon */}
              {pkg.popular && (
                <div className="absolute top-4 left-4 bg-luxury-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20 shadow-xs flex items-center gap-1 animate-pulse">
                  <span className="material-symbols-outlined text-[12px]">star</span>
                  <span>الأكثر اختياراً</span>
                </div>
              )}

              {/* Card Image Cover with interactive gallery */}
              <div className="relative h-64 overflow-hidden group/gallery">
                <img
                  src={pkg.gallery[activeImages[pkg.id]]}
                  alt={pkg.titleAr}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
                
                {/* Navigation arrows */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3 z-20 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage(pkg.id, pkg.gallery.length);
                    }}
                    className="w-8 h-8 rounded-full bg-black/50 hover:bg-luxury-gold text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none border-0"
                    title="الصورة السابقة"
                  >
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage(pkg.id, pkg.gallery.length);
                    }}
                    className="w-8 h-8 rounded-full bg-black/50 hover:bg-luxury-gold text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none border-0"
                    title="الصورة التالية"
                  >
                    <span className="material-symbols-outlined text-base">chevron_left</span>
                  </button>
                </div>

                {/* Dot indicators */}
                <div className="absolute top-4 right-4 flex gap-1.5 z-20 bg-black/45 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-xs">
                  {pkg.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectImageIndex(pkg.id, idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-all cursor-pointer border-0 ${
                        activeImages[pkg.id] === idx 
                          ? 'bg-luxury-gold scale-125' 
                          : 'bg-white/60 hover:bg-white'
                      }`}
                      title={`عرض صورة ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Image counter tag */}
                <div className="absolute top-4 left-4 z-20 text-[10px] bg-black/60 text-white font-worksans px-2 py-0.5 rounded border border-white/5 font-bold">
                  {activeImages[pkg.id] + 1} / {pkg.gallery.length}
                </div>

                <div className="absolute bottom-4 right-5 left-5 text-white z-20">
                  <span className="text-[10px] text-luxury-gold font-bold uppercase tracking-wider block mb-1">
                    {pkg.titleEn}
                  </span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                    {pkg.titleAr}
                  </h3>
                </div>
              </div>

              {/* Package Meta specs strip */}
              <div className="bg-sand-neutral/10 px-5 py-3 border-b border-outline-variant/15 flex justify-between items-center text-xs text-on-surface-variant font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-luxury-gold">schedule</span>
                  <span>المدة: {pkg.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-luxury-gold">verified_user</span>
                  <span className="font-bold text-primary">{pkg.warranty}</span>
                </div>
              </div>

              {/* Card Specs Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed min-h-[40px]">
                    {pkg.subtitleAr}
                  </p>

                  <div className="border-t border-outline-variant/15 pt-5">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wide mb-3 flex justify-between items-center">
                      <span>مواصفات الخامات والأعمال بالتفصيل:</span>
                      <span className="text-[10px] text-luxury-gold font-semibold">({pkg.specs.length} بنود رئيسية)</span>
                    </h4>
                    
                    <ul className="space-y-4">
                      {pkg.specs.slice(0, expandedPkgs[pkg.id] ? pkg.specs.length : 4).map((spec, index) => (
                        <li key={index} className="space-y-1.5 border-b border-outline-variant/10 pb-3 last:border-0 last:pb-0 text-right">
                          <div className="flex items-center gap-1.5 justify-start">
                            <span className="material-symbols-outlined text-luxury-gold text-sm shrink-0">
                              arrow_left
                            </span>
                            <strong className="text-primary font-bold text-xs">{spec.category}</strong>
                          </div>
                          <ul className="grid grid-cols-1 gap-1 pr-4">
                            {parseDetailsToPoints(spec.details).map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-1.5 text-[11px] text-on-surface-variant leading-relaxed text-right">
                                <span className="text-luxury-gold shrink-0 text-xs">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>

                    {pkg.specs.length > 4 && (
                      <button
                        onClick={() => {
                          setExpandedPkgs(prev => ({
                            ...prev,
                            [pkg.id]: !prev[pkg.id]
                          }));
                        }}
                        className="w-full mt-4 py-2 px-3 rounded-lg text-[11px] font-bold bg-sand-neutral/20 hover:bg-sand-neutral text-primary border border-outline-variant/20 hover:border-luxury-gold/30 transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>{expandedPkgs[pkg.id] ? 'عرض بنود أقل' : `عرض كافة البنود والمواصفات الـ ${pkg.specs.length}`}</span>
                        <span className="material-symbols-outlined text-sm">
                          {expandedPkgs[pkg.id] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                        </span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="border-t border-outline-variant/15 pt-5 mt-auto space-y-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[10px] text-outline font-semibold block uppercase">سعر المتر المربع</span>
                      <span className="font-heading text-2xl font-bold text-primary">
                        {pkg.priceRate}{' '}
                        <span className="text-xs font-medium text-on-surface-variant">جنيه / م²</span>
                      </span>
                    </div>
                    <span className="text-[10px] bg-sand-neutral/40 text-on-surface-variant font-bold px-2.5 py-1 rounded-md">
                      تأسيس وتشطيب متكامل
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setSelectedSpecPkg(pkg);
                        setActiveSpecTab('interior');
                      }}
                      className="py-3 px-2 rounded-lg text-xs font-bold bg-onyx-black text-white hover:bg-primary transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md border-0"
                      title="استكشف بنود التشطيب والأثاث والسباكة بالصور التوضيحية"
                    >
                      <span className="material-symbols-outlined text-[15px] text-luxury-gold">image</span>
                      <span>تصفح البنود بالصور</span>
                    </button>
                    <button
                      onClick={() => onSelectPackage(pkg.id)}
                      className="py-3 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer bg-primary text-white hover:bg-onyx-black shadow-md border-0"
                    >
                      <span className="material-symbols-outlined text-[15px] text-luxury-gold">calculate</span>
                      <span>احسب التكلفة</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Notice */}
        <div className="mt-12 bg-white rounded-xl p-5 border border-outline-variant/20 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 text-right">
            <span className="material-symbols-outlined text-luxury-gold text-2xl mt-0.5 shrink-0">info</span>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-primary">هل لديك مواصفات خاصة ترغب بتعديلها أو دمجها؟</h4>
              <p className="text-[11px] sm:text-xs text-on-surface-variant mt-1 leading-relaxed">
                في شركة العلا، نتحلى بالمرونة التامة. يمكنك تحديد بنود معينة من باقة وبنود أخرى من باقة مغايرة لنصل معاً للتصميم والميزانية التي تناسب ذوقك وتطلعاتك.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById('contact-section');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="shrink-0 bg-sand-neutral/50 hover:bg-sand-neutral text-primary hover:text-luxury-gold text-xs font-bold px-5 py-2.5 rounded-lg border border-outline-variant/30 transition-all cursor-pointer border-0"
          >
            تواصل معنا لتصميم باقة خاصة
          </button>
        </div>

      </div>

      {/* Illustrated Specifications Modal */}
      {selectedSpecPkg && (
        <div className="fixed inset-0 z-[110] overflow-hidden flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-onyx-black/70 backdrop-blur-md transition-opacity animate-fadeIn"
            onClick={() => setSelectedSpecPkg(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-[#fff8f0] rounded-2xl shadow-2xl flex flex-col max-h-[90vh] z-10 border border-outline-variant/30 text-on-surface overflow-hidden">
            
            {/* Header */}
            <div className="p-5 border-b border-outline-variant/20 bg-onyx-black text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-luxury-gold text-2xl">gallery_thumbnail</span>
                <div className="text-right">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white">البنود والمواصفات التوضيحية المصورة</h3>
                  <p className="font-body text-xs text-[#d1c2b0]">{selectedSpecPkg.titleAr} - {selectedSpecPkg.warranty}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSpecPkg(null)}
                className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors cursor-pointer border-0"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Tabs list - Horizontally scrollable on mobile */}
            <div className="bg-sand-neutral/30 border-b border-outline-variant/15 p-2 shrink-0">
              <div className="flex gap-1 overflow-x-auto scrollbar-none py-1 px-1">
                {[
                  { id: 'interior', label: 'التشطيب الداخلي', icon: 'home' },
                  { id: 'ceilings', label: 'تفاصيل الأسقف', icon: 'architecture' },
                  { id: 'paints', label: 'الدهانات والطلاء', icon: 'format_paint' },
                  { id: 'plumbing', label: 'السباكة والصحي', icon: 'construction' },
                  { id: 'kitchens', label: 'المطابخ الحديثة', icon: 'restaurant' },
                  { id: 'alumetal', label: 'الألوميتال والنوافذ', icon: 'grid_view' },
                  { id: 'furniture', label: 'الأثاث والفرش', icon: 'bed' },
                ].map((tab) => {
                  const isTabIncluded = ILLUSTRATED_SPECS_MAP[selectedSpecPkg.id][tab.id as SpecTabType].isIncluded;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSpecTab(tab.id as SpecTabType)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer border-0 ${
                        activeSpecTab === tab.id
                          ? 'bg-primary text-white shadow-sm'
                          : 'text-on-surface-variant hover:text-primary hover:bg-sand-neutral/20'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-[16px] ${
                        activeSpecTab === tab.id ? 'text-luxury-gold' : 'text-outline'
                      }`}>
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                      {!isTabIncluded && (
                        <span className="text-[9px] bg-outline-variant/30 text-outline px-1.5 py-0.2 rounded-md">غير شامل</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modal Body - Tab Content */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 font-body">
              {(() => {
                const spec = ILLUSTRATED_SPECS_MAP[selectedSpecPkg.id][activeSpecTab];
                return (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    
                    {/* Image Column */}
                    <div className="md:col-span-7 space-y-2">
                      {spec.isIncluded ? (
                        <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-outline-variant/20 shadow-md">
                          <img
                            src={spec.image}
                            alt={spec.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          <div className="absolute bottom-3 right-4 text-white text-xs font-bold bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-xs">
                            صورة توضيحية واقعية بمواصفات الباقة
                          </div>
                        </div>
                      ) : (
                        <div className="h-64 sm:h-80 md:h-96 rounded-xl bg-sand-neutral/20 border border-dashed border-outline-variant/50 flex flex-col items-center justify-center text-center p-6 space-y-4">
                          <span className="material-symbols-outlined text-outline text-5xl">disabled_by_default</span>
                          <div className="space-y-1">
                            <h4 className="font-bold text-base text-primary">بند غير مشمول بالباقة الحالية</h4>
                            <p className="text-xs text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                              البند الحالي غير مشمول في {selectedSpecPkg.titleAr}. يمكنك ترقية اختيارك إلى باقات <span className="font-bold text-luxury-gold">Luxury الفاخرة</span> للحصول على تشطيب شامل بالفرش والمطابخ الكاملة.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Text Column */}
                    <div className="md:col-span-5 space-y-5 text-right">
                      <div>
                        <span className="text-[10px] bg-luxury-gold/10 text-luxury-gold font-bold px-2.5 py-1 rounded-full uppercase">
                          مواصفة تفصيلية مصورة
                        </span>
                        <h4 className="font-heading font-bold text-xl text-primary mt-2 flex items-center gap-2 justify-end">
                          <span>{spec.title}</span>
                          <span className="material-symbols-outlined text-luxury-gold text-xl">
                            {activeSpecTab === 'interior' ? 'home' : 
                             activeSpecTab === 'ceilings' ? 'architecture' :
                             activeSpecTab === 'paints' ? 'format_paint' :
                             activeSpecTab === 'plumbing' ? 'construction' :
                             activeSpecTab === 'kitchens' ? 'restaurant' :
                             activeSpecTab === 'alumetal' ? 'grid_view' : 'bed'}
                          </span>
                        </h4>
                      </div>

                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        {spec.desc}
                      </p>

                      <div className="p-4 rounded-xl bg-white border border-outline-variant/20 space-y-3 shadow-xs text-xs">
                        <div className="flex justify-between items-center pb-2 border-b border-outline-variant/10">
                          <span className="font-bold text-primary">المواصفة والشركة:</span>
                          <span className="text-on-surface-variant text-left font-semibold">{spec.brand}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-primary">حالة التضمين:</span>
                          {spec.isIncluded ? (
                            <span className="flex items-center gap-1 text-green-600 font-bold">
                              <span className="material-symbols-outlined text-base">check_circle</span>
                              <span>مشمول بالكامل</span>
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-outline font-bold">
                              <span className="material-symbols-outlined text-base">cancel</span>
                              <span>غير مشمول</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quick Upgrade Callout */}
                      {!spec.isIncluded && (
                        <div className="p-4 rounded-xl bg-primary-container/10 border border-primary-container/30 text-[11px] text-primary leading-relaxed">
                          <p className="font-bold mb-1">💡 فكرة ذكية لترقية مساحتك:</p>
                          باقات <span className="font-bold text-luxury-gold">Luxury (1, 2, 3)</span> تأتيك كاملة بالفرش والمطبخ وتجاليد بديل الرخام. تواصل معنا لتعديل الباقة وإدراج هذا البند بالتفصيل.
                        </div>
                      )}
                    </div>

                  </div>
                );
              })()}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-outline-variant/25 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 font-body">
              <div className="text-right">
                <span className="text-[10px] text-outline block">سعر المتر للباقة:</span>
                <span className="font-heading text-lg font-bold text-primary">
                  {selectedSpecPkg.priceRate} <span className="text-xs font-normal text-on-surface-variant">جنيه / م²</span>
                </span>
              </div>
              
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact-section');
                    setSelectedSpecPkg(null);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex-1 sm:flex-initial bg-primary hover:bg-onyx-black text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer border-0"
                >
                  طلب معاينة واستشارة مجانية
                </button>
                
                <button
                  onClick={() => {
                    const pkgId = selectedSpecPkg.id;
                    setSelectedSpecPkg(null);
                    onSelectPackage(pkgId);
                  }}
                  className="flex-1 sm:flex-initial bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all hover:shadow-md cursor-pointer border-0"
                >
                  احسب التكلفة ومساحة الموقع
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
