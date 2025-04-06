import React from "react";
import { Text, View } from "react-native";
import LoginModal from "../../../components/LoginModal";
import LoginView from "../../../components/LoginView";
import { useNotifications } from "./useNotification";

interface NotificationsProps {
  validateSuccessLogin: () => void;
}

const Notifications: React.FC<NotificationsProps> = ({
  validateSuccessLogin,
}) => {
  const {
    //* Variables
    isLogged,
    isModalVisible,

    //* Functions
    onPressLoginView,
    closeModal,
  } = useNotifications();

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
          title="Notificaciones"
          secondTitle="Inicia sesión para ver tus notificaciones"
          description="Cuando inicies sesión podrás ver las notificaciones de tus productos."
          onPressLogin={onPressLoginView}
        />
      ) : (
        <View>
          <Text>Notificaciones</Text>
        </View>
      )}
    </>
  );
};

export default Notifications;
