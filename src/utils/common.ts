const currencyToLocale: Record<string, string> = {
  CLP: "es-CL", // Chile
  ARS: "es-AR", // Argentina
  COP: "es-CO", // Colombia
  PEN: "es-PE", // Perú
  UYU: "es-UY", // Uruguay
  BRL: "pt-BR", // Brasil
  BOB: "es-BO", // Bolivia
  PYG: "es-PY", // Paraguay
  USD: "en-US", // Estados Unidos
  EUR: "es-ES", // España
  MXN: "es-MX", // México
  VES: "es-VE", // Venezuela
  GBP: "en-GB", // Reino Unido
  CAD: "en-CA", // Canadá
  AUD: "en-AU", // Australia
  NZD: "en-NZ", // Nueva Zelanda
  CHF: "de-CH", // Suiza
  JPY: "ja-JP", // Japón
  KRW: "ko-KR", // Corea del Sur
  CNY: "zh-CN", // China
  HKD: "zh-HK", // Hong Kong
  SGD: "en-SG", // Singapur
  RUB: "ru-RU", // Rusia
  SEK: "sv-SE", // Suecia
  NOK: "no-NO", // Noruega
  DKK: "da-DK", // Dinamarca
  INR: "hi-IN", // India
  IDR: "id-ID", // Indonesia
  THB: "th-TH", // Tailandia
  ZAR: "en-ZA", // Sudáfrica
  AED: "ar-AE", // Emiratos Árabes Unidos
  SAR: "ar-SA", // Arabia Saudita
  EGP: "ar-EG", // Egipto
  TRY: "tr-TR", // Turquía
  CZK: "cs-CZ", // Chequia
  PLN: "pl-PL", // Polonia
  HUF: "hu-HU", // Hungría
  RON: "ro-RO", // Rumanía
  ILS: "he-IL", // Israel
};

export const manageSessionError = (
  error: { status: number },
  service: string
): { message: string; errorSession: boolean } => {
  if (error.status === 401) {
    return {
      message: "Tu sesión caduco, por favor inicia sesión nuevamente",
      errorSession: true,
    };
  }
  return {
    message: `Hubo un error en el servicio: ${service}`,
    errorSession: false,
  };
};

export const validateIsLogged = (token: string): boolean => {
  let isLogged: boolean = true;
  if (token === "") return (isLogged = false);
  return isLogged;
};

export const formatPrice = (price: string, currency: string): string => {
  let numericPrice: number = Number(price);
  if (isNaN(numericPrice)) throw new Error("El precio no es un número válido.");
  if (currency === "USD") numericPrice = numericPrice / 1000;
  const locale: string = currencyToLocale[currency] || "es-ES";
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(numericPrice);
};
