import { useContext, useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import AppContext from "../../utils/AppContext";
import { StateAppContext } from "../../utils/AppContext/useInitialStateAppContext";

export const useHome = () => {
  const { renderView }: StateAppContext = useContext<any>(AppContext);
  const [isModalVisible, setIsModalVisible] = useState(true);
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

  return {
    //* Variables
    renderView,
    isModalVisible,
    fadeAnim,
    translateAnim,

    //* Functions
    closeModal,
  };
};
