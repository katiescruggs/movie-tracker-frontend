import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer.js';
import userReducer from './userReducer.js';
import errorReducer from './errorReducer.js';
import favoritesReducer from './favoritesReducer.js';


const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer, 
  error: errorReducer,
  favorites: favoritesReducer
});

export default rootReducer;