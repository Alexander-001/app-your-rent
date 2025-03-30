import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import Footer from "../../components/Footer";
import { OptionsName } from "../../interfaces/footer.interface";
import Explore from "./explore";
import Favorites from "./favorites";
import { default as Menu } from "./menu";
import Message from "./message";
import Notifications from "./notifications";
import { styles } from "./styles";
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
      <Animated.View
        style={[
          styles.animatedView,
          { opacity: fadeAnim, transform: [{ translateY: translateAnim }] },
        ]}
      >
        {renderView === OptionsName.HOME && <Explore />}
        {renderView === OptionsName.FAVORITES && <Favorites />}
        {renderView === OptionsName.MESSAGES && <Message />}
        {renderView === OptionsName.NOTIFICATIONS && <Notifications />}
        {renderView === OptionsName.MENU && <Menu />}
      </Animated.View>
      <Footer />
    </View>
  );
};

export default Home;
