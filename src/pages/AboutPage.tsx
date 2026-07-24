import React from 'react';
import { 
  Building, 
  Award, 
  ShieldCheck, 
  Heart, 
  Target, 
  Eye, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { STORE_INFO, TIMELINE_EVENTS, GALLERY_IMAGES } from '../data/pharmacyData';

interface AboutPageProps {
  onOpenWhatsAppModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* About Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            About Our Pharmacy
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Pragati Medical Hall
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto">
            {STORE_INFO.tagline}. Located right in front of Sadar Hospital, Kurtha, Bihar.
          </p>
        </div>
      </section>

      {/* Business Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Serving Kurtha Community Since 2012
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded in 2012 directly opposite Sadar Hospital, <strong>Pragati Medical Hall</strong> (also known as <em>New Pragati Medical</em>) was established with a clear mandate: to ensure every patient, hospital visitor, and resident in Kurtha receives authentic, high-grade medicines without delays or inflated costs.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Over the past decade, we have expanded from a single counter retail outlet to a modern healthcare hub housing prescription drugs, cold-chain biopharmaceuticals, digital BP equipment, infant food care, surgical consumables, and 30-second WhatsApp prescription fulfillment.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700">
                <div className="text-2xl font-black text-[#0A8F6A] dark:text-emerald-400">100%</div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-300">Authentic Certified Stock</div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700">
                <div className="text-2xl font-black text-[#0A8F6A] dark:text-emerald-400">10,000+</div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-300">Patients Served</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80"
                alt="Pragati Medical Hall store shelves and pharmacist desk"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Our Mission, Vision & Core Values
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Guiding principles that define our commitment to medical excellence and patient well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="p-3 w-12 h-12 rounded-xl bg-emerald-100 text-[#0A8F6A] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To deliver 100% genuine medicines, life-saving drugs, and medical equipment promptly to the people of Kurtha at fair and transparent prices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="p-3 w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the most trusted, accessible, and technologically enabled retail pharmacy network in Kurtha and Jehanabad district.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="p-3 w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Values</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Zero tolerance for counterfeit drugs, patient-first compassion, strict cold chain maintenance, and transparent pharmacist communication.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Owner & Pharmacist Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-emerald-400">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
              alt="Pharmacist & Owner Pragati Medical Hall"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-600">
              Licensed Pharmacist Message
            </span>
            <h3 className="text-2xl font-bold text-white">
              "Your Health & Peace of Mind are Our Primary Duty"
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
              At Pragati Medical Hall, we understand that medicine is not just another retail product—it is a critical element of healing. Whether you need an emergency injection for a loved one at Sadar Hospital or daily diabetic supplies, we ensure complete authenticity and empathetic guidance every single day.
            </p>
            <div className="pt-1 text-xs text-emerald-300 font-bold">
              — Registered Pharmacist & Management, Pragati Medical Hall Kurtha
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Pharmacy Milestones
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Key growth years of Pragati Medical Hall in Kurtha.
          </p>
        </div>

        <div className="relative border-l-2 border-emerald-300 dark:border-emerald-800 ml-4 sm:ml-32 space-y-8">
          {TIMELINE_EVENTS.map((event, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#0A8F6A] border-4 border-white dark:border-slate-900" />
              <div className="hidden sm:block absolute -left-32 top-0 text-sm font-black text-[#0A8F6A] dark:text-emerald-400">
                {event.year}
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-1">
                <span className="sm:hidden inline-block text-xs font-bold text-[#0A8F6A] mb-1">
                  Year {event.year}
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {event.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Store Photos Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Store Photos & Facilities
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.slice(0, 4).map(img => (
            <div key={img.id} className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 h-40">
              <img src={img.url} alt={img.title} className="w-full h-full object-cover hover:scale-105 transition" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
