import { Text, View } from "react-native";
import LoginModal from "../../../components/LoginModal";
import LoginView from "../../../components/LoginView";
import { useMessage } from "./useMessage";

interface MessageProps {
  validateSuccessLogin: () => void;
}

const Message: React.FC<MessageProps> = ({ validateSuccessLogin }) => {
  const {
    //* Variables
    isLogged,
    isModalVisible,

    //* Functions
    onPressLoginView,
    closeModal,
  } = useMessage();

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
          title="Mensajes"
          secondTitle="Inicia sesión para ver tus mensajes"
          description="Cuando inicies sesión podrás ver los mensajes de tus productos."
          onPressLogin={onPressLoginView}
        />
      ) : (
        <View>
          <Text>Messages</Text>
        </View>
      )}
    </>
  );
};

export default Message;
