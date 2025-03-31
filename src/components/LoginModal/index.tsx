import { Checkbox } from "native-base";
import React from "react";
import {
  Animated,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useLoginModal } from "./useLoginModal";

const LoginModal: React.FC<any> = ({ isModalVisible, closeModal }) => {
  const {
    //* Variables
    panResponder,
    modalPosition,
    selectedCountry,
    phoneNumber,
    isCountryModalVisible,
    countryModalPosition,
    countries,

    //* Functions
    closeMainModal,
    openCountryModal,
    setPhoneNumber,
    closeCountryModal,
    handleSelectCountry,
  } = useLoginModal(isModalVisible, closeModal);
  return (
    <Modal transparent visible={isModalVisible} animationType="none">
      <View style={styles.modalOverlay}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.modalContainer,
            { transform: [{ translateY: modalPosition }] },
          ]}
        >
          <TouchableOpacity style={styles.closeButton} onPress={closeMainModal}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Iniciar sesión o regístrate</Text>
          <View style={styles.inputContainer}>
            <View style={styles.selectContainer}>
              <Text style={styles.placeholder}>País o Región</Text>
              <TouchableOpacity
                onPress={openCountryModal}
                style={styles.pickerButton}
              >
                <Text>{selectedCountry.message || "Selecciona tu país"}</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Número de teléfono"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
          <Text style={styles.message}>
            Te llamaremos o enviaremos un mensaje para confirmar el número.
          </Text>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Siguiente</Text>
          </TouchableOpacity>
          <Modal
            transparent
            visible={isCountryModalVisible}
            animationType="none"
          >
            <View style={styles.countryModalOverlay}>
              <Animated.View
                style={[
                  styles.countryModalContainer,
                  { transform: [{ translateY: countryModalPosition }] },
                ]}
              >
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={closeCountryModal}
                >
                  <Text style={styles.closeText}>✕</Text>
                </TouchableOpacity>
                <Text style={styles.modalTitle}>Selecciona un país</Text>
                {countries.map((country) => (
                  <View style={styles.countryItem} key={country.code}>
                    <Text style={styles.countryText}>
                      {country.name} ({country.code})
                    </Text>
                    <Checkbox
                      value={selectedCountry.code}
                      style={styles.checkbox}
                      bgColor={
                        country.code === selectedCountry.code
                          ? "#ff0000"
                          : "transparent"
                      } // Background color when checked
                      isChecked={country.code === selectedCountry.code}
                      onTouchStart={() => handleSelectCountry(country)}
                    />
                  </View>
                ))}
              </Animated.View>
            </View>
          </Modal>

          <View style={styles.separator}>
            <Text style={{ color: "#c1c1c1" }}>
              ----------------------------- o -----------------------------
            </Text>
          </View>
          <TouchableOpacity style={styles.socialButton}>
            <Text>Inicia sesión con Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text>Inicia sesión con Google</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default LoginModal;
