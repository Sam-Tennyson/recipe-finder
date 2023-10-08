import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedRecipe: null,
};

// creating action-reducer slice
export const RecipeSlice = createSlice({
    name: "recipe_slice",
    initialState,
    reducers: {
        setSelectedRecipe: (state, action) => {
            state.selectedRecipe = action.payload
        }
    },
});

// Action creators are generated for each case reducer function
export const { setSelectedRecipe } = RecipeSlice.actions;

export default RecipeSlice.reducer;