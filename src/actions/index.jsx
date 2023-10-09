export const SET_SELECTED_RECIPE = "SET_SELECTED_RECIPE"
export const SET_RECIPE_DATA = "SET_RECIPE_DATA"
export const SET_SEARCH_DATA = "SET_SEARCH_DATA"
export const SET_ERROR_MESSAGE_DATA = "SET_ERROR_MESSAGE_DATA"

export const setRecipesData = (payload) => {
    return { type: SET_RECIPE_DATA, payload }
}

export const setSearchData = (payload) => {
    return { type: SET_SEARCH_DATA, payload }
}

export const setSearchErrorMessageData = (payload) => {
    return { type: SET_ERROR_MESSAGE_DATA, payload }
}