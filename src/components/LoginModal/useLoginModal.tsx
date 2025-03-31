import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, PanResponder } from "react-native";

export const useLoginModal = (
  isModalVisible: boolean,
  closeModal: Function
) => {
  const { height } = Dimensions.get("window");
  const MODAL_HEIGHT = height * 0.9;
  const countries = [
    { name: "Chile", code: "+56" },
    { name: "Argentina", code: "+54" },
    { name: "Perú", code: "+51" },
    { name: "Colombia", code: "+57" },
    { name: "México", code: "+52" },
  ];

  const [isCountryModalVisible, setIsCountryModalVisible] =
    useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<{
    code: string;
    message: string;
  }>({ code: "", message: "" });
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [selectedCountries, setSelectedCountries] = useState<any[]>([]);

  const modalPosition = useRef(new Animated.Value(height)).current;
  const countryModalPosition = useRef(new Animated.Value(height)).current;

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

  useEffect(() => {
    if (isModalVisible) openModal();
  }, [isModalVisible]);

  const handleSelectCountry = (country: { name: string; code: string }) => {
    setSelectedCountry({
      code: country.code,
      message: `${country.name} (${country.code})`,
    });
    closeCountryModal();
  };

  return {
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
  };
};
