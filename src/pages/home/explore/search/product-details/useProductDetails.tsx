import { useState } from "react";
import { ProductDetailScreenRouteProp } from ".";
import { Product } from "../../../../../interfaces/product.interface";

export const useProductDetails = (route: ProductDetailScreenRouteProp) => {
  const data: any = route.params;
  const product: Product = data.product;

  const images = product.images.split(","); // Dividir las imágenes

  const [carouselImages, setCarouselImages] = useState<{ image: string }[]>([
    {
      image: images[0],
    },
    {
      image: images[1],
    },
    { image: images[2] },
  ]);

  return {
    //* Variables
    images,
    carouselImages,
    product,
    //* Functions
  };
};
