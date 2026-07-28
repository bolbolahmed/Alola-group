export interface Project {
  id: string;
  title: string;
  titleAr: string;
  category: 'residential' | 'commercial' | 'buildings';
  categoryAr: string;
  location: string;
  locationAr: string;
  area: number; // in sqm
  year: string;
  image: string;
  gallery?: string[];
  finishingTypeAr?: string;
  finishingTypeEn?: string;
  specsAr?: string[];
  description: string;
  descriptionAr: string;
}

export interface QuoteRequest {
  id: string;
  fullName: string;
  phone: string;
  projectType: string;
  projectTypeAr: string;
  areaSize: number;
  qualityTier: 'economic' | 'vip' | 'altra_vip' | 'super_altra_vip' | 'luxury_1' | 'luxury_2' | 'luxury_3';
  services: string[];
  details: string;
  estimatedCost: number;
  estimatedDuration: string;
  status: 'new' | 'processing' | 'contacted' | 'completed';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  avatarText: string;
  rating: number;
}

export interface ServiceDetail {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  icon: string;
  badge?: string;
  badgeAr?: string;
  highlights: string[];
  highlightsAr: string[];
}
