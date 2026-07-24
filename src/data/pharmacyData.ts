import { StoreInfo, MedicineCategory, MedicineProduct, ServiceItem, Testimonial, FAQItem, GalleryImage } from '../types';

export const STORE_INFO: StoreInfo = {
  name: "Pragati Medical Hall",
  altName: "New Pragati Medical",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  address: "FRONT OF SADAR HOSPITAL, Kurtha, Bihar 804421",
  locationLandmark: "Directly opposite Sadar Hospital Main Gate, Kurtha, Bihar",
  phone: "09931796070",
  phoneRaw: "+919931796070",
  whatsappNumber: "919931796070",
  email: "support@pragatimedical.com",
  workingHours: "Monday – Sunday: 7:00 AM – 10:00 PM",
  emergencyHours: "24/7 Emergency Medicine Dispatch Available on Call",
  establishedYear: 2012,
  rating: 4.9,
  totalReviews: 384,
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.332304892!2d84.883300!3d25.048300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d28e7e1f40001%3A0x23a1a2b3c4d5e6f7!2sSadar%20Hospital%2C%20Kurtha%2C%20Bihar%20804421!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapShareUrl: "https://maps.google.com/?q=FRONT+OF+SADAR+HOSPITAL,+Kurtha,+Bihar+804421"
};

export const MEDICINE_CATEGORIES: MedicineCategory[] = [
  {
    id: "tablets",
    name: "Tablets",
    iconName: "Pill",
    description: "Wide collection of prescription oral tablets for fever, pain relief, antibiotics, heart care, & daily health.",
    itemCount: 450,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    badge: "Popular"
  },
  {
    id: "capsules",
    name: "Capsules",
    iconName: "PillBottle",
    description: "Multivitamins, gastro-resistant capsules, antibiotic courses, and specialty prescription capsules.",
    itemCount: 320,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "syrups",
    name: "Syrups",
    iconName: "Syringe",
    description: "Cough syrups, pediatric suspensions, digestive enzymes, tonics, and iron supplements.",
    itemCount: 210,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "injections",
    name: "Injection Supplies",
    iconName: "Activity",
    description: "Emergency lifesaving injections, IV fluids, insulin cartridges, disposable syringes, & needle supplies.",
    itemCount: 140,
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80",
    badge: "Hospital Care"
  },
  {
    id: "medical-equipment",
    name: "Medical Equipment",
    iconName: "Stethoscope",
    description: "Stethoscopes, digital thermometers, pulse oximeters, BP monitors, and nebulizers.",
    itemCount: 85,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80",
    badge: "Top Rated"
  },
  {
    id: "protein-supplements",
    name: "Protein Supplements",
    iconName: "Dumbbell",
    description: "Nutritional powder, whey protein, diabetic protein mixes, recovery drinks, and energy boosters.",
    itemCount: 95,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "vitamins",
    name: "Vitamins & Minerals",
    iconName: "HeartPulse",
    description: "Vitamin D3, B-Complex, Calcium + Vitamin D, Zinc, Omega-3 fish oil, and immunity boosters.",
    itemCount: 180,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "skin-care",
    name: "Skin Care & Derma",
    iconName: "Sparkles",
    description: "Dermatologist-recommended creams, anti-fungal ointments, moisturizers, cleansers, & sunscreen.",
    itemCount: 160,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "baby-products",
    name: "Baby Products",
    iconName: "Baby",
    description: "Baby food, infant milk powder, diapers, baby wipes, gentle lotions, pediatric oils, and feeding care.",
    itemCount: 125,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    badge: "Essential"
  },
  {
    id: "personal-hygiene",
    name: "Personal Hygiene",
    iconName: "ShieldCheck",
    description: "Antiseptic liquids, hand sanitizers, adult diapers, sanitary napkins, oral care, and body hygiene.",
    itemCount: 190,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "orthopedic-support",
    name: "Orthopedic Support",
    iconName: "Accessibility",
    description: "Knee supports, lumbar belts, cervical collars, crepe bandages, heating pads, and crutches.",
    itemCount: 70,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "diabetic-care",
    name: "Diabetic Care",
    iconName: "Droplet",
    description: "Glucometers, blood glucose test strips, sugar-free sweeteners, lancets, and foot care lotions.",
    itemCount: 110,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
    badge: "Specialty"
  }
];

