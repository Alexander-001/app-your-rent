import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import Footer from "../../components/Footer";
import { OptionsName } from "../../interfaces/footer.interface";
import Explore from "./explore";
import Favorites from "./favorites";
import { default as Menu } from "./menu";
import Message from "./message";
import Notifications from "./notifications";
import { useHome } from "./useHome";

const Home: React.FC<{}> = () => {
  const { renderView } = useHome();
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

  return (
    <View style={{ flex: 1 }}>
      {/* Contenedor del contenido, ajustado para no cubrir el Footer */}
      <Animated.View
        style={{
          flexGrow: 1, // Permite que el contenido se expanda sin empujar el Footer
          opacity: fadeAnim,
          transform: [{ translateY: translateAnim }],
          paddingBottom: 80,
        }}
      >
        {renderView === OptionsName.HOME && <Explore />}
        {renderView === OptionsName.FAVORITES && <Favorites />}
        {renderView === OptionsName.MESSAGES && <Message />}
        {renderView === OptionsName.NOTIFICATIONS && <Notifications />}
        {renderView === OptionsName.MENU && <Menu />}
      </Animated.View>

      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <Footer />
      </View>
    </View>
  );
};

export default Home;
