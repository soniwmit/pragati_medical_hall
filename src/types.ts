export type PageTab = 'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'faq' | 'contact';

export interface MedicineCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  itemCount: number;
  image: string;
  badge?: string;
}

export interface MedicineProduct {
  id: string;
  name: string;
  category: string;
  dosageForm: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Supplement' | 'Cream/Ointment' | 'Care Product';
  composition: string;
  brand: string;
  mrp: number;
  discountPrice: number;
  requiresPrescription: boolean;
  inStock: boolean;
  description: string;
  uses: string[];
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verifiedPatient: boolean;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Prescription' | 'Delivery' | 'Payment' | 'Medicines';
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Store Front' | 'Medicine Shelves' | 'Products' | 'Medical Equipment' | 'Staff & Care';
  url: string;
  alt: string;
  description: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineList: string;
  hasPrescription: boolean;
  prescriptionFile?: File | null;
  prescriptionFileName?: string;
  preferredTime: string;
  specialInstructions: string;
}

export interface StoreInfo {
  name: string;
  altName: string;
  tagline: string;
  address: string;
  locationLandmark: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  email: string;
  workingHours: string;
  emergencyHours: string;
  establishedYear: number;
  rating: number;
  totalReviews: number;
  googleMapEmbedUrl: string;
  googleMapShareUrl: string;
}
