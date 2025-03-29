import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useFooter } from "./useFooter";

const Footer = () => {
  const {
    //* Variables
    indicatorPosition,
    indicatorWidth,
    options,
    optionRefs,
    selectedOption,

    //* Functions
    handlePress,
    onClickOptionLogo,
  } = useFooter();

  return (
    <View style={styles.footerContainer}>
      <Animated.View
        style={[
          styles.selectionIndicator,
          {
            left: indicatorPosition,
            width: indicatorWidth,
          },
        ]}
      />
      {options.map((option, index) => (
        <View ref={optionRefs[index]} key={index}>
          <TouchableOpacity
            style={[styles.option]}
            onPressIn={() => onClickOptionLogo(option.name)}
            onPress={() => handlePress(option.name, index)}
          >
            <FontAwesomeIcon
              icon={option.icon}
              size={20}
              style={{
                color: selectedOption === option.name ? "#ff0000" : "#c1c1c1",
              }}
            />
            <Text
              style={[
                styles.optionText,
                selectedOption === option.name && styles.selectedText,
              ]}
            >
              {option.name}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Footer;
