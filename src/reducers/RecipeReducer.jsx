import {SET_RECIPE_DATA} from "../actions"

export function RecipeReducer(state, action) {
    switch (action.type) {
        case "SET_RECIPE_DATA":
            return { ...state, recipeData: action.payload };
        default:
            return state;
    }
}
