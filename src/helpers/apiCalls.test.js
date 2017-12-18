import React from 'react';
import * as apiCalls from './apiCalls.js';

describe('movie API call', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        {
          results: ['array', 'of', 'movies']
        }
      )
    }));
  });

  it('should fetch movies', async () => {
    const movies = await apiCalls.fetchRecentMovies();
    expect(movies).toEqual(['array', 'of', 'movies']);
  });

  it('should return an error if the call is not successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      error: 'error message'
    }));

    const movies = await apiCalls.fetchRecentMovies();
    expect(movies.error).toEqual('error message');
  });
});

describe('user API calls', () => {
  it('postLogin should return user data if successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
          {
            data: {
              user: 'info'
            }
          }
        )
      }));
    const userData = await apiCalls.postLogin({user: 'payload'});
    expect(userData).toEqual({user: 'info'});
  });


  it('postCreateUser should return user id if successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
          {
            id: 0
          }
        )
      }));

    const userId = await apiCalls.postCreateUser({user: 'payload'});
    expect(userId).toEqual(0);
  });

  it('postLogin should return null if unsuccessful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }));

    const userData = await apiCalls.postLogin({user: 'payload'});
    expect(userData).toEqual(null);
  });

  it('postCreateUser should return null if unsuccessful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }));

    const userId = await apiCalls.postCreateUser({user: 'payload'});
    expect(userId).toEqual(null);
  });

});

describe('favorites API calls', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }));
  });

  it('postAddFavorite should return favId if successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(9)
    }));

    const newFav = await apiCalls.postAddFavorite(1, {movie: 'object'});
    expect(newFav).toEqual(9);
  });

  it('postRemoveFavorite should return something if successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve('something')
    }));

    const removedFav = await apiCalls.postRemoveFavorite(1, 2);
    expect(removedFav).toEqual('something');
  });

  it('fetchFavorites should retun an array of favorites', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        ['array', 'of', 'favorites']
      )
    }));

    const favorites = await apiCalls.fetchFavorites();
    expect(favorites).toEqual(['array', 'of', 'favorites']);
  });

  it('postAddFavorite should return null if unsuccessful', async () => {
    const newFav = await apiCalls.postAddFavorite(1, {movie: 'object'});
    expect(newFav).toEqual(null);
  });

  it('postRemoveFavorite should return null if unsuccessful', async () => {
    const removedFav = await apiCalls.postRemoveFavorite(1, {movie: 'object'});
    expect(removedFav).toEqual(null);
  });
});