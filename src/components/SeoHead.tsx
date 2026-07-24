import React, { useEffect } from 'react';
import { STORE_INFO, PHARMACY_FAQS } from '../data/pharmacyData';
import { PageTab } from '../types';

interface SeoHeadProps {
  currentPage: PageTab;
  customTitle?: string;
  customDescription?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  currentPage,
  customTitle,
  customDescription
}) => {
  const getPageTitle = (): string => {
    if (customTitle) return customTitle;
    switch (currentPage) {
      case 'home':
        return `${STORE_INFO.name} | Trusted Pharmacy & Medical Store in Kurtha, Bihar`;
      case 'about':
        return `About Us | ${STORE_INFO.name} - Front of Sadar Hospital Kurtha`;
      case 'services':
        return `Our Medical Services & Medicines | ${STORE_INFO.name}`;
      case 'gallery':
        return `Photo Gallery | ${STORE_INFO.name} Kurtha`;
      case 'testimonials':
        return `Customer Reviews & Testimonials | ${STORE_INFO.name}`;
      case 'faq':
        return `Frequently Asked Questions | ${STORE_INFO.name}`;
      case 'contact':
        return `Contact Us & Directions | ${STORE_INFO.name} Kurtha`;
      default:
        return `${STORE_INFO.name} - Genuine Medicines in Kurtha`;
    }
  };

  const getPageDescription = (): string => {
    if (customDescription) return customDescription;
    switch (currentPage) {
      case 'about':
        return `Learn about Pragati Medical Hall in front of Sadar Hospital Kurtha. Serving genuine medicines, healthcare supplies, and surgical items since 2012.`;
      case 'services':
        return `Explore services at Pragati Medical Hall: prescription medicines, OTC drugs, baby care, diabetic care, BP monitors, surgical items, and health supplements.`;
      case 'gallery':
        return `View store photos, medicine racks, healthcare equipment, and baby care section at Pragati Medical Hall, Kurtha.`;
      case 'contact':
        return `Contact Pragati Medical Hall front of Sadar Hospital, Kurtha, Bihar 804421. Call 09931796070 or WhatsApp for fast medicine delivery.`;
      default:
        return `${STORE_INFO.tagline}. Located FRONT OF SADAR HOSPITAL, Kurtha, Bihar 804421. Call ${STORE_INFO.phone} or order via WhatsApp.`;
    }
  };

  const title = getPageTitle();
  const description = getPageDescription();
  const pageUrl = window.location.origin + '/' + (currentPage === 'home' ? '' : currentPage);

  useEffect(() => {
    // Dynamic document title & meta updates
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

  }, [title, description, currentPage]);

  // JSON-LD Schemas
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Pharmacy", "MedicalBusiness", "LocalBusiness"],
    "name": STORE_INFO.name,
    "alternateName": STORE_INFO.altName,
    "description": STORE_INFO.tagline,
    "image": "https://images.unsplash.com/photo-1586015555751-63c20963503f?auto=format&fit=crop&w=800&q=80",
    "telephone": STORE_INFO.phone,
    "email": STORE_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "FRONT OF SADAR HOSPITAL",
      "addressLocality": "Kurtha",
      "addressRegion": "Bihar",
      "postalCode": "804421",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.0483,
      "longitude": 84.8833
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "22:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": STORE_INFO.rating.toString(),
      "reviewCount": STORE_INFO.totalReviews.toString()
    },
    "priceRange": "₹"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": PHARMACY_FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": currentPage.charAt(0).toUpperCase() + currentPage.slice(1),
        "item": pageUrl
      }
    ]
  };

  return (
    <>
      {/* Schema Markup Insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
