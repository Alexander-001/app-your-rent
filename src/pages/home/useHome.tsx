import { useContext } from "react";
import AppContext from "../../utils/AppContext";
import { StateAppContext } from "../../utils/AppContext/useInitialStateAppContext";

export const useHome = () => {
  const { renderView }: StateAppContext = useContext<any>(AppContext);

  console.log("Render View: ", renderView);
  return {
    //* Variables
    //* Functions
  };
};
