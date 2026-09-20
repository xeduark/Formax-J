// src/types/dotacion.ts
export interface DotacionItem {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  basePrice: number;
  promoPrice: number;
  description: string;
  category: 'competencia' | 'entrenamiento' | 'accesorio';
  image: string;
  features: string[];
  techSpecs: {
    material: string;
    dragReduction: string;
    uvProtection: string;
    chamois?: string;
    fit: string;
  };
  sizes: string[];
  customizable: boolean;
}

export interface DotacionPackage {
  id: string;
  name: string;
  badge: string;
  popular?: boolean;
  originalPrice: number;
  comboPrice: number;
  savings: number;
  itemsIncluded: string[];
  description: string;
  target: string;
}

export interface SizeRecommendation {
  size: string;
  chestRange: string;
  waistRange: string;
  heightRange: string;
  weightRange: string;
  skaterCategory: string;
}
