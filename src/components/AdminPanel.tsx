import { useState } from 'react';
import { QuoteRequest } from '../types';

interface AdminPanelProps {
  requests: QuoteRequest[];
  onUpdateStatus: (id: string, status: QuoteRequest['status']) => void;
  onDeleteRequest: (id: string) => void;
  onRestoreSeeds: () => void;
  onExitAdmin: () => void;
}

export default function AdminPanel({
  requests,
  onUpdateStatus,
  onDeleteRequest,
  onRestoreSeeds,
  onExitAdmin
}: AdminPanelProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  
  // Follow-up template generator states
  const [selectedRequestForFollowUp, setSelectedRequestForFollowUp] = useState<QuoteRequest | null>(null);

  // Filter inquiries with status grouping support for tabs
  const filteredRequests = requests.filter(req => {
    const matchesSearch = req.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          req.phone.includes(searchTerm);
    const matchesType = typeFilter === 'all' || req.projectType === typeFilter;
    
    let matchesStatus = false;
    if (statusFilter === 'all') {
      matchesStatus = true;
    } else if (statusFilter === 'in_progress') {
      matchesStatus = req.status === 'processing' || req.status === 'contacted';
    } else {
      matchesStatus = req.status === statusFilter;
    }
    
    return matchesSearch && matchesType && matchesStatus;
  });

  // Sort inquiries (Newest vs Oldest)
  const sortedRequests = [...filteredRequests].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
  });

  // Calculate Pipeline statistics
  const totalValue = requests.reduce((acc, curr) => acc + (curr.estimatedCost || 0), 0);
  const activeInquiries = requests.filter(r => r.status === 'new' || r.status === 'processing').length;
  const completedInquiries = requests.filter(r => r.status === 'completed').length;

  // Tab count metrics
  const countAll = requests.length;
  const countNew = requests.filter(r => r.status === 'new').length;
  const countInProgress = requests.filter(r => r.status === 'processing' || r.status === 'contacted').length;
  const countCompleted = requests.filter(r => r.status === 'completed').length;

  const getActiveTab = () => {
    if (statusFilter === 'all') return 'all';
    if (statusFilter === 'new') return 'new';
    if (statusFilter === 'processing' || statusFilter === 'contacted' || statusFilter === 'in_progress') return 'in_progress';
    if (statusFilter === 'completed') return 'completed';
    return 'all';
  };

  const downloadSingleRequestReport = (req: QuoteRequest) => {
    const tierLabels: Record<string, string> = {
      economic: 'الباقة الاقتصادية',
      vip: 'باقة VIP',
      altra_vip: 'باقة Altra VIP',
      super_altra_vip: 'باقة super Altra VIP',
      luxury_1: 'باقة Luxury 1 (شاملة الأثاث)',
      luxury_2: 'باقة Luxury 2 (شاملة الأثاث الفخم)',
      luxury_3: 'باقة Luxury 3 (الملوك والقصور)'
    };
    const tierLabel = tierLabels[req.qualityTier] || req.qualityTier;

    // Map checked services Ar
    const servicesMap: Record<string, string> = {
      flooring: '- تركيب الأرضيات والباركيه والرخام',
      ceilings: '- تركيب الأسقف المعلقة والديكورات الجبسية',
      mep: '- التمديدات الكهربائية والصحية المتكاملة',
      painting: '- الدهانات والديكورات الجدارية الراقية',
      smarthome: '- أنظمة المنزل الذكي والتحكم الذكي'
    };
    
    const servicesList = req.services.map(s => servicesMap[s] || `- ${s}`);

    const reportContent = `================================================
العلا للتشطيبات المتكاملة - تقرير المقايسة التقديرية
Al-Ola Integration - Construction & Finishing Estimate
================================================

تاريخ التقديم: ${new Date(req.createdAt).toLocaleDateString('ar-EG')}

تفاصيل العميل والمشروع:
----------------------
اسم العميل: ${req.fullName}
رقم الهاتف: ${req.phone}
نوع المشروع: ${req.projectTypeAr}
المساحة الإجمالية للموقع: ${req.areaSize} متر مربع
مستوى جودة المواد والخامات: ${tierLabel}

الخدمات والبنود المشمولة بالمقايسة:
----------------------------------
${servicesList.length > 0 ? servicesList.join('\n') : 'لم يتم تحديد بنود فرعية'}

التقدير المالي والزمني الأولي:
---------------------------
التكلفة الإجمالية المقدرة: ${req.estimatedCost.toLocaleString()} جنيه مصري
الجدول الزمني المتوقع للتسليم: ${req.estimatedDuration}

حالة الطلب الإدارية:
------------------
الحالة: ${req.status === 'new' ? 'طلب جديد' : req.status === 'processing' ? 'قيد الدراسة' : req.status === 'contacted' ? 'تم التواصل' : 'مكتمل / متعاقد'}

ملاحظات وتوجيهات هندسية:
-----------------------
- هذه التسعيرة مبدئية استرشادية مبنية على المساحة والخامات المحددة من قبل العميل.
- يرجى تنسيق زيارة فنية مجانية لمعاينة الموقع وأخذ القياسات الدقيقة وتقديم كراسة الشروط والمقايسات النهائية.

ملاحظات العميل الإضافية:
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

  const exportFilteredToCSV = () => {
    if (sortedRequests.length === 0) {
      alert("لا توجد طلبات تطابق الفلتر الحالي لتصديرها.");
      return;
    }

    // CSV headers in Arabic (UTF-8 encoded)
    const headers = [
      "اسم العميل",
      "رقم الهاتف",
      "نوع المشروع",
      "المساحة (م²)",
      "جودة المواد والبااقة",
      "الخدمات المطلوبة",
      "التكلفة التقديرية (ج.م)",
      "الجدول الزمني التقديري",
      "الحالة",
      "تاريخ تقديم الطلب",
      "تفاصيل وملاحظات إضافية"
    ];

    const rows = sortedRequests.map(req => {
      const tierLabels: Record<string, string> = {
        economic: 'الباقة الاقتصادية',
        vip: 'باقة VIP',
        altra_vip: 'باقة Altra VIP',
        super_altra_vip: 'باقة super Altra VIP',
        luxury_1: 'باقة Luxury 1 (شاملة الأثاث)',
        luxury_2: 'باقة Luxury 2 (شاملة الأثاث الفخم)',
        luxury_3: 'باقة Luxury 3 (الملوك والقصور)'
      };
      const tierLabel = tierLabels[req.qualityTier] || req.qualityTier;

      // Services text translation
      const servicesMap: Record<string, string> = {
        flooring: 'تركيب الأرضيات والباركيه والرخام',
        ceilings: 'تركيب الأسقف المعلقة والديكورات الجبسية',
        mep: 'التمديدات الكهربائية والصحية المتكاملة',
        painting: 'الدهانات والديكورات الجدارية الراقية',
        smarthome: 'أنظمة المنزل الذكي والتحكم الذكي'
      };
      const servicesText = req.services.map(s => servicesMap[s] || s).join(' - ');

      let statusLabel = 'طلب جديد';
      if (req.status === 'processing') statusLabel = 'قيد الدراسة';
      if (req.status === 'contacted') statusLabel = 'تم التواصل';
      if (req.status === 'completed') statusLabel = 'مكتمل / متعاقد';

      const dateStr = new Date(req.createdAt).toLocaleDateString('ar-EG');
      const escapedDetails = (req.details || 'لا توجد ملاحظات').replace(/"/g, '""');

      return [
        `"${req.fullName.replace(/"/g, '""')}"`,
        `"${req.phone.replace(/"/g, '""')}"`,
        `"${req.projectTypeAr}"`,
        req.areaSize,
        `"${tierLabel}"`,
        `"${servicesText}"`,
        req.estimatedCost,
        `"${req.estimatedDuration}"`,
        `"${statusLabel}"`,
        `"${dateStr}"`,
        `"${escapedDetails}"`
      ];
    });

    // Use UTF-8 BOM so Excel opens Arabic characters correctly
    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `AlOla_Filtered_Estimates_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: QuoteRequest['status']) => {
    switch (status) {
      case 'new':
        return <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-red-100 text-red-700">طلب جديد</span>;
      case 'processing':
        return <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-blue-100 text-blue-700">قيد الدراسة</span>;
      case 'contacted':
        return <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-amber-100 text-amber-700">تم التواصل</span>;
      case 'completed':
        return <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-green-100 text-green-700">مكتمل / متعاقد</span>;
      default:
        return null;
    }
  };

  const getTierLabel = (tier: QuoteRequest['qualityTier']) => {
    const tierLabels: Record<string, string> = {
      economic: 'الباقة الاقتصادية',
      vip: 'باقة VIP',
      altra_vip: 'باقة Altra VIP',
      super_altra_vip: 'باقة super Altra VIP',
      luxury_1: 'باقة Luxury 1 (شاملة الأثاث)',
      luxury_2: 'باقة Luxury 2 (شاملة الأثاث الفخم)',
      luxury_3: 'باقة Luxury 3 (الملوك والقصور)'
    };
    return tierLabels[tier] || tier;
  };

  const generateWhatsAppMessage = (req: QuoteRequest) => {
    const text = `مرحباً سيد ${req.fullName}، معكم مهندسو العلا للتشطيبات المتكاملة. نشكرك على طلب عرض السعر لمشروعك (${req.projectTypeAr}، بمساحة ${req.areaSize} م² بمستوى ${getTierLabel(req.qualityTier)}). تكلفتك التقديرية المبدئية هي ${req.estimatedCost.toLocaleString()} جنيه مصري بجدول زمني مقدر بـ ${req.estimatedDuration}. هل تود حجز موعد للمعاينة المجانية؟`;
    return `https://wa.me/${req.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  };

  const generateEmailDraft = (req: QuoteRequest) => {
    const subject = encodeURIComponent('العلا للتشطيبات - تسعير تقديري لمشروعك المعماري');
    const body = encodeURIComponent(`عزيزي ${req.fullName}،\n\nنشكرك على استخدامك لحاسبتنا التفاعلية للتشطيبات.\nبناءً على اختيارك لمشروع: ${req.projectTypeAr} بمساحة ${req.areaSize} م² بمستوى خامات ${getTierLabel(req.qualityTier)}، نود تقديم التقرير الأولي المالي للمعاينة:\n\n- التكلفة الإجمالية التقديرية: ${req.estimatedCost.toLocaleString()} جنيه مصري\n- الجدول الزمني المقدر للتنفيذ: ${req.estimatedDuration}\n\nيرجى الرد على هذا البريد أو الاتصال بنا لتنسيق موعد زيارة هندسية مجانية لموقع العمل للمعاينة وتفصيل المقايسة.\n\nتمنياتنا لك بالتوفيق،\nإدارة قسم التشطيبات والحلول المتكاملة - العلا`);
    return `mailto:customer@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="min-h-screen pt-24 pb-20 bg-sand-neutral/30 font-body text-on-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
        
        {/* Dashboard Title Panel */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/20">
          <div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl font-bold">dashboard</span>
              <h1 className="font-heading font-bold text-2xl sm:text-3xl text-primary">لوحة تحكم طلبات العملاء</h1>
            </div>
            <p className="text-xs sm:text-sm text-outline font-medium mt-1">
              أهلاً بك في قسم الإدارة. راقب، ابحث، ونظم عروض أسعار المساحات وتواصل مع عملائك.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={exportFilteredToCSV}
              className="bg-white border border-green-600/35 hover:border-green-600 hover:bg-green-50 text-green-700 px-4 py-2 rounded-lg text-xs font-bold hover:shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
              title="تحميل الطلبات المعروضة حالياً كملف Excel CSV"
            >
              <span className="material-symbols-outlined text-base">download_for_offline</span>
              <span>تصدير القائمة المصفاة (CSV)</span>
            </button>
            <button
              onClick={onRestoreSeeds}
              className="bg-white border border-outline-variant hover:border-primary text-primary px-4 py-2 rounded-lg text-xs font-semibold hover:shadow-xs transition-all cursor-pointer"
            >
              استعادة طلبات البذور النموذجية
            </button>
            <button
              onClick={onExitAdmin}
              className="bg-primary text-white hover:bg-onyx-black px-4 py-2 rounded-lg text-xs font-bold transition-all shadow cursor-pointer"
            >
              العودة لشاشة العميل
            </button>
          </div>
        </div>

        {/* Analytical Scorecards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/15 flex items-center justify-between">
            <div>
              <span className="text-xs text-outline font-semibold block">إجمالي طلبات التسعير</span>
              <span className="text-2xl sm:text-3xl font-bold text-primary font-worksans block mt-1">{requests.length}</span>
              <span className="text-[10px] text-green-600 font-bold block mt-1 flex items-center gap-0.5">
                <span className="material-symbols-outlined text-xs">trending_up</span>
                <span>متصل بالكامل بالإنترنت</span>
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">leaderboard</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/15 flex items-center justify-between">
            <div>
              <span className="text-xs text-outline font-semibold block">قيمة خط الأنابيب التقديرية</span>
              <span className="text-xl sm:text-2xl font-bold text-primary font-worksans block mt-1">
                {totalValue.toLocaleString()} <span className="text-[10px] font-bold">درهم</span>
              </span>
              <span className="text-[10px] text-outline block mt-1">إجمالي تكاليف المشاريع المستلمة</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
              <span className="material-symbols-outlined text-2xl">payments</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/15 flex items-center justify-between">
            <div>
              <span className="text-xs text-outline font-semibold block">طلبات نشطة قيد المتابعة</span>
              <span className="text-2xl sm:text-3xl font-bold text-red-600 font-worksans block mt-1">{activeInquiries}</span>
              <span className="text-[10px] text-outline block mt-1">تحتاج لتواصل عاجل</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
              <span className="material-symbols-outlined text-2xl">notifications_active</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/15 flex items-center justify-between">
            <div>
              <span className="text-xs text-outline font-semibold block">المشاريع المكتملة / المتعاقدة</span>
              <span className="text-2xl sm:text-3xl font-bold text-green-600 font-worksans block mt-1">{completedInquiries}</span>
              <span className="text-[10px] text-green-600 font-bold block mt-1 flex items-center gap-0.5">
                <span className="material-symbols-outlined text-xs">verified</span>
                <span>تأسيس ثقة مستمر</span>
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
              <span className="material-symbols-outlined text-2xl">handshake</span>
            </div>
          </div>

        </div>

        {/* Advanced Filters & Search Controls */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/15 space-y-4">
          <h3 className="font-heading font-bold text-lg text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">manage_search</span>
            <span>البحث والتصفية السريعة</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search Input (4 Cols) */}
            <div className="md:col-span-4 relative">
              <input
                type="text"
                placeholder="ابحث باسم العميل أو رقم الهاتف..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-sand-neutral border border-outline-variant/50 rounded-lg px-4 py-2.5 pr-10 text-sm focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors text-right"
              />
              <span className="material-symbols-outlined text-outline text-lg absolute top-1/2 -translate-y-1/2 right-3">
                search
              </span>
            </div>

            {/* Type Filter (2 Cols) */}
            <div className="md:col-span-2">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full bg-sand-neutral border border-outline-variant/50 rounded-lg px-4 py-2.5 text-sm focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors cursor-pointer"
              >
                <option value="all">كل أنواع المشاريع</option>
                <option value="residential">شقة سكنية</option>
                <option value="commercial">محل تجاري</option>
                <option value="buildings">مبنى كامل</option>
              </select>
            </div>

            {/* Status Filter (2 Cols) */}
            <div className="md:col-span-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full bg-sand-neutral border border-outline-variant/50 rounded-lg px-4 py-2.5 text-sm focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors cursor-pointer text-right"
              >
                <option value="all">كل الحالات للطلبات</option>
                <option value="new">طلب جديد (New)</option>
                <option value="in_progress">قيد المتابعة (In Progress)</option>
                <option value="completed">مكتمل / متعاقد (Completed)</option>
              </select>
            </div>

            {/* Sort Order Select (3 Cols) */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
                className="w-full bg-sand-neutral border border-outline-variant/50 rounded-lg px-4 py-2.5 text-sm focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors cursor-pointer text-right"
              >
                <option value="newest">الترتيب: الأحدث أولاً</option>
                <option value="oldest">الترتيب: الأقدم أولاً</option>
              </select>
            </div>

            {/* Clear Button (1 Col) */}
            <div className="md:col-span-1">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setTypeFilter('all');
                  setStatusFilter('all');
                  setSortBy('newest');
                }}
                className="w-full h-full bg-sand-neutral hover:bg-outline-variant/30 text-on-surface-variant rounded-lg flex items-center justify-center p-2.5 transition-colors cursor-pointer"
                title="إعادة التعيين"
              >
                <span className="material-symbols-outlined text-lg">filter_alt_off</span>
              </button>
            </div>

          </div>
        </div>

        {/* Status Tab Navigation */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-outline-variant/20 pb-1">
          <div className="flex flex-wrap gap-1 bg-white p-1 rounded-xl shadow-xs border border-outline-variant/15 w-full sm:w-auto">
            {[
              { id: 'all', label: 'كل الطلبات', icon: 'list_alt', badgeColor: 'bg-primary/15 text-primary', count: countAll, bgActive: 'bg-primary text-white shadow-xs' },
              { id: 'new', label: 'طلب جديد', icon: 'fiber_new', badgeColor: 'bg-red-100 text-red-600', count: countNew, bgActive: 'bg-red-600 text-white shadow-xs' },
              { id: 'in_progress', label: 'قيد الدراسة والمتابعة', icon: 'progress_activity', badgeColor: 'bg-amber-100 text-amber-600', count: countInProgress, bgActive: 'bg-amber-600 text-white shadow-xs' },
              { id: 'completed', label: 'مكتمل / متعاقد', icon: 'task_alt', badgeColor: 'bg-green-100 text-green-600', count: countCompleted, bgActive: 'bg-green-600 text-white shadow-xs' }
            ].map((tab) => {
              const isActive = getActiveTab() === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setStatusFilter(tab.id)}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? `${tab.bgActive}`
                      : 'text-on-surface-variant hover:bg-sand-neutral/50 hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg flex-shrink-0">{tab.icon}</span>
                  <span className="whitespace-nowrap">{tab.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-worksans font-bold ${isActive ? 'bg-white/20 text-white' : tab.badgeColor}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-outline font-semibold pl-2 hidden md:block text-left">
            يعرض الآن: <span className="text-primary font-bold">{sortedRequests.length}</span> من أصل <span className="text-primary font-bold">{requests.length}</span> طلبات تسعير
          </div>
        </div>

        {/* Main Requests List table */}
        <div className="bg-white rounded-2xl shadow-sm border border-outline-variant/15 overflow-hidden">
          {sortedRequests.length === 0 ? (
            <div className="p-16 text-center space-y-4">
              <span className="material-symbols-outlined text-outline text-5xl">inbox</span>
              <p className="text-on-surface-variant font-semibold text-lg">لا توجد طلبات تطابق معايير التصفية</p>
              <p className="text-xs text-outline max-w-sm mx-auto">جرب تغيير الكلمات المفتاحية للبحث أو تصفية الحالات لتبدأ العمل والترشيح.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-sand-neutral/50 border-b border-outline-variant/30 text-xs text-outline uppercase font-semibold">
                    <th className="p-4">العميل ومعلومات الاتصال</th>
                    <th className="p-4">التفاصيل / الخدمة</th>
                    <th className="p-4 text-center">المساحة والخامات</th>
                    <th className="p-4 text-center">عرض السعر المقدر</th>
                    <th className="p-4 text-center">الحالة الإدارية</th>
                    <th className="p-4 text-center">المتابعة السريعة</th>
                    <th className="p-4 text-center">التحكم</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20 text-xs sm:text-sm">
                  {sortedRequests.map((req) => (
                    <tr key={req.id} className="hover:bg-sand-neutral/10 transition-colors">
                      {/* Customer contact Column */}
                      <td className="p-4">
                        <div>
                          <p className="font-bold text-primary">{req.fullName}</p>
                          <div className="flex items-center gap-1 mt-1 justify-start">
                            <span className="material-symbols-outlined text-xs text-luxury-gold">phone</span>
                            <a 
                              href={`tel:${req.phone}`} 
                              className="font-worksans text-stone-800 hover:text-primary hover:underline font-bold text-xs tracking-wide transition-colors select-all"
                              dir="ltr"
                              title="اضغط للاتصال بالعميل"
                            >
                              {req.phone}
                            </a>
                          </div>
                          <p className="text-[10px] text-outline-variant mt-1 font-worksans">
                            {new Date(req.createdAt).toLocaleDateString('ar-AE', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </p>
                        </div>
                      </td>

                      {/* Details Column */}
                      <td className="p-4 max-w-xs">
                        <div>
                          <p className="font-bold text-on-surface">{req.projectTypeAr}</p>
                          <p className="text-outline text-xs mt-1 leading-relaxed line-clamp-2" title={req.details}>
                            {req.details || 'لا توجد ملاحظات إضافية من العميل'}
                          </p>
                        </div>
                      </td>

                      {/* Area and Quality Tier Column */}
                      <td className="p-4 text-center">
                        <div>
                          <p className="font-bold text-primary font-worksans">{req.areaSize} م²</p>
                          <p className="text-xs text-outline-variant mt-1 font-semibold">
                            {getTierLabel(req.qualityTier)}
                          </p>
                        </div>
                      </td>

                      {/* Estimated quotation cost Column */}
                      <td className="p-4 text-center font-worksans">
                        <div>
                          <p className="font-bold text-luxury-gold text-base">
                            {req.estimatedCost.toLocaleString()} <span className="text-[10px] font-bold text-on-surface-variant">درهم</span>
                          </p>
                          <p className="text-[10px] text-outline mt-1 font-body">{req.estimatedDuration}</p>
                        </div>
                      </td>

                      {/* Status select/indicator column */}
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          {getStatusBadge(req.status)}
                          <select
                            value={req.status}
                            onChange={(e) => onUpdateStatus(req.id, e.target.value as QuoteRequest['status'])}
                            className="bg-sand-neutral border border-outline-variant/30 rounded px-2 py-1 text-[10px] font-bold focus:border-luxury-gold focus:ring-0 cursor-pointer text-center"
                          >
                            <option value="new">طلب جديد</option>
                            <option value="processing">قيد الدراسة</option>
                            <option value="contacted">تم التواصل</option>
                            <option value="completed">مكتمل / متعاقد</option>
                          </select>
                        </div>
                      </td>

                      {/* Follow up actions template generator column */}
                      <td className="p-4 text-center">
                        <div className="flex justify-center gap-1">
                          <button
                            onClick={() => setSelectedRequestForFollowUp(req)}
                            className="p-1.5 rounded bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 hover:text-amber-700 transition-colors cursor-pointer"
                            title="توليد مسودة رد"
                          >
                            <span className="material-symbols-outlined text-base align-middle">quickreply</span>
                          </button>
                          <a
                            href={generateWhatsAppMessage(req)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded bg-green-500/10 text-green-600 hover:bg-green-500/20 hover:text-green-700 transition-colors"
                            title="إرسال رسالة واتساب تقديرية فورا"
                          >
                            <span className="material-symbols-outlined text-base align-middle font-worksans">chat</span>
                          </a>
                          <button
                            onClick={() => downloadSingleRequestReport(req)}
                            className="p-1.5 rounded bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 hover:text-blue-700 transition-colors cursor-pointer"
                            title="تحميل المقايسة والتقدير كملف نصي"
                          >
                            <span className="material-symbols-outlined text-base align-middle">download</span>
                          </button>
                        </div>
                      </td>

                      {/* Delete controller column */}
                      <td className="p-4 text-center">
                        <button
                          onClick={() => {
                            if (window.confirm('هل أنت متأكد من رغبتك في حذف هذا الطلب بالكامل؟ لا يمكن التراجع عن هذه الخطوة.')) {
                              onDeleteRequest(req.id);
                            }
                          }}
                          className="p-1.5 rounded bg-red-100/50 text-red-600 hover:bg-red-200 text-red-700 transition-colors cursor-pointer"
                          title="حذف الطلب"
                        >
                          <span className="material-symbols-outlined text-base align-middle">delete</span>
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Quote follow up templates dialog */}
        {selectedRequestForFollowUp && (
          <div className="fixed inset-0 bg-onyx-black/70 backdrop-blur-xs z-[100] flex items-center justify-center p-4">
            <div className="bg-[#fff8f0] rounded-xl max-w-xl w-full border border-luxury-gold/30 shadow-2xl overflow-hidden animate-slideUp">
              
              <div className="p-6 bg-onyx-black text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-luxury-gold text-xl">quickreply</span>
                  <h3 className="font-heading font-bold text-lg text-white">توليد مسودة الرد التقديري المالي</h3>
                </div>
                <button
                  onClick={() => setSelectedRequestForFollowUp(null)}
                  className="text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="p-6 space-y-4 text-sm font-body leading-relaxed">
                <p className="text-on-surface-variant">
                  سيقوم النظام بإنتاج مسودة تواصل للعميل <span className="font-bold text-primary">{selectedRequestForFollowUp.fullName}</span> تشتمل على تفاصيل مساحته وتسعيرته التقديرية:
                </p>

                <div className="p-4 rounded-lg bg-white border border-outline-variant/30 text-xs sm:text-sm text-on-surface leading-loose text-right whitespace-pre-line">
                  {`مرحباً سيد ${selectedRequestForFollowUp.fullName}، معكم مهندسو العلا للتشطيبات المتكاملة.\n\nنشكرك على استخدامك لحاسبتنا التفاعلية للتشطيبات.\nبناءً على اختيارك لمشروع: ${selectedRequestForFollowUp.projectTypeAr} بمساحة ${selectedRequestForFollowUp.areaSize} م² بمستوى خامات ${getTierLabel(selectedRequestForFollowUp.qualityTier)}، نود تقديم التقرير المالي المبدئي المقدر:\n\n- التكلفة التقديرية المبدئية: ${selectedRequestForFollowUp.estimatedCost.toLocaleString()} جنيه مصري\n- الجدول الزمني المقدر للتنفيذ: ${selectedRequestForFollowUp.estimatedDuration}\n\nهل تود تأكيد حجز موعد زيارة هندسية مجانية لموقع العمل للمعاينة وتفصيل المقايسة على الطبيعة؟`}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <a
                    href={generateWhatsAppMessage(selectedRequestForFollowUp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20ba56] text-white py-3 rounded-lg font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow"
                  >
                    <span className="material-symbols-outlined text-base font-worksans">chat</span>
                    <span>إرسال عبر WhatsApp</span>
                  </a>
                  <a
                    href={generateEmailDraft(selectedRequestForFollowUp)}
                    className="bg-primary hover:bg-onyx-black text-white py-3 rounded-lg font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-base">mail</span>
                    <span>إرسال بالبريد الإلكتروني</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
