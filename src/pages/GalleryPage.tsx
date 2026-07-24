import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/pharmacyData';
import { GalleryImage } from '../types';
import { X, ZoomIn, MessageSquare, Filter } from 'lucide-react';

interface GalleryPageProps {
  onOpenWhatsAppModal: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenWhatsAppModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const categories = ['All', 'Store Front', 'Medicine Shelves', 'Products', 'Medical Equipment', 'Staff & Care'];

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
          Visual Tour
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Pharmacy Photo Gallery
        </h1>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto">
          Take a look inside Pragati Medical Hall, our clean shelves, cold-chain refrigeration units, and healthcare devices.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeCategory === cat
                  ? 'bg-[#0A8F6A] text-white shadow'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => {
                setActiveImage(image);
                setIsZoomed(false);
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition relative"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white gap-2">
                  <ZoomIn className="w-6 h-6" />
                  <span className="text-xs font-bold">Click to Expand</span>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  {image.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#0A8F6A] transition">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox Popup */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col md:flex-row">
            
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-black/50 hover:bg-black/80 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[300px]">
              <img
                src={activeImage.url}
                alt={activeImage.alt}
                onClick={() => setIsZoomed(!isZoomed)}
                className={`max-h-[70vh] object-contain cursor-zoom-in transition duration-300 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
              />
            </div>

            <div className="md:w-2/5 p-6 flex flex-col justify-between text-white space-y-4">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                  {activeImage.category}
                </span>
                <h3 className="text-xl font-bold text-white pt-1">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeImage.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    setActiveImage(null);
                    onOpenWhatsAppModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#0A8F6A] hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire Medicine / Item on WhatsApp</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Tip: Click image to zoom in/out.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
