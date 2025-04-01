export interface LoginPhone {
  phoneNumber: string;
}

export interface LoginEmail {
  email: string;
}

export interface LoginEmailPassword {
  email: string;
  password: string;
}

export interface LoginEmailPasswordResponse {
  message: string;
  token: string;
  username: string;
  errorSession: boolean;
}

export interface LoginPhoneCodeResponse {
  send: boolean;
  message: string;
  errorSession: boolean;
}

export interface ValidateEmailResponse {
  existsUser: boolean;
  message: string;
  errorSession: boolean;
  user: null;
}
