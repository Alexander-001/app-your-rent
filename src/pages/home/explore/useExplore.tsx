import { useState } from "react";

export const useExplore = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Buscar");

  return {
    //* Variables
    selectedOption,
    //* Functions
    setSelectedOption,
  };
};
