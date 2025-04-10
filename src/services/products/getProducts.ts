import { GetProductsResponse } from "../../interfaces/product.interface";
import { manageSessionError } from "../../utils/common";
import { serviceRequest } from "../../utils/request";

export const getProducts = async () => {
  let data: GetProductsResponse = {
    message: "",
    products: [],
    errorSession: false,
  };
  try {
    const response: GetProductsResponse = await serviceRequest(
      "products",
      "GET"
    );
    data.message = response.message || "";
    data.products = response.products || [];
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Obtener productos"
    );
    data = { message, products: [], errorSession };
  }
  return { data };
};
