import { useContext, useEffect, useRef, useState } from "react";
import { Alert, Animated } from "react-native";
import { OptionsName } from "../../interfaces/footer.interface";
import AppContext from "../../utils/AppContext";
import { StateAppContext } from "../../utils/AppContext/useInitialStateAppContext";

export const useHome = () => {
  const { renderView, setToken, setRenderView }: StateAppContext =
    useContext<any>(AppContext);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    fadeAnim.setValue(0);
    translateAnim.setValue(10);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
  }, [renderView]);

  const closeModal = () => setIsModalVisible(false);

  const onClickCloseSession = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estás seguro de que quieres cerrar sesión?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Cerrar sesión",
          style: "destructive",
          onPress: () => {
            setToken("");
            setRenderView(OptionsName.HOME);
          },
        },
      ]
    );
  };

  const validateSuccessLogin = () => {
    setRenderView(OptionsName.HOME);
  };

  const changeSelectedOptionFooter = () => {};

  return {
    //* Variables
    renderView,
    isModalVisible,
    fadeAnim,
    translateAnim,

    //* Functions
    closeModal,
    onClickCloseSession,
    validateSuccessLogin,
    changeSelectedOptionFooter,
  };
};
