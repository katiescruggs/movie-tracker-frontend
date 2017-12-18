import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { CardContainer, mapStateToProps } from './CardContainer';

describe('CardContainer tests', () => {
  let cardContainer;
  beforeEach( () => {
    cardContainer = shallow(
      <CardContainer 
        movies={['array', 'of', 'movies']}
        favorites={['array', 'of', 'favorites']}
        location={{pathname: 'current-path'}}
      />);
  });
  
  it('should match the snapshot', () => {
    expect(cardContainer).toMatchSnapshot();
  });

  it('should be defined', () => {
    expect(cardContainer).toBeDefined();
  });

  describe('mapStateToProps', () => {
    it('should pull movies from the store', () => {
      const mockStore = {
        movies: [{title: 'Star Wars'}],
        favorites: [{title: 'Wonder Woman'}]
      };
      const result = mapStateToProps(mockStore);
      expect(result.movies).toEqual(mockStore.movies);
    });
    it('should pull favorites from the store', () => {
      const mockStore = {
        movies: [{title: 'Star Wars'}],
        favorites: [{title: 'Wonder Woman'}]
      };
      const result = mapStateToProps(mockStore);      
      expect(result.favorites).toEqual(mockStore.favorites);
    });
  });

});