export const SAMPLE_PRODUCTS: MedicineProduct[] = [
  {
    id: "p1",
    name: "Omeprazole & Domperidone Capsules (Omez-D)",
    category: "Capsules",
    dosageForm: "Capsule",
    composition: "Omeprazole 20mg + Domperidone 10mg",
    brand: "Dr. Reddy's",
    mrp: 180,
    discountPrice: 155,
    requiresPrescription: true,
    inStock: true,
    description: "Used for treating acidity, heartburn, gastroesophageal reflux disease (GERD), and nausea.",
    uses: ["Acid Reflux", "Heartburn", "Nausea & Indigestion"],
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "p2",
    name: "Digital Blood Pressure Monitor (Automatic Upper Arm)",
    category: "Medical Equipment",
    dosageForm: "Equipment",
    composition: "Oscillometric Digital BP Monitor",
    brand: "Omron / Dr. Trust",
    mrp: 2490,
    discountPrice: 1950,
    requiresPrescription: false,
    inStock: true,
    description: "Accurate blood pressure and pulse rate reader with memory function and large backlit screen.",
    uses: ["BP Tracking at Home", "Hypertension Monitoring"],
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "p3",
    name: "Blood Glucose Test Strips (50 Strips Pack)",
    category: "Diabetic Care",
    dosageForm: "Equipment",
    composition: "Enzymatic Glucose Test Strips",
    brand: "Accu-Chek Active",
    mrp: 1050,
    discountPrice: 890,
    requiresPrescription: false,
    inStock: true,
    description: "Fast 5-second test result with tiny blood sample required. Compatible with Accu-Chek meters.",
    uses: ["Diabetic Blood Sugar Testing"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "p4",
    name: "Calcium + Vitamin D3 Tablets (Shelcal 500)",
    category: "Tablets",
    dosageForm: "Tablet",
    composition: "Elemental Calcium 500mg + Vitamin D3 250 IU",
    brand: "Torrent Pharma",
    mrp: 142,
    discountPrice: 120,
    requiresPrescription: false,
    inStock: true,
    description: "Supports bone density, joint health, and muscle recovery. Ideal for elderly patients and women.",
    uses: ["Bone Health", "Calcium Deficiency", "Osteoporosis Support"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "p5",
    name: "Infant Care Formula & Nutritional Cereal",
    category: "Baby Products",
    dosageForm: "Care Product",
    composition: "Fortified Iron, Minerals, & Vitamins",
    brand: "Nestle Cerelac / Lactogen",
    mrp: 360,
    discountPrice: 325,
    requiresPrescription: false,
    inStock: true,
    description: "Nutritious infant food formulation enriched with essential micronutrients for baby growth.",
    uses: ["Infant Nutrition", "Complementary Feeding"],
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "p6",
    name: "Finger Pulse Oximeter (SpO2 & Heart Rate)",
    category: "Medical Equipment",
    dosageForm: "Equipment",
    composition: "Dual Color OLED Display Sensor",
    brand: "BPL Medical",
    mrp: 1290,
    discountPrice: 850,
    requiresPrescription: false,
    inStock: true,
    description: "Instant oxygen saturation (SpO2) and pulse rate check with high accuracy and auto shut-off.",
    uses: ["Oxygen Level Monitoring", "Respiratory Care"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "p7",
    name: "Paracetamol 650mg Tablets (Dolo 650)",
    category: "Tablets",
    dosageForm: "Tablet",
    composition: "Paracetamol IP 650mg",
    brand: "Micro Labs",
    mrp: 34,
    discountPrice: 28,
    requiresPrescription: false,
    inStock: true,
    description: "Fast fever reducer and pain relief medicine for body ache, headache, and viral symptoms.",
    uses: ["Fever Reduction", "Pain Relief", "Cold & Body Ache"],
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "p8",
    name: "First Aid Kit Box (Complete Emergency Set)",
    category: "Personal Hygiene",
    dosageForm: "Care Product",
    composition: "Antiseptic Liquid, Cotton, Bandages, Burn Cream, Scissor",
    brand: "Dettol / Cipla",
    mrp: 450,
    discountPrice: 380,
    requiresPrescription: false,
    inStock: true,
    description: "Essential home and vehicle first aid kit packed with hospital grade antiseptic supplies.",
    uses: ["Home Emergency", "Minor Cuts & Burns", "Wound Dressing"],
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=400&q=80"
  }
];

export const WHY_CHOOSE_US_CARDS = [
  {
    title: "100% Genuine Medicines",
    description: "Direct sourcing from certified pharmaceutical manufacturers and authorized distributors. No duplicates, 100% authentic stock.",
    iconName: "ShieldCheck",
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
  },
  {
    title: "Experienced Pharmacy",
    description: "Licensed pharmacists providing expert guidance on dosage, prescription verification, and drug interactions.",
    iconName: "UserCheck",
    color: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
  },
  {
    title: "Affordable Prices",
    description: "Reasonable and fair pricing on all branded medicines, generics, baby care, and surgical essentials.",
    iconName: "Tag",
    color: "bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400"
  },
  {
    title: "Fast Service",
    description: "Minimal wait time at counter and quick WhatsApp order dispatch right at your doorstep in Kurtha.",
    iconName: "Zap",
    color: "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400"
  },
  {
    title: "Prescription Medicines",
    description: "Complete inventory of specialty hospital & prescription medicines for critical care, cardiac, diabetic, and surgical needs.",
    iconName: "FileText",
    color: "bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400"
  },
  {
    title: "Healthcare Products",
    description: "Large collection of BP apparatus, glucometers, nebulizers, thermometers, and orthopedic bands.",
    iconName: "Stethoscope",
    color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400"
  },
  {
    title: "Trusted Local Pharmacy",
    description: "Serving Kurtha residents and Sadar Hospital patients for years with uncompromised trust and warm care.",
    iconName: "MapPin",
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
  },
  {
    title: "Easy WhatsApp Support",
    description: "Order medicines in 30 seconds by simply uploading your prescription photo on WhatsApp.",
    iconName: "MessageCircle",
    color: "bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400"
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "medicine-sales",
    title: "Medicine Sales",
    shortDesc: "Comprehensive supply of all ethical, generic, and daily essential medicines.",
    fullDesc: "We stock authentic oral tablets, syrups, ointments, inhalers, and specialized drugs stored under strict temperature-controlled environments.",
    iconName: "Pill",
    benefits: ["100% Genuine Certified Stock", "Proper Expiry Check", "Temperature-Controlled Storage"],
    isPopular: true
  },
  {
    id: "prescription-medicines",
    title: "Prescription Medicines",
    shortDesc: "Accurate dispensing of Schedule H, H1, & critical care hospital prescriptions.",
    fullDesc: "Our licensed pharmacists review doctor prescriptions carefully before dispensing accurate dosages and giving clear usage instructions.",
    iconName: "FileCheck",
    benefits: ["Pharmacist Prescription Verification", "Complete Hospital Drug Range", "Accurate Dosage Advice"]
  },
  {
    id: "otc-medicines",
    title: "OTC Medicines",
    shortDesc: "Over-the-counter remedies for cold, fever, pain, acidity, and minor ailments.",
    fullDesc: "Quick access to immediate pain relief, antacids, digestive enzymes, oral rehydration salts, and cold relief medication without long delays.",
    iconName: "Cross",
    benefits: ["Immediate Availability", "Guided Usage", "Top Healthcare Brands"]
  },
  {
    id: "baby-care-products",
    title: "Baby Care Products",
    shortDesc: "Gentle baby food formulas, dermatological lotions, diapers, and care items.",
    fullDesc: "Pediatric-approved formulas, gentle soaps, baby oils, rash creams, baby wipes, and feeding accessories for newborn health.",
    iconName: "Baby",
    benefits: ["Hypoallergenic Brands", "Pediatrician Recommended", "Complete Newborn Essentials"],
    isPopular: true
  },
  {
    id: "personal-care-products",
    title: "Personal Care Products",
    shortDesc: "Derma skincare, hair care, oral care, antiseptics, and daily hygiene products.",
    fullDesc: "Quality personal hygiene and cosmetic dermatology products including face washes, medicated shampoos, antiseptics, and moisturizers.",
    iconName: "Sparkles",
    benefits: ["Dermatologist Approved", "Authentic Personal Products", "Fair Prices"]
  },
  {
    id: "diabetic-care",
    title: "Diabetic Care",
    shortDesc: "Insulins, glucometers, test strips, diabetic footwear, & sugar-free foods.",
    fullDesc: "Complete diabetes management essentials including cold-chain insulin storage, test strip refills, sugar substitutes, and diabetic foot lotion.",
    iconName: "Droplet",
    benefits: ["Cold Chain Insulin Storage", "Discounted Test Strips", "Expert Guidance"],
    isPopular: true
  },
  {
    id: "blood-pressure-monitor",
    title: "Blood Pressure Monitors",
    shortDesc: "Automatic & manual BP apparatus with demonstration and warranty support.",
    fullDesc: "High accuracy digital blood pressure monitors suitable for elderly care at home. Includes live testing and usage guidance at store.",
    iconName: "Activity",
    benefits: ["On-Site Demo", "Brand Warranty", "High Accuracy Units"]
  },
  {
    id: "first-aid-supplies",
    title: "First Aid Supplies",
    shortDesc: "Bandages, surgical cotton, antiseptic liquids, burn ointment, & wound care.",
    fullDesc: "Comprehensive first aid essentials for households, schools, vehicles, and workplaces. Complete wound dressing kits.",
    iconName: "Bandage",
    benefits: ["Hospital-Grade Cotton & Gauze", "Sterile Packaging", "Custom Emergency Kits"]
  },
  {
    id: "surgical-items",
    title: "Surgical Items",
    shortDesc: "Disposable syringes, IV sets, catheters, surgical gloves, masks, & gowns.",
    fullDesc: "Supplying surgical consumables and sterile disposables directly to patients, hospital attendants, and clinical staff at Sadar Hospital.",
    iconName: "Scissors",
    benefits: ["Sterile Disposables", "Direct Sadar Hospital Supply", "Wholesale & Retail Rates"]
  },
  {
    id: "health-supplements",
    title: "Health Supplements",
    shortDesc: "Proteins, vitamins, calcium, iron, Omega-3, & herbal immunity boosters.",
    fullDesc: "Top nutritional supplements for strength recovery, post-surgery healing, pregnancy care, and general vitality.",
    iconName: "HeartPulse",
    benefits: ["Certified Nutraceuitcals", "Post-Recovery Formulas", "Verified Brands"]
  },
  {
    id: "medical-devices",
    title: "Medical Devices",
    shortDesc: "Nebulizers, pulse oximeters, digital thermometers, & suction units.",
    fullDesc: "Advanced home healthcare gadgets designed to assist respiratory care, fever tracking, and vital signs monitoring.",
    iconName: "Cpu",
    benefits: ["Compact & Portable", "Easy One-Touch Operation", "Manufacturer Guarantee"]
  },
  {
    id: "home-care-products",
    title: "Home Care Products",
    shortDesc: "Steam inhalers, hot water bags, adult diapers, bed pads, & walking sticks.",
    fullDesc: "Supportive home nursing products for bedridden patients, senior citizens, and long-term recovery care.",
    iconName: "Home",
    benefits: ["Elderly Comfort Aids", "Sanitary Bed Protectors", "Ergonomic Walkers"]
  }
];

export const WORKING_PROCESS_STEPS = [
  {
    stepNumber: "01",
    title: "Visit Store or Order Online",
    description: "Walk into our store front of Sadar Hospital, Kurtha or send your medicine list via WhatsApp/Call.",
    iconName: "Store"
  },
  {
    stepNumber: "02",
    title: "Share Prescription",
    description: "Show your prescription to our pharmacist or upload a clear photo through our WhatsApp order form.",
    iconName: "FileUp"
  },
  {
    stepNumber: "03",
    title: "Get Genuine Medicines",
    description: "Our certified pharmacist verifies and carefully packages 100% original, fresh-batch medicines.",
    iconName: "PackageCheck"
  },
  {
    stepNumber: "04",
    title: "Easy Payment & Pickup",
    description: "Pay conveniently via UPI (GPay, PhonePe, Paytm), cash, or card upon store pickup or home delivery.",
    iconName: "CreditCard"
  }
];

export const CUSTOMER_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rameshwar Singh",
    role: "Local Resident",
    location: "Kurtha, Bihar",
    rating: 5,
    comment: "Pragati Medical Hall is our go-to medical store. Located right opposite Sadar Hospital, they always have all urgent medicines in stock. The staff is very polite and helpful.",
    date: "12 June 2026",
    verifiedPatient: true,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "t2",
    name: "Priyanka Kumari",
    role: "Teacher",
    location: "Kurtha Bazar",
    rating: 5,
    comment: "Ordered baby care products and my mother's diabetes medicines via WhatsApp. Received genuine medicines in 20 minutes with a proper printed bill. Highly reliable pharmacy in Kurtha!",
    date: "28 May 2026",
    verifiedPatient: true,
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "t3",
    name: "Dr. Alok Verma",
    role: "Visiting Physician",
    location: "Near Sadar Hospital",
    rating: 5,
    comment: "I recommend Pragati Medical Hall to my patients. They maintain proper cold chain storage for insulins and vaccines, and strictly dispense authentic branded drugs.",
    date: "14 April 2026",
    verifiedPatient: true,
    avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "t4",
    name: "Sunil Kumar",
    role: "Business Owner",
    location: "Jehanabad - Kurtha Road",
    rating: 5,
    comment: "When my father needed emergency BP monitor and oxygen meter at night, Pragati Medical Hall arranged it immediately. Excellent service and reasonable prices.",
    date: "02 March 2026",
    verifiedPatient: true,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "t5",
    name: "Anita Devi",
    role: "Homemaker",
    location: "Kurtha, Bihar",
    rating: 5,
    comment: "Subhyogya rates and genuine medicines. They explain medicine dosage clearly in Hindi, which helps older family members take medicines on time.",
    date: "19 February 2026",
    verifiedPatient: true,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "t6",
    name: "Md. Imran Alam",
    role: "Health Worker",
    location: "Kurtha Sub-Division",
    rating: 5,
    comment: "Great availability of surgical disposable items like IV sets, gloves, and syringes. Best medical shop in front of Sadar Hospital.",
    date: "10 January 2026",
    verifiedPatient: true,
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
  }
];

export const PHARMACY_FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "Where is Pragati Medical Hall located in Kurtha?",
    answer: "Pragati Medical Hall is located directly in front of the Sadar Hospital Main Gate, Kurtha, Bihar 804421. You can easily spot us right opposite the main entrance.",
    category: "General"
  },
  {
    id: "faq2",
    question: "Are all medicines available at Pragati Medical Hall 100% genuine?",
    answer: "Yes, 100%! We source medicines directly from certified pharmaceutical companies (e.g., Cipla, Sun Pharma, Dr. Reddy's, Mankind, Torrent) and licensed state distributors with strict batch and quality checks.",
    category: "Medicines"
  },
  {
    id: "faq3",
    question: "How can I order medicines via WhatsApp?",
    answer: "Simply click the 'WhatsApp Order' button on our website, upload a picture of your doctor's prescription or type your medicine list, enter your delivery address, and hit send! Our pharmacist will confirm stock and pricing instantly.",
    category: "Delivery"
  },
  {
    id: "faq4",
    question: "Is doctor prescription mandatory for purchasing medicines?",
    answer: "Prescriptions are required for Schedule H, H1, and X drugs (such as antibiotics, sedatives, cardiac, and psychiatric drugs) as per Government regulations. Over-the-counter (OTC) items, vitamins, first aid, and baby care do not require prescriptions.",
    category: "Prescription"
  },
  {
    id: "faq5",
    question: "What are the store operating hours?",
    answer: "We are open 7 days a week from 7:00 AM to 10:00 PM. For emergency life-saving medicines after hours, you can reach out on our phone line 09931796070.",
    category: "General"
  },
  {
    id: "faq6",
    question: "Do you keep medical equipment like BP apparatus and glucometers?",
    answer: "Yes, we stock digital BP monitors, pulse oximeters, glucometers, nebulizers, digital thermometers, steam inhalers, and orthopedic supports with brand warranty.",
    category: "Medicines"
  },
  {
    id: "faq7",
    question: "How do you maintain temperature-sensitive medicines like insulin?",
    answer: "We have heavy-duty commercial medical refrigerators and power backups to maintain strict 2°C – 8°C cold chain storage for all insulins, vaccines, and biopharmaceuticals.",
    category: "Medicines"
  },
  {
    id: "faq8",
    question: "What payment methods do you accept?",
    answer: "We accept all major digital payment modes including UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking, Debit/Credit Cards, and Cash.",
    category: "Payment"
  },
  {
    id: "faq9",
    question: "Do you supply surgical items and bulk hospital consumables?",
    answer: "Yes, we supply surgical disposable items (syringes, IV fluids, cannulas, gloves, cotton, bandages) to patients, attendants, and clinics at wholesale and economical prices.",
    category: "General"
  },
  {
    id: "faq10",
    question: "Can I return or exchange medicines if prescribed wrongly by doctor?",
    answer: "Unopened medicines in original strip packaging with valid invoice can be returned or exchanged within 7 days, provided they do not belong to refrigerated cold-chain items.",
    category: "General"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    title: "Pragati Medical Hall Store Front",
    category: "Store Front",
    url: "https://images.unsplash.com/photo-1586015555751-63c20963503f?auto=format&fit=crop&w=800&q=80",
    alt: "Pragati Medical Hall storefront in front of Sadar Hospital Kurtha",
    description: "Modern, brightly lit medical store entrance directly facing Sadar Hospital Kurtha main gate."
  },
  {
    id: "g2",
    title: "Organized Medicine Shelves",
    category: "Medicine Shelves",
    url: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80",
    alt: "Organized pharmaceutical racks at Pragati Medical Hall",
    description: "Systematically categorized medicine racks ensuring fast medicine retrieval and zero error."
  },
  {
    id: "g3",
    title: "Cold Chain Insulin & Vaccine Storage",
    category: "Medical Equipment",
    url: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80",
    alt: "Medical equipment and cold storage",
    description: "Temperature controlled refrigeration units dedicated to insulins and biopharmaceuticals."
  },
  {
    id: "g4",
    title: "Healthcare Devices & BP Monitors",
    category: "Products",
    url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    alt: "Blood pressure monitors and glucometers shelf",
    description: "Display counter featuring branded BP apparatus, nebulizers, and diabetes monitoring kits."
  },
  {
    id: "g5",
    title: "Baby Care & Infant Food Section",
    category: "Products",
    url: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    alt: "Baby care products section",
    description: "Wide range of pediatric nutrition, baby food, and gentle baby skin products."
  },
  {
    id: "g6",
    title: "Surgical Disposables & First Aid",
    category: "Products",
    url: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80",
    alt: "Surgical disposables section",
    description: "Surgical gloves, IV sets, syringes, bandages, and emergency hospital supplies."
  },
  {
    id: "g7",
    title: "Qualified Pharmacist Desk",
    category: "Staff & Care",
    url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
    alt: "Licensed pharmacist dispensing medicines",
    description: "Expert pharmacist consultation counter for prescription check and dosage explanation."
  },
  {
    id: "g8",
    title: "Rapid WhatsApp Order Packing",
    category: "Staff & Care",
    url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    alt: "Express order counter",
    description: "Dedicated quick order verification desk for express home delivery and pickup."
  }
];

export const TIMELINE_EVENTS = [
  {
    year: "2012",
    title: "Store Founded",
    description: "Established Pragati Medical Hall in front of Sadar Hospital, Kurtha to provide genuine medicines to the local community."
  },
  {
    year: "2016",
    title: "Expanded Surgical & Equipment Section",
    description: "Added dedicated sections for digital BP monitors, glucometers, orthopedic supports, and hospital surgical disposables."
  },
  {
    year: "2020",
    title: "Cold Chain Storage Upgrade",
    description: "Installed state-of-the-art medical refrigeration with power backup to ensure 100% potency for insulins and vaccines."
  },
  {
    year: "2023",
    title: "Digital WhatsApp Ordering Launch",
    description: "Introduced 30-second WhatsApp prescription ordering and instant doorstep delivery service in Kurtha."
  },
  {
    year: "2026",
    title: "Modern Online Platform",
    description: "Launched responsive web platform with live medicine availability check, digital prescription upload, and SEO store portal."
  }
];
