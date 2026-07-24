import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { STORE_INFO } from '../data/pharmacyData';

interface ContactPageProps {
  onOpenWhatsAppModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenWhatsAppModal }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Medicine Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: 'General Medicine Inquiry', message: '' });
    }, 4000);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Contact Pragati Medical Hall
        </h1>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto">
          Located FRONT OF SADAR HOSPITAL, Kurtha, Bihar 804421. Call us, visit us, or reach out on WhatsApp.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3">
                Business Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-[#0A8F6A] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Store Address</strong>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">{STORE_INFO.address}</p>
                    <p className="text-slate-400 text-xs">{STORE_INFO.locationLandmark}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Direct Phone</strong>
                    <a href={`tel:${STORE_INFO.phone}`} className="text-[#0A8F6A] font-bold hover:underline">
                      {STORE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-green-100 text-green-600 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white">WhatsApp Order Line</strong>
                    <button onClick={onOpenWhatsAppModal} className="text-[#0A8F6A] font-bold hover:underline text-left">
                      +91 9931796070
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-amber-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Working Hours</strong>
                    <p className="text-slate-600 dark:text-slate-300">{STORE_INFO.workingHours}</p>
                    <p className="text-emerald-600 font-semibold text-xs mt-0.5">{STORE_INFO.emergencyHours}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950 text-white space-y-4">
              <h4 className="font-bold text-base">Immediate Order Assistance</h4>
              <p className="text-xs text-slate-300">
                Sending your prescription via WhatsApp gets you instant price & stock confirmation.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="py-3 px-4 bg-white text-slate-900 rounded-xl font-bold text-xs text-center hover:bg-slate-100 transition"
                >
                  Call Store
                </a>
                <button
                  onClick={onOpenWhatsAppModal}
                  className="py-3 px-4 bg-[#0A8F6A] text-white rounded-xl font-bold text-xs text-center hover:bg-emerald-600 transition"
                >
                  WhatsApp Order
                </button>
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Have a non-urgent medicine query, bulk surgical requirement, or customer feedback? Fill out the form below.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                    Thank you for contacting Pragati Medical Hall. Our team will review your inquiry and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 09931796070"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      >
                        <option value="General Medicine Inquiry">General Medicine Availability</option>
                        <option value="Prescription Order">Prescription Drug Request</option>
                        <option value="Medical Equipment">BP / Glucometer / Equipment</option>
                        <option value="Surgical Items">Bulk Surgical Disposables</option>
                        <option value="Feedback">Feedback / Other</option>
                      </select>
                    </div>

                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Message / Medicine Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your questions or list required items..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#0A8F6A] hover:bg-[#077355] text-white font-bold text-sm rounded-xl shadow transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Embedded Map Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 h-80 shadow-md">
          <iframe
            title="Pragati Medical Hall Map"
            src={STORE_INFO.googleMapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

    </div>
  );
};
