export type Product = {
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  description?: string;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
