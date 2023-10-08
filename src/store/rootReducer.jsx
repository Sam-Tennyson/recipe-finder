import { combineReducers } from 'redux';

// Import your individual reducers here
import RecipeSlice from './slice/RecipeSlice';

// Combine the reducers into one root reducer
const rootReducer = combineReducers({
    recipe: RecipeSlice
});

export default rootReducer;