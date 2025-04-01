export const manageSessionError = (
  error: { status: number },
  service: string
) => {
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
