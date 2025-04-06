import { Text, View } from "react-native";
import LoginModal from "../../../components/LoginModal";
import LoginView from "../../../components/LoginView";
import { useFavorites } from "./useFavorites";

interface FavoritesProps {
  validateSuccessLogin: () => void;
}

const Favorites: React.FC<FavoritesProps> = ({ validateSuccessLogin }) => {
  const {
    //* Variables
    isLogged,
    isModalVisible,

    //* Functions
    onPressLoginView,
    closeModal,
  } = useFavorites();

  return (
    <>
      {isModalVisible && (
        <LoginModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
          callbackLogin={validateSuccessLogin}
        />
      )}
      {!isLogged ? (
        <LoginView
          title="Favoritos"
          secondTitle="Inicia sesión para ver tus favoritos"
          description="Puedes crear, consultar o editar listas de favoritos una vez que hayas iniciado sesión"
          onPressLogin={onPressLoginView}
        />
      ) : (
        <View>
          <Text>Favorites</Text>
        </View>
      )}
    </>
  );
};

export default Favorites;
