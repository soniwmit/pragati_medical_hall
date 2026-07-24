import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, Upload } from 'lucide-react';
import { STORE_INFO } from '../data/pharmacyData';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-slate-900/90 dark:bg-slate-100/90 text-white dark:text-slate-900 shadow-xl hover:scale-110 active:scale-95 transition backdrop-blur-md"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Upload Prescription Floating Quick Button */}
      <button
        onClick={onOpenWhatsAppModal}
        className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs shadow-lg hover:shadow-sky-500/25 transition hover:scale-105 active:scale-95 backdrop-blur-md border border-sky-400/30"
        title="Upload Prescription"
      >
        <Upload className="w-4 h-4" />
        <span className="hidden sm:inline">Upload Prescription</span>
      </button>

      {/* Floating Call Now Button */}
      <a
        href={`tel:${STORE_INFO.phone}`}
        className="pointer-events-auto flex items-center justify-center p-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl hover:shadow-blue-500/30 transition hover:scale-110 active:scale-95 border border-blue-400/30"
        title={`Call ${STORE_INFO.name} (${STORE_INFO.phone})`}
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 animate-pulse" />
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenWhatsAppModal}
        className="pointer-events-auto flex items-center justify-center p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:shadow-emerald-500/40 transition hover:scale-110 active:scale-95 border border-emerald-300/40 animate-pulse-subtle"
        title="WhatsApp Order & Support"
        aria-label="WhatsApp Order"
      >
        <MessageSquare className="w-7 h-7" />
      </button>
    </div>
  );
};
