import { useState } from "react";

export const useLogin = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const closeModal = () => setIsModalVisible(false);

  const onClickLogin = () => {
    setIsModalVisible(true);
  };

  return {
    //* Variables
    isModalVisible,

    //* Functions
    closeModal,
    onClickLogin,
  };
};
