import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: 'Catering', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', interest: 'Catering', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-brand-bg noise-overlay min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Get in Touch</span>
          <h1 className="font-display text-4xl md:text-6xl font-black text-brand-dark mt-3">
            Contact & Reservations
          </h1>
          <p className="text-brand-dark/70 font-sans text-sm md:text-base mt-4">
            Have questions about catering, private dining, or food recommendations? Our team is delighted to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-stretch">
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-brand-dark text-[#F6EFE3] p-8 md:p-12 rounded-2xl">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Direct Lines</span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold mt-3 mb-8">
                Connect With Ustaads
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-brand-gold mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6EFE3]/50">Address</h4>
                    <p className="text-sm mt-1">Plot 54, Street Number 1, Moinabad, Hyderabad, Telangana 500075</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-brand-gold mt-1 shrink-0" size={18} />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6EFE3]/50">Phone</h4>
                    <a href="tel:+919063878223" className="text-sm font-semibold hover:text-brand-gold mt-1 block">090638 78223</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-brand-gold mt-1 shrink-0" size={18} />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6EFE3]/50">Hours of Operation</h4>
                    <p className="text-sm mt-1">Daily: 12:00 PM – 11:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-brand-gold mt-1 shrink-0" size={18} />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6EFE3]/50">Email Support</h4>
                    <p className="text-sm mt-1">contact@ustaadsrestaurant.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#F6EFE3]/15">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Google Rating</h4>
              <p className="font-display text-2xl font-black text-[#F6EFE3] mt-1">4.8 ★ <span className="text-xs font-sans font-normal text-[#F6EFE3]/50">(1,110+ reviews)</span></p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#ECE3D4]/40 p-8 md:p-12 rounded-2xl border border-brand-dark/5 flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <CheckCircle2 size={56} className="text-green-600 mb-4" />
                <h3 className="font-display text-2xl font-bold text-brand-dark">Message Received Successfully!</h3>
                <p className="text-sm font-sans text-brand-dark/75 mt-2 max-w-sm">
                  Thank you for contacting Ustaads. Our events coordinator will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-brand-dark/65 mb-2">Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-brand-bg border border-brand-dark/15 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-brand-dark/65 mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-bg border border-brand-dark/15 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-brand-dark/65 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-bg border border-brand-dark/15 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-widest text-brand-dark/65 mb-2">Inquiry Type</label>
                  <select 
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-brand-bg border border-brand-dark/15 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-accent transition-colors"
                  >
                    <option value="Catering">Bulk Catering Inquiry</option>
                    <option value="TableBooking">Special Occasion Dining</option>
                    <option value="Feedback">Feedback / Suggestions</option>
                    <option value="General">Other Queries</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-brand-dark/65 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-bg border border-brand-dark/15 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-accent hover:bg-brand-accent/90 text-brand-bg font-bold uppercase tracking-wider text-xs py-4 rounded-xl shadow-md transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded styled Map */}
        <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-brand-dark/10 shadow-md">
          <iframe 
            title="Ustaads Location Map"
            src="https://maps.google.com/maps?q=Ustaads%20Best%20Hyderabadi%20Restaurant%20Caterers%20Moinabad%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
};
