import React, { createContext, useReducer } from "react";

export const initialState = {
  theme: true, 
  data: [], 
  favorites: [], 
};

export const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: !state.theme };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_FAV":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAV":
      return { ...state, favorites: state.favorites.filter(fav => fav.id !== action.payload) };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('Global Context State:', state);

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
