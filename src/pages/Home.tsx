import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ArrowRight, 
  Star, 
  X, 
  Quote
} from 'lucide-react';
import { DishCard } from '../components/DishCard';
import { SIGNATURE_DISHES, SPECIAL_OFFERS, GALLERY_PHOTOS, TESTIMONIALS } from '../utils/menuData';

// ─── Circular Review Card ────────────────────────────────────────────────────────
interface CircularReviewCardProps {
  testimonial: typeof TESTIMONIALS[0];
  onClick: () => void;
}
const CircularReviewCard: React.FC<CircularReviewCardProps> = ({ testimonial, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -4 }}
      className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-[#F6EFE3] border border-brand-dark/15 shadow-md flex flex-col items-center justify-center p-8 text-center shrink-0 cursor-pointer select-none overflow-hidden group transition-all duration-300 hover:shadow-xl hover:border-brand-gold/45"
    >
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-gold/5 rounded-full blur-xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl pointer-events-none" />

      {/* Avatar in Gold Ring */}
      <div className="relative mb-3 shrink-0">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-brand-gold shadow-md"
        />
        <div className="absolute -bottom-1 right-0 bg-[#F6EFE3] text-brand-gold p-0.5 rounded-full border border-brand-gold/25 text-[8px] font-bold">
          ⭐
        </div>
      </div>

      <h4 className="font-display font-extrabold text-sm md:text-base text-brand-dark group-hover:text-brand-accent transition-colors mt-1">
        {testimonial.name}
      </h4>

      <p className="text-[9px] text-brand-olive uppercase tracking-widest font-semibold mt-0.5">
        {testimonial.source}
      </p>

      <p className="text-xs font-sans text-brand-dark/70 italic leading-relaxed mt-3 flex-grow line-clamp-3 max-w-[200px] md:max-w-[230px]">
        "{testimonial.content}"
      </p>

      <div className="flex gap-0.5 text-brand-gold mt-4 shrink-0">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={10} className="fill-current text-brand-gold" />
        ))}
      </div>
    </motion.div>
  );
};

