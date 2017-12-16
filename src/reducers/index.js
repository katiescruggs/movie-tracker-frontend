import { combineReducers } from 'redux'
import moviesReducer from './movies-reducer.js';
import userReducer from './user-reducer.js';
import errorReducer from './error-reducer.js';
import favoritesReducer from './favorites-reducer.js';


const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer, 
  error: errorReducer,
  favorites: favoritesReducer
});

export default rootReducer;