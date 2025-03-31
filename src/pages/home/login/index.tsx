import {
  faCog,
  faEnvelope,
  faInfoCircle,
  faLightbulb,
  faQuestionCircle,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LoginModal from "../../../components/LoginModal";

const options = [
  { id: "1", title: "Configuración", icon: faCog },
  { id: "2", title: "Accesibilidad", icon: faUniversalAccess },
  { id: "3", title: "Obtener ayuda", icon: faQuestionCircle },
  { id: "4", title: "Contáctanos", icon: faEnvelope },
  { id: "5", title: "Sobre nosotros", icon: faInfoCircle },
  { id: "6", title: "Cómo funciona", icon: faLightbulb },
];

const LoginScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => setIsModalVisible(false);

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <FontAwesomeIcon icon={item.icon} size={24} style={styles.icon} />
      <Text style={styles.cardText}>{item.title}</Text>
    </View>
  );

  const onClickLogin = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <LoginModal isModalVisible={isModalVisible} closeModal={closeModal} />
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
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  contentHead: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "Onest-Regular",
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "#606060",
    textAlign: "center",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#ff0000",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 20,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerText: {
    fontSize: 16,
    marginTop: 10,
  },
  register: {
    textDecorationLine: "underline",
    color: "#09f",
    fontWeight: "bold",
  },
  flatListContainer: {
    paddingVertical: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  icon: {
    color: "#3d3d3d",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

export default LoginScreen;
