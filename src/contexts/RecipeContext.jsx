import React, { createContext, useContext, useReducer } from "react";
import { RecipeReducer } from "../reducers/RecipeReducer";

// Define your initial state here
const initialState = {
  selectedRecipe: null,
  recipeData: null,
};

// Create a context for your Redux-like state
const RecipeContext = createContext();

// Create a custom provider component
export function RecipeProvider({ children }) {
  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeContext;