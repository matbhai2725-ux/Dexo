export interface NotebookProduct {
  id: string;
  title: string;
  price: string; // e.g. "₹20" or "₹150"
  originalPrice?: string;
  image: string;
  pageCount: number;
  paperQuality: string; // e.g. "54 GSM", "70 GSM Premium Maplitho"
  bindingType: string; // e.g. "Pin Binding", "Spiral Bound", "Perfect Bound"
  availableSizes: string[]; // e.g. ["A4", "A5", "School Size (B5)"]
  category: 'school' | 'college' | 'office' | 'specialty' | 'custom';
  description: string;
  badge?: string; // e.g. "Best Seller", "Eco-Friendly", "Value Pack"
  features: string[];
}

export interface OwnerTeamMember {
  name: string;
  role: string;
  description: string;
  socialHandles?: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  value: number;
  suffix: string;
  description: string;
  iconName: string;
}
