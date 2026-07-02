import React from 'react';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg noise-overlay min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Page Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Our Heritage</span>
          <h1 className="font-display text-4xl md:text-7xl font-black text-brand-dark mt-4 leading-tight">
            Crafting the Spirit <br/>
            of Hyderabadi Hospitality
          </h1>
        </div>

        {/* First split story layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <h2 className="font-display text-2xl md:text-4xl font-extrabold text-brand-dark mb-6">
              The Charcoal, The Saffron, & The Ghee
            </h2>
            <div className="space-y-6 text-sm md:text-base text-brand-dark/75 font-sans leading-relaxed">
              <p>
                Founded on the values of traditional hospitality, Ustaads was established to safeguard the culinary integrity of Hyderabadi cuisine. Nestled in Moinabad, our restaurant recreates the royal kitchens of the Nizams, where cooking was treated as an artistic pursuit.
              </p>
              <p>
                We do not cut corners. Our signature biryanis are prepared in small batches using premium long-grain Basmati rice, layered meticulously with tender cuts of meat and hand-ground spice mixtures, and cooked over slow-burning wood charcoal.
              </p>
              <div className="border-l-4 border-brand-accent pl-6 py-2 my-8">
                <p className="font-display italic text-brand-dark/90 font-medium">
                  // TODO: Client will provide brand story. We will incorporate detailed archives, historical reference nodes, and the owner's personal quote here.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 order-1 lg:order-2 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80" 
              alt="Ustaads Charcoal Dum cooking process" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* Second split story layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80" 
              alt="Premium spices and ingredients at Ustaads" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <h2 className="font-display text-2xl md:text-4xl font-extrabold text-brand-dark mb-6">
              Our Culinary Philosophy
            </h2>
            <div className="space-y-6 text-sm md:text-base text-brand-dark/75 font-sans leading-relaxed">
              <p>
                To maintain the authentic flavors, our chefs grind spice blends daily. From the fiery Mirchi Ka Salan to the sweet fragrance of the Sufiyana Veg Biryani, every ingredient has a designated purpose.
              </p>
              <p>
                Our dedication extends beyond food; we prioritize environment-friendly cooking methods, inclusive workplace policies, and direct sourcing from local farmers to support our community in Hyderabad.
              </p>
              <div className="border-l-4 border-brand-accent pl-6 py-2 my-8">
                <p className="font-display italic text-brand-dark/90 font-medium">
                  // TODO: Client will provide brand story. We will highlight chef background details, qualifications, and our commitment to hygiene standards.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand values / stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-brand-dark text-[#F6EFE3] p-12 rounded-2xl"
        >
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl font-black text-brand-gold">4.8 ★</p>
            <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#F6EFE3]/50 mt-2">Google Rating</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl font-black text-brand-gold">1,110+</p>
            <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#F6EFE3]/50 mt-2">Happy Reviews</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl font-black text-brand-gold">100%</p>
            <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#F6EFE3]/50 mt-2">Authentic Spices</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl font-black text-brand-gold">Moinabad</p>
            <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#F6EFE3]/50 mt-2">Flagship Location</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
