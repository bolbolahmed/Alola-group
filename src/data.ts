import { Project, ServiceDetail, Testimonial, QuoteRequest } from './types';

import project1Img from './assets/images/alola_royal_classic_salon.webp';
import project2Img from './assets/images/alola_luxury_lobby.webp';
import project3Img from './assets/images/alola_luxury_bedroom.webp';
import project4Img from './assets/images/alola_gypsum_living_room.webp';
import project5Img from './assets/images/alola_commercial_perfume.webp';
import project6Img from './assets/images/luxury_kitchen_portfolio.webp';
import project7Img from './assets/images/comprehensive_luxury_interior.webp';

// Additional high-quality finishing assets for galleries matching the finishing type
import imgBathroom from './assets/images/luxury_bathroom_1784373308842.jpg';
import imgBedroom2 from './assets/images/luxury_bedroom_1784373344388.jpg';
import imgKitchen2 from './assets/images/royal_kitchen_1784373295498.jpg';
import imgCeiling from './assets/images/premium_ceiling_1784373320002.jpg';
import imgEconomic from './assets/images/economic_interior_1784373332477.jpg';
import imgEgyptianLiving from './assets/images/egyptian_luxury_living_room_1784452124881.jpg';
import imgCommercialRef from './assets/images/regenerated_image_1784553471143.webp';
import imgModernRef from './assets/images/regenerated_image_1784466146813.webp';
import project6NewImg from './assets/images/regenerated_image_1784802302529.jpg';
import project5NewImg from './assets/images/regenerated_image_1784802435088.jpg';
import imgEconomicPkg from './assets/images/alola_economic_package_1784124459164.jpg';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Royal Classic Palace Salon - Loran',
    titleAr: 'صالون القصر الكلاسيكي الملكي ',
    category: 'residential',
    categoryAr: 'سكني',
    location: 'Loran, Alexandria',
    locationAr: ' الإسكندرية',
    area: 450,
    year: '2025',
    image: 'https://i.postimg.cc/FYrkDz2m/r1.jpg',
    gallery: [
      'https://i.postimg.cc/FYrkDz2m/r1.jpg',
      'https://i.postimg.cc/YCgN2mRG/r2.jpg',
      'https://i.postimg.cc/y89h6SjS/r3.jpg',
      project1Img
    ],
    finishingTypeAr: 'تشطيب ملكي كلاسيكي فاخر',
    finishingTypeEn: 'Royal Classic Palace Finish',
    specsAr: [
      'تجاليد جدران خشبية كلاسيكية ناصعة البياض مطعمة بورق الذهب الفرنسي يدوياً',
      'أسقف جبس بلدي كلاسيكي مجهز ببيوت نور وممرات مخفية للإضاءة الدافئة',
      'صالونات كلاسيكية مذهبة ونجف كريستال فخم مستورد خصيصاً',
      'أرضيات من الرخام الفاخر المعالج اللامع بتثبيت دقيق بالليزر'
    ],
    description: 'An opulent royal salon featuring white wood paneling with intricate gold leaf carvings, classic French gilded armchairs, and a stunning crystal chandelier in Loran, Alexandria.',
    descriptionAr: 'صالون ملكي فاخر بمنطقة لوران بالإسكندرية يتميز بتجاليد خشبية بيضاء مطعمة بورق الذهب الفرنسي، صالونات مذهبة كلاسيكية ونجف كريستال فخم يتدلى من سقف جبس بورد مجهز ببيوت نور مخفية وتفاصيل نحت يدوية دقيقة.'
  },
  {
    id: '2',
    title: 'Luxury Villa Reception Lobby - Kafr El Abdo',
    titleAr: 'ردهة استقبال الفيلات الفاخرة ',
    category: 'buildings',
    categoryAr: 'مبانٍ',
    location: 'Kafr El Abdo, Alexandria',
    locationAr: ' الإسكندرية',
    area: 600,
    year: '2025',
    image: 'https://i.postimg.cc/0ymG5Jn5/L1.jpg',
    gallery: [
      'https://i.postimg.cc/0ymG5Jn5/L1.jpg',
      'https://i.postimg.cc/K1G3JjCd/L2.jpg',
      project2Img,
      imgCeiling
    ],
    finishingTypeAr: 'باقة ألترا VIP الماسية',
    finishingTypeEn: 'Altra VIP Elite Finish',
    specsAr: [
      'أرضيات من الرخام الطبيعي المقصوص بتقنية الـ Waterjet بتصاميم هندسية دقيقة',
      'أسقف جبس بورد معلقة متعددة المستويات من كناوف الألمانية مع إنارة LED مخفية',
      'تجاليد جدران وبانوهات كلاسيكية راقية بدهانات جوتن فينوماستيك المقاومة',
      'أنظمة تكييف مركزي مخفي وتوزيع ذكي لمخارج ومداخل الهواء'
    ],
    description: 'A grand scale villa entrance in Kafr El Abdo featuring a multi-layered modern gypsum board ceiling with warm indirect LED illumination, waterjet-cut polished marble floors, and elegant wall mouldings.',
    descriptionAr: 'مدخل فيلا سكني مذهل بمنطقة كفر عبده بالإسكندرية، بأسقف جبسية هندسية متعددة المستويات مزودة بشرائط ليد مخفية دافئة، وأرضيات من الرخام الفاخر المقصوص بالليزر (Waterjet)، مع تجاليد جدران كلاسيكية راقية.'
  },
  {
    id: '3',
    title: 'Modern Master Bedroom Suite - Ginaklis',
    titleAr: 'جناح غرفة النوم الرئيسية المودرن ',
    category: 'residential',
    categoryAr: 'سكني',
    location: 'Ginaklis, Alexandria',
    locationAr: ' الإسكندرية',
    area: 120,
    year: '2025',
    image: 'https://i.postimg.cc/t4PdRVkg/M1.jpg',
    gallery: [
      'https://i.postimg.cc/t4PdRVkg/M1.jpg',
      'https://i.postimg.cc/g2Ryc6sJ/M2.jpg',
      imgBedroom2,
      project3Img
    ],
    finishingTypeAr: 'باقة سوبر ألترا VIP',
    finishingTypeEn: 'Super Altra VIP Finish',
    specsAr: [
      'خلفية سرير مخملية قطيفة رمادية ممتدة من الأرض إلى السقف مع إضاءة ليد مخفية',
      'أسقف معلقة مع بيوت نور دائرية ومستطيلة وتوزيع دقيق للاسبوتات الموجهة',
      'دهانات قطيفة (فيلفيت) راقية لغرفة النوم الرئيسية بدهان جوتن الحريري',
      'أرضيات خشبية باركيه معالجة للرطوبة والحرارة تمنح الدفء والراحة'
    ],
    description: 'A contemporary bedroom design in Ginaklis featuring a floor-to-ceiling tufted velvet headboard, indirect warm LED lighting embedded in the headboard and modern ceiling, creating a cozy and luxurious ambiance.',
    descriptionAr: 'غرفة نوم ماستر مذهلة بمنطقة جناكليس بالإسكندرية، تتميز بخلفية سرير ممتدة للسقف من القطيفة الرمادية المبطنة بإضاءة ليد دافئة مدمجة، وأسقف جبسية حديثة توفر توزيعاً متوازناً وجذاباً للإضاءة والألوان الداكنة الفخمة.'
  },
  {
    id: '4',
    title: 'Contemporary Wooden Living Room - City Light',
    titleAr: 'شقة سكنية بتجاليد خشبية عصرية ',
    category: 'residential',
    categoryAr: 'سكني',
    location: 'City Light, Alexandria',
    locationAr: ' الإسكندرية',
    area: 240,
    year: '2024',
    image: 'https://i.postimg.cc/jdBQrhHD/g1.jpg',
    gallery: [
      'https://i.postimg.cc/jdBQrhHD/g1.jpg',
      'https://i.postimg.cc/xTBySPvk/g2.jpg',
      'https://i.postimg.cc/NfZ7wx69/g3.jpg',
      project4Img
    ],
    finishingTypeAr: 'باقة VIP الفاخرة',
    finishingTypeEn: 'VIP Luxury Finish',
    specsAr: [
      'تجاليد خشبية رأسية راقية على الجدران (بديل خشب طبيعي معالج)',
      'جدار شاشة تلفزيون من رخام كرارا الأبيض الفاخر بتصميم بياسترا',
      'أسقف جبس مستوية حديثة مزودة ببيوت نور شرائط ليد بروفايل مدمجة',
      'وحدات تخزين مدمجة مخفية بإضاءة داخلية ذكية ومتحكمات لمسية'
    ],
    description: 'A warm and modern living room in City Light Alexandria featuring sleek vertical wooden wall cladding, a marble accent TV wall, built-in storage with warm LED backlighting, and a comfortable bespoke sectional sofa.',
    descriptionAr: 'تصميم دافئ لغرفة معيشة متكاملة بمجمع سيتي لايت بالإسكندرية، يضم تجاليد حوائط خشبية عمودية رائعة، جدار تلفاز رخامي مدمج، وإضاءات ليد حديثة وأسقف جبسية مستوية تمنح المكان اتساعاً ولمسة عصرية لا تضاهى.'
  },
  {
    id: '5',
    title: 'Luxury Residential Apartment - Sporting',
    titleAr: 'شقة سكنية فاخرة ',
    category: 'residential',
    categoryAr: 'سكني',
    location: 'Sporting, Alexandria',
    locationAr: ' الإسكندرية',
    area: 220,
    year: '2025',
    image: 'https://i.postimg.cc/1360RNBf/R4.jpg',
    gallery: [
      'https://i.postimg.cc/1360RNBf/R4.jpg',
      project7Img,
      imgEgyptianLiving,
      imgModernRef
    ],
    finishingTypeAr: 'تشطيب سوبر ألترا VIP فاخر',
    finishingTypeEn: 'Super Ultra VIP Luxury Finish',
    specsAr: [
      'أرضيات بورسلين ليزر فاخرة مقاسات كبيرة للريسبشن والممرات مع عتبات رخام',
      'أسقف معلقة من الجبس بورد ببيوت نور وإضاءات ليد بروفايل دافئة',
      'دهانات جوتن فينوماستيك ناعمة مع تجاليد خشبية وبانوهات كلاسيكية أنيقة',
      'تأسيس تكييفات كونسيلد مخفية وساوند سيستم صوتي مدمج في أرجاء الشقة'
    ],
    description: 'A high-end luxury residential apartment in Sporting, Alexandria, featuring large-format porcelain floors, decorative gypsum ceilings with indirect LED lighting, custom wood paneling, and integrated smart features.',
    descriptionAr: 'تشطيب شقة سكنية فاخرة بمنطقة سبورتنج بالإسكندرية، تشمل أرضيات بورسلين فاخرة للريسبشن، وأسقف معلقة مودرن بإضاءة ليد بروفايل مخفية، وتجاليد خشبية وبانوهات الجدران الأنيقة بدهانات جوتن العالمية.'
  },
  {
    id: '6',
    title: 'Professional Plumbing MEP Layout - El Montazah',
    titleAr: ' أعمال التأسيسات الصحية والسباكة ',
    category: 'buildings',
    categoryAr: 'مبانٍ',
    location: 'El Montazah, Alexandria',
    locationAr: ' الإسكندرية ',
    area: 180,
    year: '2025',
    image: 'https://i.postimg.cc/rKCt1xYq/k1.jpg',
    gallery: [
      'https://i.postimg.cc/rKCt1xYq/k1.jpg',
      'https://i.postimg.cc/4NjbT16h/k2.jpg',
      'https://i.postimg.cc/Gh6J1jFR/b1.jpg',
      'https://i.postimg.cc/BQRcGCTq/b2.jpg'
    ],
    finishingTypeAr: 'تأسيس سباكة وشبكات مياه متطورة',
    finishingTypeEn: 'Premium MEP Plumbing Engineering',
    specsAr: [
      'مواسير التغذية والصرف من البولي بروبلين المعتمد مع ضمان ٥٠ سنة ضد عيوب التصنيع',
      'اختبار خطوط السباكة بالضغط العالي للتأكد التام من خلوها من أي تسريبات مجهرية',
      'تجهيز وتوزيع مخارج الصرف الصحي المعلق وتثبيت شاسيهات الدفن للجداريات',
      'عزل أرضيات الحمامات والمطابخ بمواد عزل كيميائي ألماني متعدد الطبقات'
    ],
    description: 'A high-end professional sanitary installation in El Montazah Alexandria featuring certified polypropylene pipes, pressure-tested distribution manifolds, and dual-layer chemical waterproofing for wet areas.',
    descriptionAr: 'تأسيس شبكة مياه وصرف صحي متكاملة واحترافية بمنطقة المنتزه بالإسكندرية، تشمل مواسير البولي بروبلين الحراري المعتمدة، واختبار الضغط، وتطبيق نظام العزل الكيميائي المزدوج لجميع دورات المياه والمطابخ لضمان الحماية الكاملة.'
  },
  {
    id: '7',
    title: 'Comprehensive Royal Suite - Sawary',
    titleAr: 'جناح سكني متكامل التشطيبات الفاخرة ',
    category: 'residential',
    categoryAr: 'سكني',
    location: 'Sawary, Alexandria',
    locationAr: ' الإسكندرية',
    area: 280,
    year: '2025',
    image: project6NewImg,
    gallery: [
      project6NewImg,
      project6Img,
      imgKitchen2,
      imgBathroom
    ],
    finishingTypeAr: 'باقة Luxury كاملة الفرش والمطبخ',
    finishingTypeEn: 'Luxury Furnished Turnkey Finish',
    specsAr: [
      'تشطيب كامل على المفتاح يشمل أرضيات رخام رويال بورتورو الإيطالي الفاخر',
      'أسقف ديكورية ببيوت نور دافئة مع دمج ليد بروفايل حديث بطول الصالة بالكامل',
      'تجاليد خشبية فاخرة وبانوهات كلاسيكية راقية بدهانات جوتن فينوماستيك القابلة للغسيل',
      'أثاث ملكي فاخر عمولة من الخشب الزان الطبيعي المطلي بالذهب والفضة مع الستائر'
    ],
    description: 'A stunning turnkey residential masterpiece in Sawary Alexandria featuring luxury marble flooring, decorative gypsum ceilings with embedded LED profiles, custom wooden paneling with brass trims, and elegant wainscoting.',
    descriptionAr: 'تحفة سكنية متكاملة تسليم مفتاح بمشروع صواري بالإسكندرية، تشمل أرضيات من الرخام الفاخر بعروق ذهبية، وأسقف معلقة من الجبس بورد ببيوت نور وإضاءة ليد مخفية متميزة، مع تجاليد خشبية فاخرة مطعمة بالنحاس وبانوهات كلاسيكية أنيقة لتشطيب شامل يجسد منتهى الرقي.'
  },
  {
    id: '8',
    title: 'Premium Economic Finishing Apartment - Loran',
    titleAr: 'شقة تشطيب الباقة الاقتصادية المتميزة ',
    category: 'residential',
    categoryAr: 'سكني',
    location: 'Loran, Alexandria',
    locationAr: ' الإسكندرية',
    area: 135,
    year: '2025',
    image: imgEconomic,
    gallery: [
      imgEconomic,
      imgEconomicPkg,
      'https://i.postimg.cc/D8dbrLpN/2222.jpg'
    ],
    finishingTypeAr: 'الباقة الاقتصادية المتميزة',
    finishingTypeEn: 'Premium Economic Finishing',
    specsAr: [
      'أرضيات سيراميك فرز أول كليوباترا بتصاميم عصرية جذابة',
      'أسقف معالجة بالمصيص والجبس بدهانات ناعمة متناسقة بمستويين',
      'تأسيس شبكة كهرباء متكاملة بأسلاك السويدي المعتمدة ومفاتيح فينو',
      'أعمال دهانات جوتن فينوماستيك كيدز القابلة للغسل ومقاومة للرطوبة'
    ],
    description: 'A highly functional and stylish economic apartment finish in Loran Alexandria featuring Cleopatra premium ceramic tile flooring, smooth multi-level paintwork, and fully certified El-Sewedy electric wiring.',
    descriptionAr: 'تشطيب شقة سكنية متكاملة بمنطقة لوران بالإسكندرية بالباقة الاقتصادية المتميزة، تجمع بين الجودة والتكلفة المدروسة من خلال استخدام أرضيات سيراميك فرز أول، ودهانات ناعمة، مع تأسيس متكامل لشبكات الكهرباء والسباكة المعتمدة.'
  },
  {
    id: '9',
    title: 'Modern Coastal Villa - El Montazah',
    titleAr: 'فيلا ساحلية مودرن بواجهات زجاجية ',
    category: 'residential',
    categoryAr: 'سكني',
    location: 'El Montazah, Alexandria',
    locationAr: ' الإسكندرية',
    area: 520,
    year: '2025',
    image: 'https://i.postimg.cc/bZyS3rKy/R5.jpg',
    gallery: [
      'https://i.postimg.cc/bZyS3rKy/R5.jpg',
      project5NewImg,
      imgCommercialRef,
      project5Img
    ],
    finishingTypeAr: 'تشطيب فيلات سوبر ألترا VIP',
    finishingTypeEn: 'Super Altra Coastal Villa Finish',
    specsAr: [
      'واجهات زجاجية مزدوجة معزولة حرارياً للصوت والغبار بإطارات ألوميتال فاخرة',
      'أرضيات رخام أبيض ناصع مع أثاث مودرن عصري متناسق مع الإضاءات الطبيعية',
      'أسقف معلقة بلمسات هندسية عصرية وإضاءة ليد مخفية دافئة',
      'تأسيس تكييفات كونسيلد مخفية وأنظمة حماية للرطوبة الساحلية'
    ],
    description: 'A modern coastal villa in El Montazah Alexandria featuring floor-to-ceiling double glazed glass walls, seamless white marble floors, bespoke minimalist white furniture, and state-of-the-art climate control.',
    descriptionAr: 'فيلا فاخرة بإطلالة ساحلية مذهلة بمنطقة المنتزه بالإسكندرية، تتميز بواجهات زجاجية واسعة وأرضيات رخامية مع أثاث أبيض عصري وديكورات إضاءة متطورة تناسب أجواء الفخامة والراحة.'
  },
  {
    id: '10',
    title: 'Luxury Commercial Center - City Light',
    titleAr: 'معرض الأجهزة والتجهيزات التجارية ',
    category: 'commercial',
    categoryAr: 'تجاري',
    location: 'City Light, Alexandria',
    locationAr: ' الإسكندرية',
    area: 320,
    year: '2025',
    image: 'https://i.postimg.cc/9rtqdZg8/3333.jpg',
    gallery: [
      'https://i.postimg.cc/9rtqdZg8/3333.jpg',
      'https://i.postimg.cc/sDb9RJYy/4444.jpg',
      'https://i.postimg.cc/xTBySPvC/BO1.jpg',
      'https://i.postimg.cc/FswgQxy7/BO2.jpg'
    ],
    finishingTypeAr: 'تشطيب المعارض والمحلات التجارية',
    finishingTypeEn: 'Commercial Showroom Finish',
    specsAr: [
      'أرضيات بورسلين عالية التحمل لمقاومة الأوزان الثقيلة والحركة المستمرة',
      'أسقف معلقة شبكية وإضاءات سبوت لايت الموجهة خصيصاً للمنتجات والمعروضات',
      'أنظمة إطفاء وإنذار حريق مبكر متكاملة طبقاً للمواصفات القياسية',
      'تأسيس كهربائي عالي الجودة بكابلات السويدي ولوحة تحكم رئيسية ذكية'
    ],
    description: 'A high-capacity commercial showroom in City Light Alexandria designed with durable porcelain tiles, directional grid spotlights, integrated fire protection systems, and heavy-duty electrical distribution.',
    descriptionAr: 'تجهيز وتنفيذ معرض تجاري عالي المستوى بمجمع سيتي لايت بالإسكندرية بأرضيات إيبوكسي وبورسلين مع أسقف شبكية وسبوتات إضاءة متخصصة للمنتجات والأجهزة.'
  },
  {
    id: '11',
    title: 'Architectural Gypsum Ceilings - Ginaklis',
    titleAr: 'مشروع الأسقف المعلقة والإضاءات ',
    category: 'buildings',
    categoryAr: 'مبانٍ',
    location: 'Ginaklis, Alexandria',
    locationAr: ' الإسكندرية',
    area: 380,
    year: '2025',
    image: 'https://i.postimg.cc/xTBySPvk/g2.jpg',
    gallery: [
      'https://i.postimg.cc/xTBySPvk/g2.jpg',
      'https://i.postimg.cc/NfZ7wx69/g3.jpg',
      imgCeiling
    ],
    finishingTypeAr: 'أعمال الجبس بورد والإضاءة الذكية',
    finishingTypeEn: 'Architectural Ceiling & Smart Lighting',
    specsAr: [
      'أسقف كناوف الألمانية المقاومة للرطوبة مع بيوت نور هندسية منحنية ومستقيمة',
      'دمج شرائط ليد بروفايل عالية الكثافة مع سبوتات إضاءة موجهة بدون إبهار',
      'عزل صوتي وحراري بالصوف الزجاجي خلف الأسقف المعلقة',
      'دهانات ألمانية فائقة النعومة ومقاومة للتأكل والغبار'
    ],
    description: 'An advanced architectural lighting project in Ginaklis Alexandria featuring custom curved gypsum board ceilings, integrated LED profile tracks, sound isolation, and high-precision paint finish.',
    descriptionAr: 'تنفيذ أسقف معلقة هندسية معقدة بمنطقة جناكليس بالإسكندرية تشمل ليد بروفايل مدمج وبيوت نور متعددة المستويات وقواطع جدارية ديكورية تعكس براعة التنفيذ الهندسي.'
  },
  {
    id: '12',
    title: 'Smart Residential Apartment - Kafr El Abdo',
    titleAr: 'شقة سكنية ذكية بتشطيب الملوك ',
    category: 'residential',
    categoryAr: 'سكني',
    location: 'Kafr El Abdo, Alexandria',
    locationAr: ' الإسكندرية',
    area: 210,
    year: '2025',
    image: 'https://i.postimg.cc/yD13vxwY/R6.jpg',
    gallery: [
      'https://i.postimg.cc/yD13vxwY/R6.jpg',
      'https://i.postimg.cc/fT1jhvcD/1111.jpg',
      'https://i.postimg.cc/0ymG5Jn5/L1.jpg'
    ],
    finishingTypeAr: 'باقة Luxury 3 الشاملة',
    finishingTypeEn: 'Smart Luxury 3 Palace Finish',
    specsAr: [
      'تأسيس نظام المنزل الذكي (Smart Home) للتحكم بالإضاءة والستائر والتكييفات',
      'نظام ساوند سيستم صوتي مدمج بالكامل في الأسقف والجدران',
      'أرضيات بورسلين ملكي مع دهانات جوتن فينوماستيك الأصلية القابلة للغسل',
      'طقم صحي مع قاعدة دفن جروهي الألمانية وشاور سيستم بيكاديللي المتطور'
    ],
    description: 'A luxurious smart home integration in Kafr El Abdo Alexandria featuring automated lighting and climate control, sound system throughout the unit, premium porcelain flooring, and Grohe concealed sanitary fixtures.',
    descriptionAr: 'شقة ذكية مجهزة بالكامل بمنطقة كفر عبده بالإسكندرية بنظام ساوند سيستم وتحكم إلكتروني في الإضاءة والدهانات الفاخرة جوتن فينوماستيك والأرضيات البورسلين لتجربة سكنية هادئة وفاخرة.'
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'residential',
    title: 'Residential Finishing',
    titleAr: 'تشطيب سكني فاخر',
    description: 'Full-service apartment turnkeys from gypsum ceilings to premium final paints—on time and within budget.',
    descriptionAr: 'تجهيز شامل للشقق والفلل السكنية من أسقف الجبس الفاخرة حتى الطلاء النهائي والأرضيات—في الوقت المحدد وضمن الميزانية.',
    image: 'https://i.postimg.cc/0ymG5Jn5/L1.jpg',
    icon: 'home',
    badge: 'Gypsum',
    badgeAr: 'جبس',
    highlights: ['Bespoke interior architectural solutions', 'Smart home automation integration', 'Premium paint finishes & carpentry'],
    highlightsAr: ['حلول معمارية مخصصة ومدروسة', 'تكامل كامل مع أنظمة المنزل الذكي', 'أرقى دهانات الحوائط وأعمال الخشب الفاخرة']
  },
  {
    id: 'commercial',
    title: 'Commercial Fit-Out',
    titleAr: 'تجهيز مكاتب ومحلات تجارية',
    description: 'Offices and retail shops finished according to international premium corporate design standards.',
    descriptionAr: 'محلات ومكاتب مشطبة ومجهزة بالكامل وفق أرقى المعايير والمواصفات المعمارية الدولية لرجال الأعمال والمستثمرين.',
    image: 'https://i.postimg.cc/xTBySPvC/BO1.jpg',
    icon: 'business',
    highlights: ['High-traffic durable materials', 'Sound-proof acoustic glass partitioning', 'Express schedules to match shopping mall openings'],
    highlightsAr: ['مواد عالية التحمل مخصصة للحركة الكثيفة', 'قواطع زجاجية عازلة تماماً للصوت والضوضاء', 'جداول تنفيذ سريعة لتلائم افتتاح المراكز التجارية']
  },
  {
    id: 'flooring',
    title: 'Luxury Flooring',
    titleAr: 'أرضيات فاخرة',
    description: 'Expert laying of imported Italian marble, premium porcelain tile, and high-end hardwood layouts.',
    descriptionAr: 'تركيب احترافي لأجود أنواع الرخام الإيطالي المستورد، البورسلين الإسباني، والباركيه الخشبي المعالج.',
    image: 'https://i.postimg.cc/FYrkDz2m/r1.jpg',
    icon: 'grid_view',
    highlights: ['Laser-aligned marble stitching', 'Premium heat-insulating sublayers', 'Durable high-gloss polish finishes'],
    highlightsAr: ['محاذاة الرخام بالليزر لضمان استمرارية العروق', 'طبقات عزل متكاملة للرطوبة والحرارة تحت الأرضيات', 'تلميع وجلاء عالي اللمعان والصلابة']
  },
  {
    id: 'ceilings',
    title: 'Plaster & Ceilings',
    titleAr: 'جبس وأسقف ديكورية',
    description: 'Artisanal architectural gypsum structures, dynamic cove lighting beds, and smooth plaster finishes.',
    descriptionAr: 'تصميم وتنفيذ أسقف الجبس بورد الحديثة والجبس البلدي الفاخر مع بيوت النور المخفية والكرانيش الدقيقة.',
    image: 'https://i.postimg.cc/jdBQrhHD/g1.jpg',
    icon: 'architecture',
    highlights: ['Seamless crack-resistant gypsum joints', 'Ambient lighting integration channels', 'Perfect architectural flat finishes'],
    highlightsAr: ['فواصل جبسية معالجة مقاومة للتصدع والتشقق', 'تجهيز مجاري ومسارات الإنارة الحديثة والمغناطيسية', 'تنفيذ مستويات تسوية مسطحة تماماً بأعلى جودة']
  },
  {
    id: 'mep',
    title: 'MEP (Electricity & Plumbing)',
    titleAr: 'كهرباء وسباكة (MEP)',
    description: 'Heavy-duty wiring, smart distribution panels, leakage-free premium piping, and central AC ducts.',
    descriptionAr: 'تأسيس وتمديد خطوط الكهرباء والسباكة والتكييف المركزي باستخدام خامات معتمدة وضمانات ممتدة.',
    image: 'https://i.postimg.cc/Gh6J1jFR/b1.jpg',
    icon: 'construction',
    highlights: ['Certified load-distributed electrical wiring', 'High-pressure tested plumbing leakage protection', 'Comprehensive ventilation & AC piping layouts'],
    highlightsAr: ['تمديدات كهربائية معتمدة وموزعة الأحمال بذكاء', 'أنظمة سباكة معزولة ومختبرة بضغط المياه العالي لمنع التسريب', 'مجاري تكييف وتجهيزات ذكية متطورة']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'أحمد زيدان',
    role: 'مالك شقة',
    location: 'الإسكندرية',
    comment: 'العلا للتشطيبات المتكاملة حولت شقتنا الخام إلى منزل رائع في 6 أسابيع فقط. كل التفاصيل كانت في أيدٍ أمينة والالتزام بالوقت والمواصفات كان مذهلاً.',
    avatarText: 'أز',
    rating: 5
  },
  {
    id: '2',
    name: 'سامح فتحى',
    role: 'مالك شقة',
    location: 'الإسكندرية',
    comment: 'كنا بحاجة لتشطيب الشقة بأفضل المواصفات والتسليم على المفتاح. سلموا المشروع بالكامل في الوقت المحدد وبأعلى جودة للمواد والديكورات والتشطيبات الجبسية.',
    avatarText: 'سف',
    rating: 5
  },
  {
    id: '3',
    name: 'أحمد عادل',
    role: 'مالك فيلا',
    location: 'الإسكندرية كيلو 21',
    comment: 'مستوى متميز جداً في التشطيب وأمانة مطلقة في التعامل. سلموني الفيلا على المفتاح في الموعد المحدد وبأفضل الخامات والمواصفات المتفق عليها لموقعنا بالإسكندرية.',
    avatarText: 'أع',
    rating: 5
  },
  {
    id: '4',
    name: 'سامح محمود عباس',
    role: 'مالك شقة',
    location: 'لوران، الإسكندرية',
    comment: 'تجربة رائعة للغاية مع مجموعة العلا في منطقة لوران بالإسكندرية. الدقة والالتزام في التنفيذ والتصميم كان مبهراً، والتشطيبات النهائية فاخرة للغاية.',
    avatarText: 'سم',
    rating: 5
  }
];

