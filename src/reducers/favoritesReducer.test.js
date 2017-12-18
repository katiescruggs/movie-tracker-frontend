import favoritesReducer from './favoritesReducer';
import * as actions from '../actions';

describe('favoritesReducer tests', () => {
  
  it('should return default state', () => {
    const expected = [];
    expect(favoritesReducer(undefined, {})).toEqual(expected);
  });

  it('should return a new state, with a favorite', () => {
    const favorites = [{title: 'Star Wars', overview: 'Lightsabers'}];
    const expected = [...favorites];
    expect(favoritesReducer(undefined, actions.setFavorites(favorites))).
      toEqual(expected);
  });

});