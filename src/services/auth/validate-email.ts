import {
  LoginEmail,
  ValidateEmailResponse,
} from "../../interfaces/user.interface";
import { manageSessionError } from "../../utils/common";
import { serviceRequest } from "../../utils/request";

export const validateEmail = async (body: LoginEmail) => {
  let data: ValidateEmailResponse = {
    message: "",
    existsUser: false,
    user: null,
    errorSession: false,
  };
  try {
    const response: ValidateEmailResponse = await serviceRequest(
      "auth/validate-email",
      "POST",
      body
    );
    data.message = response.message || "";
    data.existsUser = response.existsUser || false;
    data.user = response.user || null;
  } catch (error: any) {
    console.log("error: ", error);
    const { message, errorSession } = manageSessionError(
      error,
      "Validar correo"
    );
    data = { message, existsUser: false, user: null, errorSession };
  }
  return { data };
};
