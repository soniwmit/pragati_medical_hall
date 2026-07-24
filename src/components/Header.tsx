import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Search, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Cross, 
  Upload, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { STORE_INFO } from '../data/pharmacyData';
import { PageTab } from '../types';

interface HeaderProps {
  currentPage: PageTab;
  onNavigate: (page: PageTab) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSearch: () => void;
  onOpenWhatsAppModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  isDarkMode,
  onToggleDarkMode,
  onOpenSearch,
  onOpenWhatsAppModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page: PageTab) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      
      {/* 1. Top Emergency / Info Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white text-xs py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>FRONT OF SADAR HOSPITAL, Kurtha, Bihar 804421</span>
            </span>

            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{STORE_INFO.workingHours}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>100% Genuine Medicines</span>
            </span>

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-white transition font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {STORE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Brand Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0056B3] dark:bg-emerald-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition">
              <Cross className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-black tracking-tight text-[#0056B3] dark:text-white uppercase leading-tight">
                  PRAGATI MEDICAL
                </h1>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 dark:text-emerald-400 tracking-wide">
                Front of Sadar Hospital, Kurtha
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map(item => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition relative ${
                    isActive
                      ? 'text-[#0A8F6A] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0A8F6A] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Trigger Button */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Search Medicines"
              aria-label="Search Medicines"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Call Now Button (Desktop) */}
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold transition border border-slate-200 dark:border-slate-700"
            >
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp Button */}
            <button
              onClick={onOpenWhatsAppModal}
              className="hidden md:inline-flex items-center gap-1.5 py-2.5 px-4 bg-[#0A8F6A] hover:bg-[#077355] text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/20 transition hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>

            {/* Mobile Drawer Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={onOpenSearch}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold"
            >
              <Search className="w-4 h-4 text-emerald-600" />
              <span>Find Medicine</span>
            </button>

            <button
              onClick={onOpenWhatsAppModal}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold"
            >
              <Upload className="w-4 h-4 text-emerald-600" />
              <span>Rx Upload</span>
            </button>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {navItems.map(item => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between py-3 px-2 text-sm font-semibold transition ${
                    isActive
                      ? 'text-[#0A8F6A] dark:text-emerald-400 font-bold'
                      : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl font-bold text-xs"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Store</span>
            </a>

            <button
              onClick={() => {
                onOpenWhatsAppModal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-3 bg-[#0A8F6A] text-white rounded-xl font-bold text-xs shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
