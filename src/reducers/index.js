import { combineReducers } from 'redux'
import moviesReducer from './movies-reducer.js';
import userReducer from './user-reducer.js';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer
})

export default rootReducer