export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    products:Product[];
    brand: string;
    category: string;
    quantity?: number;
    thumbnail: string;
    images: string[];
  }