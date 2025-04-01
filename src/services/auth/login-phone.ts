import {
  LoginPhone,
  LoginPhoneCodeResponse,
} from "../../interfaces/user.interface";
import { manageSessionError } from "../../utils/common";
import { serviceRequest } from "../../utils/request";

export const loginPhone = async (body: LoginPhone) => {
  let data: LoginPhoneCodeResponse = {
    message: "",
    send: false,
    errorSession: false,
  };
  try {
    const response: LoginPhoneCodeResponse = await serviceRequest(
      "auth/send-code-phone",
      "POST",
      body
    );
    data.message = response.message || "";
    data.send = response.send || false;
  } catch (error: any) {
    const { message, errorSession } = manageSessionError(
      error,
      "Inicio de sesión con correo"
    );
    data = { message, send: false, errorSession };
  }
  return { data };
};