// ─── Review Modal popup ──────────────────────────────────────────────────────────
interface ReviewModalProps {
  testimonial: typeof TESTIMONIALS[0];
  onClose: () => void;
}
const ReviewModal: React.FC<ReviewModalProps> = ({ testimonial, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4">
      {/* backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 bg-[#F6EFE3] rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl overflow-hidden border border-brand-dark/10"
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 40 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-brand-dark/10 hover:bg-brand-dark/20 text-brand-dark rounded-full p-2 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="absolute top-2 right-6 text-brand-gold/10 pointer-events-none select-none">
          <Quote size={100} />
        </div>

        <div className="text-center relative z-10">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full rounded-full object-cover border-4 border-brand-gold shadow-lg"
            />
            <span className="absolute bottom-0 right-0 bg-[#4285F4] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow border border-white">
              G
            </span>
          </div>

          <h3 className="font-display text-xl font-extrabold text-brand-dark">{testimonial.name}</h3>
          <p className="text-xs text-brand-olive font-semibold tracking-wider uppercase mt-1">
            {testimonial.role}
          </p>

          <div className="flex justify-center gap-1 my-4 text-brand-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < testimonial.rating ? 'fill-current text-brand-gold' : 'text-brand-dark/20'}
              />
            ))}
          </div>

          <p className="text-sm font-sans text-brand-dark/80 italic leading-relaxed my-6 bg-brand-dark/5 p-5 rounded-2xl border border-brand-dark/5 text-left">
            "{testimonial.content}"
          </p>

          <div className="flex justify-between items-center text-[10px] font-bold text-brand-dark/50 uppercase tracking-widest pt-4 border-t border-brand-dark/5">
            <span>Posted: {testimonial.date}</span>
            <span className="bg-brand-accent/15 text-brand-accent px-3 py-1 rounded-full">
              {testimonial.source}
            </span>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

export const Home: React.FC = () => {
  // Featured category index
  const [activeCategory, setActiveCategory] = useState('Soups & Starters');
  // Selected review for details modal
  const [selectedReview, setSelectedReview] = useState<typeof TESTIMONIALS[0] | null>(null);

  const categories = ['Soups & Starters', 'Main Course', 'Biryanis & Rice', 'Rotis & Breads'];
  const filteredDishes = SIGNATURE_DISHES.filter(dish => dish.category === activeCategory);

  return (
    <div className="relative bg-brand-bg noise-overlay min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
        {/* Cinematic Backdrop (Video for mobile, Image for desktop) */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1920&q=80" 
            alt="Balaji Santosh Family Dhaba Dining Background" 
            className="hidden md:block w-full h-full object-cover opacity-35 filter brightness-75 contrast-125"
          />

          {/* Mobile Background Video (YouTube Short) */}
          <div className="block md:hidden absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <iframe 
              src="https://www.youtube.com/embed/VRKIM1pytu8?autoplay=1&mute=1&loop=1&playlist=VRKIM1pytu8&playsinline=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0"
              title="Balaji Santosh Family Dhaba Background Video"
              className="absolute top-1/2 left-1/2 w-[100vw] h-[177.78vw] min-h-[100vh] min-w-[56.25vh] -translate-x-1/2 -translate-y-1/2 opacity-35 filter brightness-75 contrast-125"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
              style={{ border: 'none' }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-brand-dark/50 to-brand-dark" />
        </div>

        {/* BSD Logo — perfectly centered */}
        <div className="relative z-20 flex items-center justify-center w-full h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center"
          >
            <img
              src="/bsd-logo.png"
              alt="Balaji Santosh Dhaba Logo"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.5)]"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED DISHES SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Signature Selection</span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-brand-dark mt-3">
            Delicious Pure Vegetarian Cuisine
          </h2>
          <p className="text-brand-dark/70 font-sans text-sm md:text-base mt-4">
            Select a category below to explore our delicious Indian vegetarian options, freshly prepared with quality ingredients.
          </p>
        </div>

        {/* Filter categories tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-brand-accent text-[#F6EFE3] shadow-md shadow-brand-accent/20' 
                  : 'bg-brand-dark/5 text-brand-dark hover:bg-brand-dark/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid display of signature dishes */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish) => (
              <motion.div 
                key={dish.id} 
                layout 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <DishCard dish={dish} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>


      {/* 4. SPECIAL OFFERS SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Exclusive Indulgence</span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-brand-dark mt-3">
            Limited Time Promotions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SPECIAL_OFFERS.map((offer) => (
            <div 
              key={offer.id}
              className="relative rounded-2xl overflow-hidden min-h-[300px] flex items-center bg-brand-dark text-[#F6EFE3] group"
            >
              {/* Offer Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
              </div>

              {/* Offer Content */}
              <div className="relative z-10 p-8 md:p-12 max-w-md">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-accent text-brand-bg px-2.5 py-1 rounded-md">
                  {offer.badge}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold mt-4 text-[#F6EFE3]">
                  {offer.title}
                </h3>
                <p className="text-sm text-[#F6EFE3]/70 mt-2 font-sans">
                  {offer.description}
                </p>
                <div className="flex items-center space-x-6 mt-6">
                  <span className="font-display text-3xl font-black text-brand-gold">
                    {offer.price}
                  </span>
                  <Link 
                    to="/menu" 
                    className="text-xs font-bold uppercase tracking-widest bg-[#F6EFE3] text-brand-dark hover:bg-brand-accent hover:text-[#F6EFE3] px-6 py-3 rounded-full transition-colors duration-300"
                  >
                    {offer.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section className="py-24 bg-[#ECE3D4]/50 border-y border-brand-dark/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Grid */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4">
            <div className="col-span-8 rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80" 
                alt="Chef dum cooking" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="col-span-4 flex flex-col justify-end">
              <div className="rounded-2xl overflow-hidden aspect-square shadow-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80" 
                  alt="Fine dining spices" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-brand-dark text-[#F6EFE3] p-6 rounded-2xl text-center">
                <p className="font-display text-4xl font-extrabold text-brand-gold">4.1</p>
                <p className="text-[10px] font-sans font-bold uppercase tracking-widest mt-1 text-[#F6EFE3]/50">63 Google Reviews</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Our Heritage</span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-brand-dark mt-3 leading-tight">
              A Legacy of Culinary Royalty
            </h2>
            
            <p className="text-brand-dark/70 font-sans text-sm md:text-base mt-6 leading-relaxed">
              Balaji Santosh Family Dhaba (బాలాజీ సంతోష్ ఫ్యామిలీ ధాబా) is Moinabad's premier destination for pure vegetarian family dining. Located conveniently in Aziz Nagar, Himayat Sagar Road, Moinabad, we serve rich Paneer dishes, delicious soups, vegetarian biryanis, and hot tandoori flatbreads.
            </p>

            <div className="border-l-4 border-brand-accent pl-6 my-8 py-2">
              <p className="font-display italic text-brand-dark/85 text-base">
                "Awesome food taste... near Chilkur and peaceful atmosphere, 10 min from Outer Ring Road (ORR). Come and taste!"
              </p>
            </div>

            <div>
              <Link 
                to="/about" 
                className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-brand-accent hover:text-brand-dark transition-colors duration-300"
              >
                <span>Read Our Full Story</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PHOTO GALLERY SECTION */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Visual feast</span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-brand-dark mt-3">
              Capturing Culinary Art
            </h2>
          </div>
          <Link 
            to="/gallery" 
            className="group inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-brand-accent mt-4 md:mt-0"
          >
            <span>View Full Gallery</span>
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Infinite Auto-Scrolling Marquee (Left to Right) */}
        <div className="relative w-full flex overflow-x-hidden py-4">
          <motion.div 
            className="flex space-x-6 shrink-0 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >

            {/* Duplicated array to allow seamless scrolling wrap-around loop */}
            {[...GALLERY_PHOTOS, ...GALLERY_PHOTOS].map((photo, index) => (
              <div 
                key={`${photo.id}-${index}`}
                className="relative overflow-hidden rounded-2xl bg-brand-dark group aspect-square w-72 md:w-80 shrink-0 shadow-md"
              >
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="font-display font-bold text-[#F6EFE3] text-base leading-tight">
                    {photo.title}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section id="reviews" className="py-24 bg-[#ECE3D4]/50 border-t border-brand-dark/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Verified Feedback</span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-brand-dark mt-3">
              Words From Our Patrons
            </h2>
            <p className="text-xs text-brand-dark/50 uppercase tracking-widest font-semibold mt-2">
              Click any review card to read the full patron feedback
            </p>
          </div>
        </div>

        {/* Infinite Auto-Scrolling Marquee (Right to Left) */}
        <div className="relative w-full flex overflow-x-hidden py-6">
          <motion.div 
            className="flex space-x-8 shrink-0 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >

            {/* Duplicated array to allow seamless scrolling loop */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
              <CircularReviewCard 
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
                onClick={() => setSelectedReview(testimonial)}
              />
            ))}
          </motion.div>
        </div>

        {/* Review Lightbox Portal Modal */}
        <AnimatePresence>
          {selectedReview && (
            <ReviewModal 
              testimonial={selectedReview} 
              onClose={() => setSelectedReview(null)} 
            />
          )}
        </AnimatePresence>
      </section>

      {/* 8. LOCATION & MAP SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Map Contact Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Visit Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-dark mt-3">
              Welcome to Balaji Santosh Family Dhaba
            </h2>

            <div className="space-y-6 mt-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-brand-accent/10 text-brand-accent rounded-full mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark uppercase text-sm tracking-wider">Address</h4>
                  <p className="text-sm text-brand-dark/70 mt-1">
                    4-15/2part, Aziz Nagar, Himayat Sagar Rd, Moinabad, Telangana 500075
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-brand-accent/10 text-brand-accent rounded-full mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark uppercase text-sm tracking-wider">Phone</h4>
                  <a href="tel:+919849498681" className="text-sm text-brand-dark hover:text-brand-accent font-semibold transition-colors mt-1 block">
                    098494 98681
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-brand-accent/10 text-brand-accent rounded-full mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark uppercase text-sm tracking-wider">Operating Hours</h4>
                  <p className="text-sm text-brand-dark/70 mt-1">
                    Daily Operation: 11:00 AM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-8">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Balaji+Santosh+Family+Dhaba+Aziz+Nagar+Himayat+Sagar+Rd+Moinabad+Telangana" 
                target="_blank" 
                rel="noreferrer"
                className="bg-brand-accent hover:bg-brand-accent/90 text-brand-bg px-6 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs shadow-md transition-colors text-center"
              >
                Google Maps Navigation
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Balaji+Santosh+Family+Dhaba+Aziz+Nagar+Himayat+Sagar+Rd+Moinabad+Telangana" 
                target="_blank" 
                rel="noreferrer"
                className="border border-brand-dark/20 hover:border-brand-accent text-brand-dark hover:text-brand-accent px-6 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-colors text-center"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Embedded Styled Map simulation */}
          <div className="lg:col-span-7 h-[450px] w-full rounded-2xl overflow-hidden border border-brand-dark/15 shadow-lg relative bg-brand-dark/5">
            {/* Real embedded Google Map iframe for Balaji Santosh Family Dhaba */}
            <iframe 
              title="Balaji Santosh Family Dhaba Location Map"
              src="https://maps.google.com/maps?q=Balaji%20Santosh%20Family%20Dhaba%20Aziz%20Nagar%20Himayat%20Sagar%20Rd%20Moinabad%20Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            />
          </div>

        </div>
      </section>

    </div>
  );
};
