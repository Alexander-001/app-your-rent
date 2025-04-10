import {
  Product,
  ProductCreateResponse,
} from "../../interfaces/product.interface";
import { manageSessionError } from "../../utils/common";
import { serviceRequest } from "../../utils/request";

export const createProduct = async (body: Product) => {
  let data: ProductCreateResponse = {
    message: "",
    product: null,
    errorSession: false,
  };
  try {
    const response: ProductCreateResponse = await serviceRequest(
      "products",
      "POST",
      body
    );
    data.message = response.message || "";
    data.product = response.product || null;
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Crear producto"
    );
    data = { message, product: null, errorSession };
  }
  return { data };
};
