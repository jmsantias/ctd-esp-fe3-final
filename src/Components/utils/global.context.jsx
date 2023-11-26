import React, { createContext, useReducer } from "react";

export const initialState = {
  theme: "light", // Puedes establecer un tema predeterminado
  data: [], // Datos iniciales vacíos
  favorites: [], // Para almacenar dentistas favoritos
};

export const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_FAV":
      return { ...state, favorites: [...state.favorites, action.payload] };
    // Puedes agregar más casos según tus necesidades
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = {
    state,
    dispatch,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};