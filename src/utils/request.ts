import axios, { AxiosRequestConfig } from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const baseURL: string = "http://localhost:8080";
let tokenInfo: string = "";

export function requestSetToken(token: string) {
  tokenInfo = token;
}

export async function serviceRequest(
  service: string = "",
  method: HttpMethod = "POST",
  body: { [key: string]: any } | FormData = {}
): Promise<any> {
  const url = (baseURL || window?.location?.origin || "") + "/" + service;
  let settingsHeaders: { [key: string]: string } = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  };
  if (method === "GET" || body instanceof FormData) {
    delete settingsHeaders["Content-Type"];
  }
  if (tokenInfo) settingsHeaders.Authorization = `Bearer ${tokenInfo}`;
  let settings: any = {
    method,
    headers: settingsHeaders,
  };
  if (body instanceof FormData) {
    settings.body = body;
  } else {
    let settingBody: any = {};
    if (Object.keys(body).length > 0) settingBody = { ...settingBody, ...body };
    if (method !== "GET" && settingBody) {
      settings.body = JSON.stringify(settingBody);
    }
  }
  return new Promise((resolve, reject) => {
    const axiosConfig: AxiosRequestConfig = {
      url,
      method: settings.method,
      headers: settings.headers,
      data: settings.body || null,
    };
    axios(axiosConfig)
      .then((response) => resolve(response.data))
      .catch((error) => {
        if (error.response) {
          reject({ status: error.response.status, ...error.response.data });
        } else if (error.request) {
          reject({
            status: 0,
            message: "No se recibió respuesta del servidor.",
            error: error.message,
          });
        } else {
          reject({
            status: 0,
            message: "Error en la solicitud.",
            error: error.message,
          });
        }
      });
  });
}
