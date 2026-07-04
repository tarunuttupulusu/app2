import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_PHOTOS } from '../utils/menuData';

export const GalleryPage: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_PHOTOS.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-brand-bg noise-overlay min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Visual Archives</span>
          <h1 className="font-display text-4xl md:text-6xl font-black text-brand-dark mt-3">
            The Gallery
          </h1>
          <p className="text-brand-dark/70 font-sans text-sm md:text-base mt-4">
            A visual documentation of our craftsmanship, luxury ingredients, and royal presentation layouts.
          </p>
        </div>

        {/* Masonry Layout Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="break-inside-avoid relative overflow-hidden rounded-2xl bg-brand-dark cursor-pointer group shadow-sm hover:shadow-lg transition-shadow"
            >
              <img 
                src={photo.src} 
                alt={photo.title}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">Balaji Santosh Dhaba</p>
                  <p className="font-display font-bold text-[#F6EFE3] text-lg mt-1">{photo.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Placeholder Warning */}
        <div className="mt-16 text-center border-t border-brand-dark/10 pt-12">
          <p className="font-display italic text-brand-dark/50 text-sm">
            // TODO: Client will provide additional high-resolution images of interior layout, dining rooms, and chef preparations.
          </p>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedPhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-brand-dark/95 backdrop-blur-md flex items-center justify-center p-4"
            >
              <button 
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-brand-bg hover:text-brand-accent p-2 transition-colors z-55"
              >
                <X size={32} />
              </button>

              <button 
                onClick={prevPhoto}
                className="absolute left-6 text-brand-bg hover:text-brand-accent p-2 transition-colors z-55"
              >
                <ChevronLeft size={40} />
              </button>

              <button 
                onClick={nextPhoto}
                className="absolute right-6 text-brand-bg hover:text-brand-accent p-2 transition-colors z-55"
              >
                <ChevronRight size={40} />
              </button>

              <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
                <motion.img 
                  key={selectedPhotoIndex}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={GALLERY_PHOTOS[selectedPhotoIndex].src} 
                  alt={GALLERY_PHOTOS[selectedPhotoIndex].title}
                  className="max-w-full max-h-[70vh] rounded-lg object-contain shadow-2xl"
                />
                <p className="font-display text-[#F6EFE3] text-lg md:text-xl font-bold mt-6 text-center px-4">
                  {GALLERY_PHOTOS[selectedPhotoIndex].title}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
