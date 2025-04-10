import {
  faBriefcase,
  faList,
  faMagnifyingGlass,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import { OptionIcons } from "../../interfaces/header.interface";

export const useHeader = (
  setSelectedOptionHeader: React.Dispatch<React.SetStateAction<string>>
) => {
  const [selectedOption, setSelectedOption] = useState("Buscar");
  const [indicatorPosition] = useState<Animated.Value>(new Animated.Value(0));
  const [indicatorWidth, setIndicatorWidth] = useState<number>(0);
  const [options] = useState<OptionIcons[]>([
    { name: "Buscar", icon: faMagnifyingGlass },
    { name: "Vender", icon: faMoneyBill },
    { name: "Arrendar", icon: faBriefcase },
    { name: "Categorias", icon: faList },
  ]);

  const scrollViewRef: any = useRef(null);
  const optionRefs: any = useRef<(View | null)[]>([]);

  useEffect(() => {
    if (optionRefs.current[0] && scrollViewRef.current) {
      optionRefs.current[0].measureLayout(
        scrollViewRef.current,
        (x: number, y: number, width: number) => {
          Animated.spring(indicatorPosition, {
            toValue: x,
            useNativeDriver: false,
          }).start();
          setIndicatorWidth(width);
        }
      );
    }
  }, []);

  const handlePress = (index: number) => {
    setSelectedOption(options[index].name);
    setSelectedOptionHeader(options[index].name);
    if (optionRefs.current[index] && scrollViewRef.current) {
      optionRefs.current[index].measureLayout(
        scrollViewRef.current,
        (x: number, y: number, width: number) => {
          Animated.spring(indicatorPosition, {
            toValue: x,
            useNativeDriver: false,
          }).start();
          setIndicatorWidth(width);
        }
      );
    }
  };

  return {
    //* Variables
    options,
    selectedOption,
    optionRefs,
    scrollViewRef,
    indicatorPosition,
    indicatorWidth,

    //* Functions
    setSelectedOption,
    setIndicatorWidth,
    handlePress,
  };
};
