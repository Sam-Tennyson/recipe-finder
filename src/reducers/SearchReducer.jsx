import { SET_ERROR_MESSAGE_DATA, SET_SEARCH_DATA} from "../actions"

export function SearchReducer(state, action) {
    switch (action.type) {
        case SET_SEARCH_DATA:
            return { ...state, search: action.payload };
        case SET_ERROR_MESSAGE_DATA:
            return { ...state, err_message: action.payload };
        default:
            return state;
    }
}
