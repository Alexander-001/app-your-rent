import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  MenuData,
  RootStackParamList,
} from "../../../interfaces/menu.interfaces";

export const useMenu = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
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

  const handleNavigation = (name: string) => {
    const routes: any = {
      "Mostrar perfil": "Profile",
      "Información personal": "PersonalInfo",
      "Pagos y cobros": "Payments",
      Impuestos: "Taxes",
      "Inicio de sesión y seguridad": "SecurityLogin",
      Accesibilidad: "Accessibility",
      "Publica tu producto": "PushProduct",
      "Encuentra un producto": "FindProduct",
      "Visita centro de ayuda": "HelpCenter",
      "Enviar comentarios": "SendComments",
      "Cómo funciona Your Rent": "HowWorks",
      "Términos de servicios": "TermsOfService",
      "Política de privacidad": "PrivacyPolicy",
      "Licencias de código abierto": "OpenSourceLicenses",
    };
    navigation.navigate(routes[name]);
  };

  return {
    //* Variables
    menuData,

    //* Functions
    handleNavigation,
  };
};
