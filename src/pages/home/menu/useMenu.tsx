import { faUser } from "@fortawesome/free-solid-svg-icons";
import { MenuData } from "../../../interfaces/menu.interfaces";

export const useMenu = () => {
  const menuData: MenuData[] = [
    {
      key: "0",
      title: "Perfil",
      data: [
        {
          name: "Mostrar perfil",
          icon: faUser,
          isProfile: true,
        },
      ],
    },
    {
      key: "1",
      title: "Información",
      data: [
        { name: "Información personal" },
        { name: "Pagos y cobros" },
        { name: "Impuestos" },
        { name: "Inicio de sesión y seguridad" },
        { name: "Accesibilidad" },
      ],
    },
    {
      key: "2",
      title: "Rentas",
      data: [
        { name: "Publica tu producto" },
        { name: "Encuentra un producto" },
      ],
    },
    {
      key: "3",
      title: "Asistencia",
      data: [
        { name: "Visita centro de ayuda" },
        { name: "Enviar comentarios" },
        { name: "Cómo funciona Your Rent" },
      ],
    },
    {
      key: "4",
      title: "Legal",
      data: [
        { name: "Términos de servicios" },
        { name: "Política de privacidad" },
        { name: "Licencias de código abierto" },
      ],
    },
  ];

  return {
    //* Variables
    menuData,
    //* Functions
  };
};
