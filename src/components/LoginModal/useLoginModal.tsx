import { useContext, useEffect, useRef, useState } from "react";
import { Alert, Animated, Dimensions, PanResponder } from "react-native";
import { loginEmail } from "../../services/auth/login-email";
import { loginPhone } from "../../services/auth/login-phone";
import { validateEmail } from "../../services/auth/validate-email";
import AppContext from "../../utils/AppContext";
import { StateAppContext } from "../../utils/AppContext/useInitialStateAppContext";

export const useLoginModal = (
  isModalVisible: boolean,
  closeModal: Function,
  callbackLogin?: Function
) => {
  const { setToken }: StateAppContext = useContext<any>(AppContext);
  const { height } = Dimensions.get("window");
  const MODAL_HEIGHT = height * 0.9;
  const [isCountryModalVisible, setIsCountryModalVisible] =
    useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<{
    code: string;
    message: string;
  }>({ code: "", message: "" });
  const [inputs, setInputs] = useState<{
    phoneNumber: string;
    email: string;
    password: string;
  }>({ phoneNumber: "", email: "", password: "" });
  const [showEmailInput, setShowEmailInput] = useState<boolean>(false);
  const [showInsertCode, setShowInsertCode] = useState<boolean>(false);
  const [showPasswordInput, setShowPasswordInput] = useState<boolean>(false);
  const [emailCache, setEmailCache] = useState<string>("");
  const [errorsInputs, setErrorsInputs] = useState<{
    phoneNumber: string;
    email: string;
    password: string;
  }>({ phoneNumber: "", email: "", password: "" });
  const [countries, setCountries] = useState<any[]>([
    { name: "Chile", code: "+56" },
    { name: "Argentina", code: "+54" },
    { name: "Perú", code: "+51" },
    { name: "Colombia", code: "+57" },
    { name: "México", code: "+52" },
  ]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpColors, setOtpColors] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const modalPosition = useRef(new Animated.Value(height)).current;
  const countryModalPosition = useRef(new Animated.Value(height)).current;

  const inputRefs: any = Array(6)
    .fill(null)
    .map(() => useRef(null));

  const isOtpComplete = otp.every((digit) => digit !== "");

  useEffect(() => {
    if (isModalVisible) openModal();
  }, [isModalVisible]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return gestureState.dy > 5 || gestureState.dy < -5;
      },
      onPanResponderMove: (_, gestureState) => {
        modalPosition.setValue(Math.max(gestureState.dy, -MODAL_HEIGHT));
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          closeModal();
        } else {
          Animated.spring(modalPosition, {
            toValue: height - MODAL_HEIGHT,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const openCountryModal = () => {
    setIsCountryModalVisible(true);
    Animated.timing(countryModalPosition, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeCountryModal = () => {
    Animated.timing(countryModalPosition, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsCountryModalVisible(false));
  };

  const openModal = () => {
    Animated.timing(modalPosition, {
      toValue: height - MODAL_HEIGHT,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const closeMainModal = () => {
    Animated.timing(modalPosition, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => closeModal());
  };

  const handleSelectCountry = (country: { name: string; code: string }) => {
    setSelectedCountry({
      code: country.code,
      message: `${country.name} (${country.code})`,
    });
    closeCountryModal();
  };

  const handleChangeInputs = (name: string, value: string) => {
    setErrorsInputs((prevState) => ({
      ...prevState,
      [name]: "",
    }));
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onPressNext = async () => {
    if (emailCache === inputs.email && showPasswordInput) {
      if (inputs.password === "") {
        setErrorsInputs((prevState) => ({
          ...prevState,
          password: "Se debe ingresar contraseña.",
        }));
        return;
      }
      const { data } = await loginEmail({
        email: inputs.email,
        password: inputs.password,
      });
      if (data.token === "") {
        Alert.alert(data.message);
        return;
      }
      setToken(data.token);
      closeModal();
      if (callbackLogin) callbackLogin();
      return;
    }
    if (showEmailInput) {
      if (inputs.email === "") {
        setErrorsInputs((prevState) => ({
          ...prevState,
          email: "Se debe ingresar correo.",
        }));
        return;
      }
      const { data } = await validateEmail({ email: inputs.email });
      setShowPasswordInput(data.existsUser);
      setEmailCache(inputs.email);
      if (!data.existsUser) {
        setShowPasswordInput(false);
        setErrorsInputs((prevState) => ({
          ...prevState,
          email: "Usuario no existe",
          password: "",
        }));
      }
      return;
    }
    if (selectedCountry.code === "") {
      setErrorsInputs((prevState) => ({
        ...prevState,
        phoneNumber: "Se debe ingresar código del país .",
      }));
      return;
    }
    if (inputs.phoneNumber === "") {
      setErrorsInputs((prevState) => ({
        ...prevState,
        phoneNumber: "Se debe ingresar telefono.",
      }));
      return;
    }
    const phone = `${selectedCountry.code}${inputs.phoneNumber}`;
    const { data } = await loginPhone({ phoneNumber: phone });
    if (data.send) setShowInsertCode(true);
    Alert.alert(data.message);
  };

  const onPressNextCode = () => {
    const newColors = otp.map((digit) => (digit ? "#09f" : "#ff0000"));
    setOtpColors(newColors);
    if (otp.every((digit) => digit)) {
      console.log("llamando a api");
    }
  };

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    const newColors = [...otpColors];
    newColors[index] = text ? "#09f" : "#ff0000";
    setOtpColors(newColors);
    if (text && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };
  56;

  const handleKeyPress = (e: any, index: any) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const onPressEmail = () => {
    setShowEmailInput(!showEmailInput);
  };

  return {
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
    isOtpComplete,
    otpColors,
    showPasswordInput,
    showPassword,

    //* Functions
    closeMainModal,
    openCountryModal,
    closeCountryModal,
    handleSelectCountry,
    onPressNext,
    onPressEmail,
    handleChangeInputs,
    handleChange,
    handleKeyPress,
    onPressNextCode,
    setShowPassword,
  };
};
