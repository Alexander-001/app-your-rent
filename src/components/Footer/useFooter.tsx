import {
  faBars,
  faBell,
  faHeart,
  faHome,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { Animated } from "react-native";
import { OptionIcons, OptionsName } from "../../interfaces/footer.interface";
import AppContext from "../../utils/AppContext";
import { StateAppContext } from "../../utils/AppContext/useInitialStateAppContext";

const defaultOptions: OptionIcons[] = [
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
    name: "Login",
    icon: faUser,
  },
];

export const useFooter = () => {
  const { token, setRenderView }: StateAppContext = useContext<any>(AppContext);
  const [selectedOption, setSelectedOption] = useState<string>("Inicio");
  const [indicatorPosition] = useState<Animated.Value>(new Animated.Value(0));
  const [indicatorWidth, setIndicatorWidth] = useState<number>(0);
  const [options, setOptions] = useState<OptionIcons[]>(defaultOptions);

  useEffect(() => {
    console.log("token", token);
    if (token !== "") {
      setOptions([
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
    } else setOptions(defaultOptions);
    setSelectedOption("Inicio");
  }, [token]);

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
    if (Object.values(OptionsName).includes(optionName as OptionsName)) {
      setRenderView(optionName);
    }
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
