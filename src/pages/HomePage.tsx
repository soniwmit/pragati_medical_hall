import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  UserCheck, 
  Tag, 
  Zap, 
  FileText, 
  Stethoscope, 
  ChevronDown, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Upload,
  Search,
  Sparkles,
  Pill,
  Clock,
  ExternalLink,
  Award,
  HeartPulse,
  Activity,
  Baby,
  Droplet,
  Dumbbell,
  Shield,
  Accessibility,
  Store,
  FileUp,
  PackageCheck,
  CreditCard,
  Building
} from 'lucide-react';
import { 
  STORE_INFO, 
  WHY_CHOOSE_US_CARDS, 
  SERVICES_LIST, 
  MEDICINE_CATEGORIES, 
  WORKING_PROCESS_STEPS, 
  CUSTOMER_TESTIMONIALS, 
  PHARMACY_FAQS 
} from '../data/pharmacyData';
import { PageTab } from '../types';

interface HomePageProps {
  onNavigate: (page: PageTab) => void;
  onOpenWhatsAppModal: () => void;
  onOpenSearch: () => void;
  onSelectCategoryFilter: (categoryName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenWhatsAppModal,
  onOpenSearch,
  onSelectCategoryFilter
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return <Pill className="w-6 h-6" />;
      case 'PillBottle': return <Pill className="w-6 h-6" />;
      case 'Syringe': return <Activity className="w-6 h-6" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Baby': return <Baby className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Accessibility': return <Accessibility className="w-6 h-6" />;
      case 'Droplet': return <Droplet className="w-6 h-6" />;
      default: return <Pill className="w-6 h-6" />;
    }
  };

  const getWhyChooseIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6" />;
      case 'Tag': return <Tag className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'MessageCircle': return <MessageSquare className="w-6 h-6" />;
      default: return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      
      {/* 2. BENTO GRID MAIN HERO & DASHBOARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        
        {/* Top Bento Row */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          
          {/* Card 1: Hero Main Bento Card (8 Cols) */}
          <div className="col-span-12 lg:col-span-8 bento-card bg-gradient-to-br from-[#0056B3] via-[#004898] to-[#003B7A] text-white p-6 sm:p-10 justify-between min-h-[380px] shadow-xl">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
              EST. 1998
            </div>

            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Trusted Pharmacy in Kurtha
              </span>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none">
                Pragati<br />Medical Hall
              </h1>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed opacity-95">
                Providing 100% genuine medicines, hospital surgical supplies, baby care products, and healthcare equipment at fair prices right in front of Sadar Hospital, Kurtha.
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="pt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenWhatsAppModal}
                className="px-5 py-3 rounded-full bg-[#0A8F6A] hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </button>

              <a
                href={STORE_INFO.googleMapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-white text-[#0056B3] hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <MapPin className="w-4 h-4 text-[#0056B3]" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phone}`}
                className="px-5 py-3 rounded-full bg-slate-900/40 hover:bg-slate-900/60 text-white border border-white/20 font-bold text-xs sm:text-sm transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {STORE_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenSearch}
                className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs transition flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search Medicine</span>
              </button>
            </div>
          </div>

          {/* Card 2: Services Bento Card (4 Cols) */}
          <div className="col-span-12 lg:col-span-4 bento-card justify-between border border-blue-100 dark:border-slate-700 bg-white dark:bg-slate-800">
            <div>
              <span className="section-label">Our Expert Services</span>
              
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Prescription Drugs",
                  "Baby Care Products",
                  "OTC Medicines",
                  "Health Supplements",
                  "First Aid Kits",
                  "Surgical Items",
                  "BP Monitors",
                  "Personal Hygiene"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <span className="dot" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
              <p>Need urgent surgical or hospital supply?</p>
              <a href={`tel:${STORE_INFO.phone}`} className="font-bold text-[#0056B3] dark:text-sky-400 hover:underline block mt-0.5">
                Call Direct: {STORE_INFO.phone}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bento Row */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 mt-4 sm:mt-6">
          
          {/* Card 3: Trust Metrics Green Bento Card (3 Cols) */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 bento-card bg-[#0A8F6A] text-white justify-between">
            <div>
              <span className="section-label" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Why Choose Us
              </span>

              <div className="space-y-4 pt-2">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">100% Genuine</h3>
                  <span className="text-xs text-emerald-100 opacity-90 block mt-0.5">
                    Certified & Verified Medicines
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight">14+ Years</h3>
                  <span className="text-xs text-emerald-100 opacity-90 block mt-0.5">
                    Trusted Healthcare in Kurtha
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight">30-Sec Order</h3>
                  <span className="text-xs text-emerald-100 opacity-90 block mt-0.5">
                    Instant WhatsApp Prescription Photo Upload
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenWhatsAppModal}
              className="mt-6 py-2.5 px-4 rounded-xl bg-white text-[#0A8F6A] font-bold text-xs hover:bg-emerald-50 transition text-center shadow"
            >
              Order via WhatsApp
            </button>
          </div>

          {/* Card 4: Shop Categories Bento Grid (6 Cols) */}
          <div className="col-span-12 md:col-span-8 lg:col-span-6 bento-card justify-between bg-white dark:bg-slate-800">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="section-label mb-0">Shop by Category</span>
                <button
                  onClick={onOpenSearch}
                  className="text-xs font-bold text-[#0056B3] dark:text-sky-400 hover:underline"
                >
                  View All ({MEDICINE_CATEGORIES.length}) →
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                {[
                  { name: "Tablets", icon: "💊" },
                  { name: "Skin Care", icon: "🧴" },
                  { name: "Baby Care", icon: "🍼" },
                  { name: "Vitamins", icon: "🍎" },
                  { name: "Orthopedic", icon: "🩻" },
                  { name: "Injections", icon: "💉" },
                  { name: "Equipment", icon: "🩺" },
                  { name: "Syrups", icon: "🍯" },
                  { name: "Dental", icon: "🦷" },
                  { name: "Diabetic Care", icon: "🩸" },
                  { name: "First Aid", icon: "🩹" },
                  { name: "Diagnostics", icon: "🧪" },
                ].map((cat, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      onSelectCategoryFilter(cat.name);
                      onOpenSearch();
                    }}
                    className="cat-pill"
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span className="truncate">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 5: Store Info Bento Card (3 Cols) */}
          <div className="col-span-12 lg:col-span-3 bento-card justify-between bg-slate-50/70 dark:bg-slate-800/80 backdrop-blur-md">
            <div>
              <span className="section-label">Store Information</span>

              <div className="space-y-3 text-xs leading-relaxed text-slate-700 dark:text-slate-200 pt-1">
                <div>
                  <strong className="block text-slate-900 dark:text-white font-bold">Location:</strong>
                  <p className="text-slate-600 dark:text-slate-300">{STORE_INFO.address}</p>
                </div>

                <div>
                  <strong className="block text-slate-900 dark:text-white font-bold">Business Hours:</strong>
                  <p className="text-slate-600 dark:text-slate-300">{STORE_INFO.workingHours}</p>
                </div>

                <div>
                  <strong className="block text-slate-900 dark:text-white font-bold">Phone Support:</strong>
                  <a href={`tel:${STORE_INFO.phone}`} className="text-[#0056B3] dark:text-sky-400 font-bold hover:underline">
                    {STORE_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenWhatsAppModal}
              className="mt-4 w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow"
            >
              <Upload className="w-3.5 h-3.5 text-emerald-400" />
              <span>Send Prescription</span>
            </button>
          </div>

        </div>

      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Unmatched Pharmacy Quality
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Why Choose Pragati Medical Hall?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            We prioritize patient health, authentic drug sourcing, fair pricing, and compassionate medical service for every family in Kurtha.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-300 dark:hover:border-emerald-700 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.color} transition group-hover:scale-110`}>
                {getWhyChooseIcon(card.iconName)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR SERVICES SECTION */}
      <section className="bg-slate-50/80 dark:bg-slate-900/60 py-16 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                Complete Healthcare Care
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Our Healthcare & Pharmacy Services
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                From prescription dispensing to medical equipment, baby care, and surgical supplies—all under one roof.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold hover:bg-slate-800 dark:hover:bg-white transition self-start md:self-auto"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-400 shadow-sm hover:shadow-lg transition space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#0A8F6A] dark:text-emerald-400">
                      <Pill className="w-6 h-6" />
                    </div>
                    {service.isPopular && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 text-[10px] font-bold">
                        High Demand
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenWhatsAppModal}
                  className="w-full mt-4 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-700/60 hover:bg-[#0A8F6A] hover:text-white dark:hover:bg-[#0A8F6A] text-slate-700 dark:text-slate-200 text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FEATURED CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
            Explore Medicine Store
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Featured Medicine Categories
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Browse our wide selection of healthcare products, prescription lines, and baby care essentials.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {MEDICINE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={onOpenSearch}
              className="group cursor-pointer p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-full h-32 rounded-xl overflow-hidden mb-3 bg-slate-100 dark:bg-slate-700">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {cat.badge && (
                <span className="absolute top-6 right-6 px-2 py-0.5 rounded-full bg-[#0A8F6A] text-white text-[10px] font-extrabold shadow">
                  {cat.badge}
                </span>
              )}

              <div className="flex items-center gap-2 mb-1">
                <div className="text-[#0A8F6A] dark:text-emerald-400">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-[#0A8F6A] transition">
                  {cat.name}
                </h3>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                {cat.description}
              </p>

              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <span>{cat.itemCount}+ Items</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHY CUSTOMERS TRUST US */}
      <section className="bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-emerald-800/60 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-700">
              Pillars of Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Why Customers Trust Pragati Medical Hall
            </h2>
            <p className="text-emerald-100/80 text-sm">
              Building lasting health relationships in Kurtha through genuine care, expert knowledge, and fair dealing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Experienced Pharmacy",
                desc: "Over 14+ years serving Sadar Hospital patients with knowledgeable pharmacist consultation.",
                icon: <UserCheck className="w-8 h-8 text-emerald-400" />
              },
              {
                title: "Quality Medicines",
                desc: "100% genuine products sourced directly from authorized pharmaceutical stockists.",
                icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />
              },
              {
                title: "Quick Service",
                desc: "Fast counter handling and instant 30-second WhatsApp prescription ordering.",
                icon: <Zap className="w-8 h-8 text-emerald-400" />
              },
              {
                title: "Friendly Staff",
                desc: "Polite staff ready to guide you in Hindi and local language regarding proper dosage.",
                icon: <HeartPulse className="w-8 h-8 text-emerald-400" />
              },
              {
                title: "Reasonable Pricing",
                desc: "Genuine discounts and fair pricing on all branded and essential generic drugs.",
                icon: <Tag className="w-8 h-8 text-emerald-400" />
              },
              {
                title: "Convenient Location",
                desc: "Situated right in front of Sadar Hospital Kurtha main gate for easy patient access.",
                icon: <MapPin className="w-8 h-8 text-emerald-400" />
              }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-3 hover:bg-white/10 transition"
              >
                <div>{pillar.icon}</div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. WORKING PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Simple 4-Step Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            How to Order Medicines from Us
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Getting your prescribed medicines at Pragati Medical Hall is fast and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKING_PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-4 relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-[#0A8F6A] dark:text-emerald-400">
                  {step.stepNumber}
                </span>
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600">
                  {idx === 0 && <Store className="w-6 h-6" />}
                  {idx === 1 && <FileUp className="w-6 h-6" />}
                  {idx === 2 && <PackageCheck className="w-6 h-6" />}
                  {idx === 3 && <CreditCard className="w-6 h-6" />}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CUSTOMER TESTIMONIALS */}
      <section className="bg-slate-50/80 dark:bg-slate-900/60 py-16 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Real Local Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              What Our Customers Say
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Read feedback from Kurtha residents, teachers, visiting doctors, and Sadar Hospital patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOMER_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center gap-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-emerald-300"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1">
                      <span>{t.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {t.role} • {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Answers to common queries regarding medicine availability, prescription rules, and WhatsApp delivery in Kurtha.
          </p>
        </div>

        <div className="space-y-3">
          {PHARMACY_FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-[#0A8F6A] dark:hover:text-emerald-400 transition"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#0A8F6A] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/60 leading-relaxed bg-slate-50/50 dark:bg-slate-800/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. GOOGLE MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 p-6 sm:p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Store Location
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Visit Pragati Medical Hall in Kurtha
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We are conveniently positioned directly in front of Sadar Hospital Main Gate in Kurtha, Bihar. Easy parking and instant counter access available.
            </p>

            <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0A8F6A] shrink-0 mt-0.5" />
                <span><strong>Address:</strong> {STORE_INFO.address}</span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#0A8F6A] shrink-0 mt-0.5" />
                <span><strong>Hours:</strong> {STORE_INFO.workingHours}</span>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#0A8F6A] shrink-0 mt-0.5" />
                <span><strong>Phone:</strong> {STORE_INFO.phone}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={STORE_INFO.googleMapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0A8F6A] hover:bg-[#077355] text-white rounded-xl text-xs font-bold shadow transition"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in Google Maps App</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <iframe
              title="Pragati Medical Hall Location Map"
              src={STORE_INFO.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      {/* 11. CONTACT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0A8F6A] via-teal-700 to-emerald-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-2 max-w-xl z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need Medicines Urgently?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base">
              Call us or WhatsApp us now. Our team is ready to verify your prescription and pack your order immediately.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 z-10">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="flex items-center gap-2 px-6 py-3.5 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-sm shadow transition hover:scale-105"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call ({STORE_INFO.phone})</span>
            </a>

            <button
              onClick={onOpenWhatsAppModal}
              className="flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow transition hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Order</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
