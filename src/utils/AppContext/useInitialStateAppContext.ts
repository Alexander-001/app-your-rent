import { useState } from "react";

interface InitialStateAppContext {
  token: string;
  renderView: string;
}

export const initialState: InitialStateAppContext = {
  token: "",
  renderView: "Explora",
};

export const useInitialStateAppContext = () => {
  const [state, setState] = useState(initialState);

  const setToken = (token: string) => {
    setState((prevState) => ({ ...prevState, token }));
  };

  const setRenderView = (renderView: string) => {
    setState((prevState) => ({ ...prevState, renderView }));
  };

  return {
    //* Variables
    token: state.token,
    renderView: state.renderView,

    //* Functions
    setToken,
    setRenderView,
  };
};

export type StateAppContext = ReturnType<typeof useInitialStateAppContext>;
