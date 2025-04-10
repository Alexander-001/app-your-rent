import { useState } from "react";
import { Animated, ScrollView, Text, View } from "react-native";
import Header from "../../../components/Header";
import SearchView from "./search";
import { useExplore } from "./useExplore";

const Explore: React.FC<{}> = () => {
  const { selectedOption, setSelectedOption } = useExplore();

  // Estado para manejar la opacidad del header
  const [headerVisible, setHeaderVisible] = useState(true);

  // Función para manejar el desplazamiento
  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setHeaderVisible(offsetY <= 50); // Si se desplaza más de 50px, oculta el header
  };

  return (
    <>
      <Animated.View
        style={{
          opacity: headerVisible ? 1 : 0,
        }}
      >
        <Header setSelectedOptionHeader={setSelectedOption} />
      </Animated.View>

      {selectedOption === "Buscar" && (
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
          <View>
            <SearchView />
          </View>
        </ScrollView>
      )}
      {selectedOption === "Vender" && (
        <View>
          <Text>Vender</Text>
        </View>
      )}
      {selectedOption === "Arrendar" && (
        <View>
          <Text>Arrendar</Text>
        </View>
      )}
      {selectedOption === "Categorias" && (
        <View>
          <Text>Categorias</Text>
        </View>
      )}
    </>
  );
};

export default Explore;
