import { combineReducers } from 'redux'
import moviesReducer from './movies-reducer.js';
import userReducer from './user-reducer.js';
import errorReducer from './error-reducer.js';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer, 
  error: errorReducer
})

export default rootReducer;