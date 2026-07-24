import React, { useState } from 'react';
import { X, MessageSquare, Phone, Upload, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/pharmacyData';
import { WhatsAppOrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: 'Kurtha, Bihar',
    medicineList: prefilledMedicine,
    hasPrescription: false,
    prescriptionFile: null,
    prescriptionFileName: '',
    preferredTime: 'As soon as possible',
    specialInstructions: ''
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        hasPrescription: true,
        prescriptionFile: file,
        prescriptionFileName: file.name
      }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.customerName || !formData.mobileNumber) {
      alert('Please fill in your Name and Mobile Number.');
      return;
    }

    // Format prefilled WhatsApp Message
    const formattedMessage = `Hello ${STORE_INFO.name}, I would like to order medicines.

*Customer Name:* ${formData.customerName}
*Phone:* ${formData.mobileNumber}
*Email:* ${formData.email || 'N/A'}
*Delivery Address:* ${formData.address}
*Medicine Required:* ${formData.medicineList || 'Prescription attached / to be shared'}
*Prescription Attached:* ${formData.hasPrescription ? 'Yes (Photo ready to attach)' : 'No'}
*Preferred Time:* ${formData.preferredTime}
*Message/Instructions:* ${formData.specialInstructions || 'None'}

Please confirm availability and price. Thank you!`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodedText}`;

    setIsSubmitted(true);
    
    // Open WhatsApp after short feedback
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-emerald-100 dark:border-slate-800 p-6 md:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="p-3 bg-emerald-100 dark:bg-emerald-950/60 rounded-xl text-emerald-600 dark:text-emerald-400">
            <MessageSquare className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              WhatsApp Medicine Order
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Direct order to {STORE_INFO.name} ({STORE_INFO.phone})
            </p>
          </div>
        </div>

        {isSubmitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="inline-flex p-4 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 rounded-full">
              <CheckCircle2 className="w-12 h-12 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Opening WhatsApp...
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              Your order details are formatted and ready. You will be redirected to WhatsApp to send the request directly to our pharmacist.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Customer Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Customer Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.customerName}
                  onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Mobile Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 09931796070"
                  value={formData.mobileNumber}
                  onChange={e => setFormData({ ...formData, mobileNumber: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                />
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                />
              </div>

              {/* Delivery Address */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Delivery / Pickup Address
                </label>
                <input
                  type="text"
                  placeholder="e.g. Near Sadar Hospital Gate / Kurtha Bazar"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Medicine Required */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Medicine Name / Requirements
              </label>
              <textarea
                rows={3}
                placeholder="List medicine names, dosages, or quantity (e.g., Paracetamol 650mg - 2 strips, Omez-D - 1 strip)"
                value={formData.medicineList}
                onChange={e => setFormData({ ...formData, medicineList: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
              />
            </div>

            {/* Prescription Upload Area */}
            <div className="border-2 border-dashed border-emerald-300 dark:border-emerald-800/60 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl p-4 text-center">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Upload className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Upload Doctor's Prescription
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  PNG, JPG, or PDF up to 10MB
                </p>
                <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition shadow">
                  <span>Browse File / Camera</span>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              {formData.prescriptionFileName && (
                <div className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-900/50 py-1.5 px-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Attached: {formData.prescriptionFileName}</span>
                </div>
              )}

              {previewUrl && (
                <div className="mt-3 max-w-[120px] mx-auto rounded-lg overflow-hidden border border-emerald-200">
                  <img src={previewUrl} alt="Prescription preview" className="w-full h-20 object-cover" />
                </div>
              )}
            </div>

            {/* Preferred Delivery Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Preferred Delivery / Pickup Time
                </label>
                <div className="relative">
                  <select
                    value={formData.preferredTime}
                    onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm appearance-none"
                  >
                    <option value="As soon as possible">Immediate / Urgent Delivery</option>
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                    <option value="Store Pickup">Store Pickup at Counter</option>
                  </select>
                  <Clock className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Special Message (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Call before coming"
                  value={formData.specialInstructions}
                  onChange={e => setFormData({ ...formData, specialInstructions: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Notice */}
            <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 rounded-xl text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
              <span>
                <strong>Note:</strong> Schedule H/X drugs require valid doctor prescription verification by our licensed pharmacist before dispatch.
              </span>
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-[#0A8F6A] hover:bg-[#077355] text-white font-semibold rounded-xl transition shadow-lg shadow-emerald-600/20"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Send via WhatsApp</span>
              </button>

              <a
                href={`tel:${STORE_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-6 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl transition"
              >
                <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Call Now ({STORE_INFO.phone})</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
