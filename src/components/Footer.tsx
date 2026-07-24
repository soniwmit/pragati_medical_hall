import React, { useState } from 'react';
import { 
  Cross, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { STORE_INFO } from '../data/pharmacyData';
import { PageTab } from '../types';

interface FooterProps {
  onNavigate: (page: PageTab) => void;
  onOpenWhatsAppModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenWhatsAppModal }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Business Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] flex items-center justify-center text-white">
                <Cross className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {STORE_INFO.name}
                </h3>
                <p className="text-xs text-emerald-400 font-semibold">
                  New Pragati Medical
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {STORE_INFO.tagline}. Providing authentic prescription medicines, baby care, surgical items, and healthcare essentials right opposite Sadar Hospital in Kurtha.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 text-xs font-semibold border border-emerald-800/60">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Licensed Retail Pharmacy</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#0A8F6A] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Our Pharmacy' },
                { id: 'services', label: 'Healthcare Services' },
                { id: 'gallery', label: 'Store Photo Gallery' },
                { id: 'testimonials', label: 'Customer Reviews' },
                { id: 'faq', label: 'Pharmacy FAQs' },
                { id: 'contact', label: 'Contact & Directions' }
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id as PageTab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-emerald-400 transition flex items-center gap-1.5 py-1 text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 text-[#0A8F6A]" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Working Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#0A8F6A] pl-2.5">
              Contact & Store Hours
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-emerald-400 font-semibold">
                  {STORE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <button onClick={onOpenWhatsAppModal} className="hover:text-emerald-400 font-semibold text-left">
                  WhatsApp: +91 9931796070
                </button>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">{STORE_INFO.workingHours}</p>
                  <p className="text-[11px] text-emerald-400">{STORE_INFO.emergencyHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Location & WhatsApp CTA */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#0A8F6A] pl-2.5">
              Order or Visit Us
            </h4>
            
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-3">
              <p className="text-xs text-slate-300">
                Need urgent medicines delivered in Kurtha or at Sadar Hospital? Send prescription on WhatsApp.
              </p>

              <button
                onClick={onOpenWhatsAppModal}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0A8F6A] hover:bg-[#077355] text-white rounded-lg font-bold text-xs shadow transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order Now</span>
              </button>

              <a
                href={STORE_INFO.googleMapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg font-semibold text-xs transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Prescription Disclaimer Banner */}
        <div className="my-6 p-3 bg-slate-800/50 rounded-xl border border-slate-800 flex items-start gap-2 text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong>Medical Disclaimer:</strong> Pragati Medical Hall is a licensed pharmacy operating in compliance with Drugs and Cosmetics Act. Schedule H, H1, and X medicines are strictly dispensed upon presentation of a valid doctor's prescription.
          </p>
        </div>

        {/* Local SEO Keywords Footer Tags */}
        <div className="pt-4 pb-6 border-b border-slate-800/60 text-[11px] text-slate-500 leading-relaxed">
          <span className="font-semibold text-slate-400">Popular Local Searches: </span>
          Pragati Medical Hall Kurtha • New Pragati Medical Store • Pharmacy in front of Sadar Hospital Kurtha • Medicine Shop Kurtha Bihar • Genuine Medicines Kurtha • Oxygen Meter & BP Machine Kurtha • WhatsApp Medicine Delivery Kurtha 804421.
        </div>

        {/* Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {STORE_INFO.name} ({STORE_INFO.altName}). All rights reserved. Developed by{' '}
            <a
              href="https://main.webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold underline transition"
            >
              WMIT
            </a>
            .
          </p>

          <div className="flex items-center gap-4">
            <button onClick={() => setModalType('privacy')} className="hover:text-emerald-400 transition">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => setModalType('terms')} className="hover:text-emerald-400 transition">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => setModalType('disclaimer')} className="hover:text-emerald-400 transition">
              Pharmacy Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Legal Info Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-lg w-full text-slate-200 text-sm space-y-4">
            <h3 className="text-xl font-bold text-white capitalize">
              {modalType === 'privacy' && 'Privacy Policy'}
              {modalType === 'terms' && 'Terms & Conditions'}
              {modalType === 'disclaimer' && 'Pharmacy Legal Disclaimer'}
            </h3>

            <div className="max-h-60 overflow-y-auto space-y-2 text-xs text-slate-300 pr-2">
              {modalType === 'privacy' && (
                <p>
                  Pragati Medical Hall respects your privacy. Any phone numbers, customer names, delivery addresses, or prescription images shared via our website or WhatsApp are kept strictly confidential and used solely for fulfilling your medicine orders. We do not share or sell your medical data to third parties.
                </p>
              )}
              {modalType === 'terms' && (
                <p>
                  By placing an order with Pragati Medical Hall, you confirm that you are providing accurate customer information and genuine prescriptions. All orders are subject to stock availability and pharmacist verification. Schedule H/X medicines will not be issued without a verified doctor's prescription.
                </p>
              )}
              {modalType === 'disclaimer' && (
                <p>
                  Information displayed on this website is for general informational and educational purposes only. It does not substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified registered medical practitioner regarding any health condition or prescription change.
                </p>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-[#0A8F6A] text-white rounded-lg text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
