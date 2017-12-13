import { combineReducers } from 'redux'
import moviesReducer from './movies-reducer.js'

const rootReducer = combineReducers({
  movies: moviesReducer
})

export default rootReducer