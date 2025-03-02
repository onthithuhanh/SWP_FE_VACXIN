export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  discount: number;
  discountPrice: number;
  isActive: boolean;
  manufacturer: string;
  targetGroup: string;
  schedule: string;
  sideEffects: string;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  id: number;
  image: string;
  created_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  is_deleted: boolean;
}
