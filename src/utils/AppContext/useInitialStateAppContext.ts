import { useState } from "react";

interface InitialStateAppContext {
  token: string;
}

export const initialState: InitialStateAppContext = {
  token: "",
};

export const useInitialStateAppContext = () => {
  const [state, setState] = useState(initialState);

  const setToken = (token: string) => {
    setState((prevState) => ({ ...prevState, token }));
  };

  return {
    //* Variables
    token: state.token,

    //* Functions
    setToken,
  };
};
