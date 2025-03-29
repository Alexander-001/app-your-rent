import {
  faBars,
  faBell,
  faHeart,
  faHome,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { Animated } from "react-native";
import { OptionIcons, OptionsName } from "../../interfaces/footer.interface";
import AppContext from "../../utils/AppContext";
import { StateAppContext } from "../../utils/AppContext/useInitialStateAppContext";

export const useFooter = () => {
  const { setRenderView }: StateAppContext = useContext<any>(AppContext);
  const [selectedOption, setSelectedOption] = useState<string>("Inicio");
  const [indicatorPosition] = useState<Animated.Value>(new Animated.Value(0));
  const [indicatorWidth, setIndicatorWidth] = useState<number>(0);
  const [options] = useState<OptionIcons[]>([
    {
      name: "Inicio",
      icon: faHome,
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
      name: "Notificaciones",
      icon: faBell,
    },
    {
      name: "Menú",
      icon: faBars,
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

  const onClickOptionLogo = (optionName: string) => {
    if (Object.values(OptionsName).includes(optionName as OptionsName)) {
      setRenderView(optionName);
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
    onClickOptionLogo,
  };
};
