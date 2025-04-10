import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { RootStackParamList } from "../../../../interfaces/menu.interfaces";
import { Product } from "../../../../interfaces/product.interface";
import { getProducts } from "../../../../services/products/getProducts";
import { data } from "./data";

export const useSearch = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [products, setProducts] = useState<Product[]>(data);

  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 2) {
    groupedProducts.push(products.slice(i, i + 2));
  }
  const screenHeight: number = Dimensions.get("window").height;
  const headerHeight: number = 100;

  useEffect(() => {
    getAllproducts();
  }, []);

  const getAllproducts = async () => {
    const { data } = await getProducts();
    // setProducts(data.products.length > 0 ? data.products : []);
  };

  const onClickImage = (product: Product) => {
    navigation.navigate("ProductDetail", { product } as any);
  };

  return {
    //* Variables
    products,
    groupedProducts,
    screenHeight,
    headerHeight,

    //* Functions
    onClickImage,
  };
};
