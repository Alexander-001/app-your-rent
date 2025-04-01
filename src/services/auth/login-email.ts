import {
  LoginEmailPassword,
  LoginEmailPasswordResponse,
} from "../../interfaces/user.interface";
import { manageSessionError } from "../../utils/common";
import { serviceRequest } from "../../utils/request";

export const loginEmail = async (body: LoginEmailPassword) => {
  let data: LoginEmailPasswordResponse = {
    message: "",
    token: "",
    username: "",
    errorSession: false,
  };
  try {
    const response: LoginEmailPasswordResponse = await serviceRequest(
      "login",
      "POST",
      body
    );
    data.message = response.message || "";
    data.token = response.token || "";
    data.username = response.username || "";
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Inicio de sesión con correo"
    );
    data = { message, token: "", username: "", errorSession };
  }
  return { data };
};
