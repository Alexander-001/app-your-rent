import { useContext, useState } from "react";
import AppContext from "../../../utils/AppContext";
import { StateAppContext } from "../../../utils/AppContext/useInitialStateAppContext";
import { validateIsLogged } from "../../../utils/common";
export const useFavorites = () => {
  const { token }: StateAppContext = useContext<any>(AppContext);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const isLogged = validateIsLogged(token);

  const onPressLoginView = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => setIsModalVisible(false);

  return {
    //* Variables
    isLogged,
    isModalVisible,

    //* Functions
    onPressLoginView,
    closeModal,
  };
};
