import { combineReducers } from 'redux';
import { darkModeReducer } from './themeReducers';

const reducer = combineReducers({
  // listar los reducers
  darkMode: darkModeReducer,
});

export default reducer;
