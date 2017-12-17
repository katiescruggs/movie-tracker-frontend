import moviesReducer from './moviesReducer';
import * as actions from '../actions';

describe('movieReducer tests', () => {
  it('should return the default state', () => {
    const expected = [];
    expect(moviesReducer(undefined, {})).toEqual(expected)
  })

  it('should return a new state, with a movie', () => {
    const movies = [ { title: 'Star Wars'}, { title: 'Justice League'} ];
    const expected = [...movies];
    expect(moviesReducer(undefined, actions.setMovies(movies))).toEqual(expected)
  })
})