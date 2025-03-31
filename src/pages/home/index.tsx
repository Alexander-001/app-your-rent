import { Animated, View } from "react-native";
import Footer from "../../components/Footer";
import LoginModal from "../../components/LoginModal";
import { OptionsName } from "../../interfaces/footer.interface";
import Explore from "./explore";
import Favorites from "./favorites";
import LoginScreen from "./login";
import Menu from "./menu";
import Message from "./message";
import Notifications from "./notifications";
import { useHome } from "./useHome";

const Home: React.FC<{}> = () => {
  const {
    //* Variables
    renderView,
    isModalVisible,
    fadeAnim,
    translateAnim,

    //* Functions
    closeModal,
  } = useHome();

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[
          { opacity: fadeAnim, transform: [{ translateY: translateAnim }] },
        ]}
      >
        <LoginModal isModalVisible={isModalVisible} closeModal={closeModal} />
        {renderView === OptionsName.HOME && <Explore />}
        {renderView === OptionsName.FAVORITES && <Favorites />}
        {renderView === OptionsName.MESSAGES && <Message />}
        {renderView === OptionsName.NOTIFICATIONS && <Notifications />}
        {renderView === OptionsName.MENU && <Menu />}
        {renderView === OptionsName.LOGIN && <LoginScreen />}
      </Animated.View>
      <Footer />
    </View>
  );
};

export default Home;