export const SEED_REQUESTS: QuoteRequest[] = [
  {
    id: 'REQ-101',
    fullName: 'عبد الله السيد',
    phone: '+201003656083',
    projectType: 'residential',
    projectTypeAr: 'شقة سكنية',
    areaSize: 150,
    qualityTier: 'vip',
    services: ['flooring', 'ceilings', 'mep'],
    details: 'أرغب في تشطيب شقة سكنية جديدة بالكامل في الإسكندرية مع أسقف جبسية مودرن وأرضيات ليزر وتأسيس ساوند سيستم.',
    estimatedCost: 480000,
    estimatedDuration: '٤٥ - ٦٠ يوم عمل',
    status: 'new',
    createdAt: '2026-07-14T10:30:00Z'
  },
  {
    id: 'REQ-102',
    fullName: 'أحمد محمود',
    phone: '+201223456789',
    projectType: 'commercial',
    projectTypeAr: 'محل تجاري',
    areaSize: 80,
    qualityTier: 'economic',
    services: ['mep', 'painting'],
    details: 'تجهيز صيدلية ومحل تجاري بالكامل ببنود الباقة الاقتصادية المناسبة مع الالتزام بالمواعيد.',
    estimatedCost: 240000,
    estimatedDuration: '٢٥ - ٤٠ يوم عمل',
    status: 'processing',
    createdAt: '2026-07-12T15:20:00Z'
  },
  {
    id: 'REQ-103',
    fullName: 'شركة النور العقارية',
    phone: '+201112223334',
    projectType: 'buildings',
    projectTypeAr: 'مبنى كامل',
    areaSize: 300,
    qualityTier: 'altra_vip',
    services: ['flooring', 'ceilings', 'mep', 'painting'],
    details: 'تشطيب ردهة استقبال رئيسية و فيلا سكنية فاخرة بمواد باقة الترا في اي بي الفخمة ورخام إمبرادور.',
    estimatedCost: 1320000,
    estimatedDuration: '٦٠ - ٩٠ يوم عمل',
    status: 'contacted',
    createdAt: '2026-07-09T08:45:00Z'
  }
];
