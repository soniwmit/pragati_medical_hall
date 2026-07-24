/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { SeoHead } from './components/SeoHead';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { MedicineSearchModal } from './components/MedicineSearchModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { ChevronRight, Home, Cross } from 'lucide-react';
import { STORE_INFO } from './data/pharmacyData';
import { useTracker } from './hooks/useTracker';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageTab>('home');
  useTracker(currentPage);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pragati_theme');
      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Sync dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('pragati_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('pragati_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const handleOpenWhatsAppForMedicine = (medicineName: string) => {
    setPrefilledMedicine(medicineName);
    setWhatsappModalOpen(true);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenWhatsAppModal={() => {
              setPrefilledMedicine('');
              setWhatsappModalOpen(true);
            }}
            onOpenSearch={() => setSearchModalOpen(true)}
            onSelectCategoryFilter={(cat) => {
              setSearchModalOpen(true);
            }}
          />
        );
      case 'about':
        return (
          <AboutPage
            onOpenWhatsAppModal={() => {
              setPrefilledMedicine('');
              setWhatsappModalOpen(true);
            }}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onOpenWhatsAppModal={() => {
              setPrefilledMedicine('');
              setWhatsappModalOpen(true);
            }}
          />
        );
      case 'gallery':
        return (
          <GalleryPage
            onOpenWhatsAppModal={() => {
              setPrefilledMedicine('');
              setWhatsappModalOpen(true);
            }}
          />
        );
      case 'testimonials':
      case 'faq':
        // Scroll directly to testimonial or FAQ section on Home or load focused view
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenWhatsAppModal={() => {
              setPrefilledMedicine('');
              setWhatsappModalOpen(true);
            }}
            onOpenSearch={() => setSearchModalOpen(true)}
            onSelectCategoryFilter={() => setSearchModalOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onOpenWhatsAppModal={() => {
              setPrefilledMedicine('');
              setWhatsappModalOpen(true);
            }}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenWhatsAppModal={() => {
              setPrefilledMedicine('');
              setWhatsappModalOpen(true);
            }}
            onOpenSearch={() => setSearchModalOpen(true)}
            onSelectCategoryFilter={() => setSearchModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFB] dark:bg-[#0B131B] text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      
      {/* Dynamic SEO Meta & Schema Head Manager */}
      <SeoHead currentPage={currentPage} />

      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenWhatsAppModal={() => {
          setPrefilledMedicine('');
          setWhatsappModalOpen(true);
        }}
      />

      {/* Breadcrumb Navigation Bar for subpages */}
      {currentPage !== 'home' && (
        <div className="bg-slate-100 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
            <button
              onClick={() => {
                setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1 hover:text-[#0A8F6A] transition"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="capitalize text-[#0A8F6A] dark:text-emerald-400 font-bold">
              {currentPage}
            </span>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {renderPageContent()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenWhatsAppModal={() => {
          setPrefilledMedicine('');
          setWhatsappModalOpen(true);
        }}
      />

      {/* Floating Action Buttons */}
      <FloatingActions
        onOpenWhatsAppModal={() => {
          setPrefilledMedicine('');
          setWhatsappModalOpen(true);
        }}
      />

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={whatsappModalOpen}
        onClose={() => setWhatsappModalOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

      {/* Medicine Live Search Modal */}
      <MedicineSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectMedicineForWhatsApp={handleOpenWhatsAppForMedicine}
      />

    </div>
  );
}
