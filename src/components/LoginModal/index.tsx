import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
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

interface LoginProps {
  isModalVisible: boolean;
  closeModal: Function;
  callbackLogin?: Function;
}

const LoginModal: React.FC<LoginProps> = ({
  isModalVisible,
  closeModal,
  callbackLogin,
}) => {
  const {
    //* Variables
    panResponder,
    modalPosition,
    selectedCountry,
    inputs,
    isCountryModalVisible,
    countryModalPosition,
    countries,
    showEmailInput,
    errorsInputs,
    showInsertCode,
    otp,
    inputRefs,
    otpColors,
    showPasswordInput,
    showPassword,

    //* Functions
    closeMainModal,
    openCountryModal,
    closeCountryModal,
    handleSelectCountry,
    onPressNext,
    onPressNextCode,
    onPressEmail,
    handleChangeInputs,
    handleChange,
    handleKeyPress,
    setShowPassword,
  } = useLoginModal(isModalVisible, closeModal, callbackLogin);

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
          {showEmailInput ? (
            <View>
              <View style={styles.inputContainer}>
                <Text style={styles.placeholder}>Ingresa tu correo</Text>
                <TextInput
                  style={styles.input}
                  placeholder="correo@correo.com"
                  keyboardType="email-address"
                  value={inputs.email}
                  onChangeText={(text) => handleChangeInputs("email", text)}
                />
                {showPasswordInput && (
                  <View style={styles.passwordContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="******"
                      secureTextEntry={!showPassword}
                      keyboardType="visible-password"
                      value={inputs.password}
                      onChangeText={(text) =>
                        handleChangeInputs("password", text)
                      }
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                      style={styles.passwordIcon}
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faUnlock : faLock}
                        size={20}
                        color="#000"
                      />
                    </TouchableOpacity>
                  </View>
                )}
                {errorsInputs.email !== "" && (
                  <Text style={styles.errorsInputs}>{errorsInputs.email}</Text>
                )}
                {errorsInputs.password !== "" && (
                  <Text style={styles.errorsInputs}>
                    {errorsInputs.password}
                  </Text>
                )}
              </View>
            </View>
          ) : (
            <View>
              {showInsertCode ? (
                <View style={styles.container}>
                  <Text style={styles.textCode}>
                    Ingresa el codigo que enviamos por SMS al{" "}
                    {inputs.phoneNumber}
                  </Text>
                  <View style={styles.contentCode}>
                    {otp.map((digit, index) => (
                      <TextInput
                        key={index}
                        ref={inputRefs[index]}
                        style={[
                          styles.inputCode,
                          { borderColor: otpColors[index] || "#ddd" },
                        ]}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                      />
                    ))}
                  </View>
                </View>
              ) : (
                <View>
                  <View style={styles.inputContainer}>
                    <View style={styles.selectContainer}>
                      <Text style={styles.placeholder}>País o Región</Text>
                      <TouchableOpacity
                        onPress={openCountryModal}
                        style={styles.pickerButton}
                      >
                        <Text>
                          {selectedCountry.message || "Selecciona tu país"}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Número de teléfono"
                      keyboardType="phone-pad"
                      value={inputs.phoneNumber}
                      onChangeText={(text) =>
                        handleChangeInputs("phoneNumber", text)
                      }
                    />
                    {errorsInputs.phoneNumber !== "" && (
                      <Text style={styles.errorsInputs}>
                        {errorsInputs.phoneNumber}
                      </Text>
                    )}
                  </View>
                  <Text style={styles.message}>
                    Te llamaremos o enviaremos un mensaje para confirmar el
                    número.
                  </Text>
                </View>
              )}
            </View>
          )}
          <TouchableOpacity
            style={styles.continueButton}
            onPress={
              !showEmailInput && showInsertCode ? onPressNextCode : onPressNext
            }
            activeOpacity={0.8}
          >
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
                      }
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
            ------------------------ o ------------------------
            </Text>
          </View>
          {showEmailInput ? (
            <TouchableOpacity
              style={styles.socialButton}
              onPress={onPressEmail}
            >
              <Text>Iniciar con tu telefono</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.socialButton}
              onPress={onPressEmail}
            >
              <Text>Iniciar con tu correo</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.socialButton}>
            <Text>Iniciar con Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text>Iniciar con Google</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default LoginModal;
