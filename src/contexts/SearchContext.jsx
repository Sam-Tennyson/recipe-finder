import React, { createContext, useReducer } from "react";
import { SearchReducer } from "../reducers/SearchReducer";

// Define your initial state here
const initialState = {
    search: "",
    err_message: "",
};

// Create a context for your Redux-like state
const SearchContext = createContext();

// Create a custom provider component
export function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;