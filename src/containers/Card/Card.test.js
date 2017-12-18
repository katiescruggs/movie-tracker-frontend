import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps, mapDispatchToProps } from './Card';

describe('Card tests', () => {
  describe('Card', () => {
    let card;
    const mockAddFav = jest.fn();
    const mockRemoveFav = jest.fn();
    const mockMovie = {
      title: 'title',
      poster_path: '.asdf',
      release_date: 'date',
      vote_average: '2',
      overview: 'overview'
    };
    let mockFavorites = ['array', 'of', 'favorites'];

    beforeEach( () => {
      card = shallow(
        <Card 
          userId={1}
          addFav={mockAddFav}
          removeFav={mockRemoveFav}
          movie={mockMovie}
          favorites={mockFavorites}
          path={'/favorites'}
        />);
    });

    it('should exist', () => {
      expect(card).toBeDefined();
    });

    it('should match the snapshot', () => {
      expect(card).toMatchSnapshot();
    });

    it('should call addFav on click', () => {
      card.find('.btn-card-favorite').first().simulate('click');
      expect(mockAddFav).toHaveBeenCalled();
    });

    it('should call removeFav on click', () => {
      mockFavorites = [{title: 'title'}];
      card = shallow(
        <Card 
          userId={1}
          addFav={mockAddFav}
          removeFav={mockRemoveFav}
          movie={mockMovie}
          favorites={mockFavorites}
          path={'/favorites'}
        />);

      card.find('.btn-card-favorite').first().simulate('click');
      expect(mockRemoveFav).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    const mockStore = {
      user: {
        info: {
          id: 0
        }
      },
      favorites: ['array', 'of', 'favorites']
    };
    const result = mapStateToProps(mockStore);

    it('should pull userId from the store', () => {
      expect(result.userId).toEqual(mockStore.user.info.id);
    });

    it('should pull favorites from the store', () => {
      expect(result.favorites).toEqual(mockStore.favorites);
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;
    let result;

    beforeEach(() => {
      mockDispatch = jest.fn();
      result = mapDispatchToProps(mockDispatch);
    });

    it('should call dispatch when addFav is called', () => {
      result.addFav();
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call dispatch when removeFav is called', () => {
      result.removeFav();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});