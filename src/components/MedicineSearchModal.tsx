import React, { useState } from 'react';
import { Search, X, Pill, ShieldCheck, ShoppingBag, Filter, AlertCircle } from 'lucide-react';
import { SAMPLE_PRODUCTS, MEDICINE_CATEGORIES } from '../data/pharmacyData';
import { MedicineProduct } from '../types';

interface MedicineSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMedicineForWhatsApp: (medicineName: string) => void;
}

export const MedicineSearchModal: React.FC<MedicineSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMedicineForWhatsApp
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [rxFilter, setRxFilter] = useState<'all' | 'rx' | 'otc'>('all');

  if (!isOpen) return null;

  const filteredProducts = SAMPLE_PRODUCTS.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.uses.some(u => u.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesRx = 
      rxFilter === 'all' ? true :
      rxFilter === 'rx' ? product.requiresPrescription :
      !product.requiresPrescription;

    return matchesSearch && matchesCategory && matchesRx;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[85vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Search Header Bar */}
        <div className="p-4 md:p-6 border-b border-slate-100 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#0A8F6A]">
              <Pill className="w-6 h-6" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Medicine & Health Product Finder
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input Box */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
            <input
              type="text"
              autoFocus
              placeholder="Search by medicine name, composition (e.g. Paracetamol), brand, or symptom..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="flex items-center gap-1 font-semibold text-slate-500 dark:text-slate-400 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>

            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-lg transition font-medium ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              All Items
            </button>

            {MEDICINE_CATEGORIES.slice(0, 5).map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3 py-1 rounded-lg transition font-medium ${
                  selectedCategory.toLowerCase() === cat.name.toLowerCase()
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}

            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-1 hidden sm:block" />

            <button
              onClick={() => setRxFilter(rxFilter === 'rx' ? 'all' : 'rx')}
              className={`px-2.5 py-1 rounded-lg border transition font-medium ${
                rxFilter === 'rx'
                  ? 'bg-sky-100 border-sky-400 text-sky-800 dark:bg-sky-950 dark:text-sky-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              Rx Required
            </button>

            <button
              onClick={() => setRxFilter(rxFilter === 'otc' ? 'all' : 'otc')}
              className={`px-2.5 py-1 rounded-lg border transition font-medium ${
                rxFilter === 'otc'
                  ? 'bg-emerald-100 border-emerald-400 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              OTC / Direct
            </button>
          </div>
        </div>

        {/* Product Results List */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Pill className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                No matching product found in quick list
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Don't worry! We stock over 5,000+ prescription medicines at our Kurtha store. You can inquire directly on WhatsApp.
              </p>
              <button
                onClick={() => {
                  onSelectMedicineForWhatsApp(searchQuery || 'Custom Medicine Inquiry');
                  onClose();
                }}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A8F6A] text-white rounded-xl text-sm font-semibold shadow hover:bg-emerald-700 transition"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Inquire "{searchQuery || 'Medicine'}" on WhatsApp</span>
              </button>
            </div>
          ) : (
            filteredProducts.map(product => (
              <div
                key={product.id}
                className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 hover:border-emerald-200 dark:hover:border-emerald-800/50 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 rounded-xl bg-emerald-50 dark:bg-slate-700 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {product.name}
                      </h4>
                      {product.requiresPrescription ? (
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-sky-100 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300">
                          Rx Required
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                          OTC
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      <strong>Brand:</strong> {product.brand} | <strong>Form:</strong> {product.dosageForm}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      {product.composition}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200 dark:border-slate-700">
                  <div className="text-left sm:text-right">
                    <div className="text-lg font-extrabold text-[#0A8F6A] dark:text-emerald-400">
                      ₹{product.discountPrice}
                    </div>
                    {product.mrp > product.discountPrice && (
                      <div className="text-xs text-slate-400 line-through">
                        MRP ₹{product.mrp}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      onSelectMedicineForWhatsApp(product.name);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow transition"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer info */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Need custom prescription verification? Visit Pragati Medical Hall front of Sadar Hospital, Kurtha.</span>
        </div>
      </div>
    </div>
  );
};
