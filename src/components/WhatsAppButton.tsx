import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip after a small delay on initial load to draw gentle attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    // Hide tooltip automatically after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const phoneNumber = '201003656083';
  const defaultMessage = 'مرحباً فريق مبيعات مجموعة العلا للتشطيبات الفاخرة، أود الاستفسار عن خدمات التصميم والديكور والتشطيب.';
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 left-6 z-[90] flex flex-col items-start font-body" dir="rtl">
      <AnimatePresence>
        {/* Chat Widget Panel */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-4 w-80 sm:w-85 rounded-2xl bg-white border border-outline-variant/15 shadow-2xl overflow-hidden text-right"
          >
            {/* Header */}
            <div className="bg-gradient-to-l from-emerald-600 to-emerald-500 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Active support avatar */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-heading font-bold text-white text-base border border-white/10">
                    ع
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-emerald-600 rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">مبيعات مجموعة العلا</h4>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                    <span>متاح الآن للرد على استفساراتكم</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
                aria-label="إغلاق النافذة"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div 
              className="p-5 bg-stone-50 min-h-24 flex flex-col justify-end space-y-3 relative"
              style={{
                backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}
            >
              <div className="bg-emerald-50 text-stone-800 text-xs sm:text-sm p-3.5 rounded-2xl rounded-tr-none border border-emerald-100 max-w-[85%] shadow-sm leading-relaxed">
                مرحباً بك في مجموعة العلا للتشطيبات الفاخرة بالإسكندرية! كيف يمكننا مساعدتك اليوم في تصميم أو تشطيب مساحتك الخاصة؟ ✨
              </div>
            </div>

            {/* CTA Footer Button */}
            <div className="p-4 bg-white border-t border-outline-variant/10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:scale-98 text-white py-2.5 px-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-md shadow-emerald-500/15 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <Send className="w-4 h-4 rotate-180" />
                <span>ابدأ المحادثة المباشرة الآن</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center">
        {/* Tooltip / Prompt bubble */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -15, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -15, scale: 0.95 }}
              transition={{ delay: 0.2 }}
              className="absolute right-16 bottom-1 whitespace-nowrap bg-stone-900 text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-xl border border-white/5 flex items-center gap-2 z-10"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>هل لديك أي استفسار؟ تواصل معنا عبر واتساب</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="text-white/40 hover:text-white p-0.5 rounded-full transition-colors"
                aria-label="إغلاق التنبيه"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Trigger Button */}
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer relative z-20 ${
            isOpen 
              ? 'bg-stone-900 text-luxury-gold ring-2 ring-luxury-gold/50' 
              : 'bg-emerald-500 hover:bg-emerald-600 text-white hover:shadow-emerald-500/30'
          }`}
          aria-label="تواصل معنا عبر واتساب"
        >
          {/* Pulsing ring behind button to attract attention */}
          {!isOpen && (
            <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping -z-10" />
          )}

          {isOpen ? (
            <motion.div
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              {/* Official brand SVG icon for absolute perfection */}
              <svg 
                className="w-8 h-8 fill-current" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.div>
          )}
        </motion.button>
      </div>
    </div>
  );
}
