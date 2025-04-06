import {
  faCog,
  faEnvelope,
  faInfoCircle,
  faLightbulb,
  faQuestionCircle,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import LoginModal from "../../../components/LoginModal";
import { styles } from "./styles";
import { useLogin } from "./useLogin";

const options = [
  { id: "1", title: "Configuración", icon: faCog },
  { id: "2", title: "Accesibilidad", icon: faUniversalAccess },
  { id: "3", title: "Obtener ayuda", icon: faQuestionCircle },
  { id: "4", title: "Contáctanos", icon: faEnvelope },
  { id: "5", title: "Sobre nosotros", icon: faInfoCircle },
  { id: "6", title: "Cómo funciona", icon: faLightbulb },
];

interface LoginScreenProps {
  validateSuccessLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ validateSuccessLogin }) => {
  const {
    //* Variables
    isModalVisible,

    //* Functions
    closeModal,
    onClickLogin,
  } = useLogin();

  return (
    <View style={styles.container}>
      <LoginModal
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        callbackLogin={validateSuccessLogin}
      />
      <View style={styles.contentHead}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subTitle}>
          Inicia sesión y empieza a generar ingresos extras.
        </Text>
        <TouchableOpacity style={styles.loginButton} onPress={onClickLogin}>
          <Text style={styles.continueButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>
          ¿No tienes cuenta?{" "}
          <Text style={styles.register} onPress={onClickLogin}>
            Registrarme
          </Text>
        </Text>
      </View>
      <FlatList
        data={options}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <FontAwesomeIcon icon={item.icon} size={24} style={styles.icon} />
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default LoginScreen;
