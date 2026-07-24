import React from 'react';
import { 
  Pill, 
  FileCheck, 
  HeartPulse, 
  Baby, 
  Sparkles, 
  Stethoscope, 
  Scissors, 
  Bandage, 
  Droplet, 
  ShieldCheck, 
  MessageSquare,
  CheckCircle2,
  Cross
} from 'lucide-react';
import { SERVICES_LIST, STORE_INFO } from '../data/pharmacyData';

interface ServicesPageProps {
  onOpenWhatsAppModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
          Dedicated Healthcare Solutions
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Our Pharmacy Services
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Comprehensive prescription dispensing, hospital surgical supplies, diabetic care, and baby essentials at Pragati Medical Hall, Kurtha.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-400 shadow-md hover:shadow-xl transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-3.5 w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-[#0A8F6A] dark:text-emerald-400 flex items-center justify-center">
                  <Pill className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="pt-2 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Benefits & Features:
                  </span>
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                <button
                  onClick={onOpenWhatsAppModal}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0A8F6A] hover:bg-[#077355] text-white rounded-xl text-xs font-bold shadow transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order "{service.title}" via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Supply Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-bold text-base">Emergency Medicine Assistance</h4>
            <p className="text-xs">
              Direct emergency supply available for patients admitted at Sadar Hospital Kurtha.
            </p>
          </div>
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shrink-0 transition"
          >
            Call Hotline ({STORE_INFO.phone})
          </a>
        </div>
      </section>

    </div>
  );
};
