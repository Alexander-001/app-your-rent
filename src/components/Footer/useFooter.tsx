import {
  faHeart,
  faMagnifyingGlass,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import { OptionIcons } from "../../interfaces/footer.interface";

export const useFooter = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Explora");
  const [indicatorPosition] = useState<Animated.Value>(new Animated.Value(0));
  const [indicatorWidth, setIndicatorWidth] = useState<number>(0);
  const [options] = useState<OptionIcons[]>([
    {
      name: "Explora",
      icon: faMagnifyingGlass,
    },
    {
      name: "Favoritos",
      icon: faHeart,
    },
    {
      name: "Mensajes",
      icon: faMessage,
    },
    {
      name: "Perfil",
      icon: faUser,
    },
  ]);

  const optionRefs: any = useState(options.map(() => React.createRef()))[0];

  useEffect(() => {
    const selectedIndex = options.findIndex(
      (option) => option.name === selectedOption
    );
    animatedBorder(selectedIndex);
  }, [optionRefs, selectedOption, indicatorPosition, options]);

  const handlePress = (optionName: string, index: number) => {
    setSelectedOption(optionName);
    animatedBorder(index);
  };

  const animatedBorder = (selectedIndex: number) => {
    const optionRef = optionRefs[selectedIndex];
    if (optionRef && optionRef.current) {
      optionRef.current.measure(
        (
          x: number,
          y: number,
          width: number,
          height: number,
          pageX: number,
          pageY: number
        ) => {
          setIndicatorWidth(width);
          Animated.spring(indicatorPosition, {
            toValue: pageX,
            useNativeDriver: false,
          }).start();
        }
      );
    }
  };

  return {
    //* Variables
    indicatorPosition,
    indicatorWidth,
    options,
    optionRefs,
    selectedOption,

    //* Functions
    handlePress,
  };
};
