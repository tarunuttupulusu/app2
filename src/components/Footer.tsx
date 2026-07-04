import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-[#F6EFE3]/80 border-t border-brand-gold/15 py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative luxury gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand Info */}
        <div className="flex flex-col space-y-6">
          <Link to="/" className="flex flex-col items-start leading-none group">
            <span className="font-telugu text-2xl text-brand-bg font-bold group-hover:text-brand-accent transition-colors duration-300">
              బాలాజీ సంతోష్
            </span>
            <span className="font-display tracking-widest text-[9px] uppercase font-semibold text-brand-gold ml-0.5 mt-1">
              BALAJI SANTOSH
            </span>
          </Link>
          <p className="font-sans text-sm leading-relaxed text-[#F6EFE3]/60">
            Serving the finest vegetarian culinary delights in Moinabad. Famous for our Butter Naan, Paneer Butter Masala, and welcoming atmosphere.
          </p>
          <div className="flex space-x-4">
            <a href="tel:+919849498681" className="w-9 h-9 flex items-center justify-center rounded-full border border-brand-bg/15 hover:border-brand-gold hover:text-brand-gold transition-all duration-300" aria-label="Call Balaji Restaurant">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.62 4c0-.55-.45-1-1-1H4.11c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.62c0-.55-.45-1-1-1z" />
              </svg>
            </a>
            <a href="https://wa.me/919849498681?text=Hi%20Balaji%20Santosh%20Family%20Dhaba!%20I'd%20like%20to%20make%20an%20inquiry." target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-brand-bg/15 hover:border-brand-gold hover:text-brand-gold transition-all duration-300" aria-label="WhatsApp Balaji Restaurant">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.66.986 3.288 1.488 4.793 1.49 5.485.002 9.953-4.462 9.956-9.943.002-2.656-1.03-5.153-2.905-7.03C16.61 1.83 14.117.794 11.46.794 5.976.794 1.508 5.26 1.505 10.744c-.001 1.624.425 3.208 1.232 4.606l-.997 3.639 3.731-.978c1.378.75 2.766 1.145 3.576.743zm11.306-6.85c-.279-.14-1.647-.812-1.9-.904-.253-.092-.438-.138-.621.14-.183.279-.708.904-.868 1.088-.16.184-.32.207-.6.066-.279-.14-1.18-.435-2.247-1.388-.83-.74-1.39-1.653-1.553-1.93-.163-.279-.018-.43.12-.569.127-.123.279-.323.418-.484.14-.16.187-.274.28-.458.093-.184.047-.346-.023-.485-.07-.14-.621-1.498-.85-2.05-.224-.54-.447-.466-.621-.475-.16-.008-.344-.01-.528-.01s-.484.068-.737.346c-.253.279-.966.945-.966 2.302 0 1.358.989 2.668 1.127 2.852.138.184 1.944 2.97 4.71 4.164.658.284 1.172.454 1.572.58.66.21 1.26.18 1.733.11.528-.078 1.647-.674 1.88-1.325.233-.65.233-1.21.164-1.325-.07-.11-.253-.18-.532-.32z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-display text-lg font-bold tracking-wider text-brand-bg border-b border-brand-gold/15 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-3 font-sans text-sm">
            <li>
              <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-brand-gold transition-colors">Interactive Menu</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-brand-gold transition-colors">Our Heritage</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-brand-gold transition-colors">Photo Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand-gold transition-colors">Find Us & Contact</Link>
            </li>
          </ul>
        </div>

        {/* Operating Hours & Services */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-display text-lg font-bold tracking-wider text-brand-bg border-b border-brand-gold/15 pb-2">
            Opening Hours
          </h4>
          <ul className="space-y-3 font-sans text-sm text-[#F6EFE3]/70">
            <li className="flex items-start space-x-3">
              <Clock size={16} className="text-brand-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-brand-bg">Daily Operation</p>
                <p className="text-xs text-[#F6EFE3]/50">11:00 AM – 11:00 PM</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Compass size={16} className="text-brand-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-brand-bg">Services Available</p>
                <p className="text-xs text-[#F6EFE3]/50">Dine In • Takeaway • Delivery</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact details */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-display text-lg font-bold tracking-wider text-brand-bg border-b border-brand-gold/15 pb-2">
            Location & Contact
          </h4>
          <ul className="space-y-3 font-sans text-sm text-[#F6EFE3]/70">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
              <span>4-15/2part, Aziz Nagar, Himayat Sagar Rd, Moinabad, Telangana 500075</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-brand-gold shrink-0" />
              <a href="tel:+919849498681" className="hover:text-brand-gold transition-colors">098494 98681</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#F6EFE3]/10 flex flex-col sm:flex-row justify-between items-center text-xs text-[#F6EFE3]/40 font-sans">
        <p>© {currentYear} Balaji Santosh Family Dhaba. All Rights Reserved.</p>
        <p className="mt-2 sm:mt-0">Designed and Developed to Perfection.</p>
      </div>
    </footer>
  );
};
