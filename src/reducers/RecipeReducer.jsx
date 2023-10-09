export function RecipeReducer(state, action) {
    switch (action.type) {
        case "SET_SELECTED_RECIPE":
            return { ...state, selectedRecipe: action.payload };
        case "SET_RECIPE_DATA":
            return { ...state, recipeData: action.payload };
        default:
            return state;
    }
}
