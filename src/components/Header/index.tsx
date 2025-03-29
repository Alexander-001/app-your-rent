import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  Animated,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useHeader } from "./useHeader";

const Header = () => {
  const {
    //* Variables
    options,
    selectedOption,
    optionRefs,
    scrollViewRef,
    indicatorPosition,
    indicatorWidth,

    //* Functions
    handlePress,
  } = useHeader();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Empieza tu búsqueda..."
        placeholderTextColor="#999"
      />
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.optionsContainer}
      >
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
          <View
            key={index}
            ref={(el) => (optionRefs.current[index] = el)}
            collapsable={false}
          >
            <TouchableOpacity
              style={styles.option}
              onPress={() => handlePress(index)}
            >
              <FontAwesomeIcon
                icon={option.icon}
                size={30}
                style={{
                  color: selectedOption === option.name ? "#3d3d3d" : "#c1c1c1",
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
      </ScrollView>
    </View>
  );
};

export default Header;
