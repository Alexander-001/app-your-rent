import { useContext } from "react";
import AppContext from "../../utils/AppContext";
import { StateAppContext } from "../../utils/AppContext/useInitialStateAppContext";

export const useHome = () => {
  const { renderView }: StateAppContext = useContext<any>(AppContext);

  return {
    //* Variables
    renderView,
    //* Functions
  };
};
