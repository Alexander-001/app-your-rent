export interface Product {
  name: string;
  price: number;
  description: string;
  location: string;
  images: string;
  category: string;
  datePublish: string;
  status: string;
}

export interface ProductCreateResponse {
  message: string;
  product: Product | null;
  errorSession: boolean;
}

export interface GetProductsResponse {
  message: string;
  products: Product[];
  errorSession: boolean;
}
