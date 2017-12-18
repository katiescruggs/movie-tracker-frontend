import * as actions from './index';

describe('all actions', () => {
  describe('user actions', () => {
    let userInfo;
    beforeEach( () => {
      userInfo = {id: 1, name: 'Yung Jhun', email: 'Jhun@gmail.com', password: 'password'}
    });
    it('has a type of USER_LOGIN_SUCCESS', () => {
      const expected = {
        type: 'USER_LOGIN_SUCCESS',
        userInfo
      };
      expect(actions.userLoginSuccess(userInfo)).toEqual(expected)
    });

    it('has a type of USER_LOGIN_ERROR', () => {
      const expected = {
        type: 'USER_LOGIN_ERROR',
        userInfo
      };
    });

    it('has a type of userSignUpError', () => {
      const expected = {
      type: 'USER_SIGNUP_ERROR',
      errorMessage: 'SIGN UP ERROR'
      };
      expect(actions.userSignUpError()).toEqual(expected);
    });

    it('should dispatch a sign up success or error', () => {

    });
  });

  describe('movie actions', () => {
    it('has a type of SET_MOVIES', () => {
      const movies = [{ title: 'Casper' }, { title: 'Thor' }, { title: 'Batman' }]
      const expected = {
        type: 'SET_MOVIES',
        movies
      };
      expect(actions.setMovies(movies)).toEqual(expected)
    });  
  });

  describe('favorite actions', () => {
    it('should have a type of SET_FAVORITES', () => {
      const favorites = [{ title: 'Casper' }, { title: 'Thor' }, { title: 'Batman' }];
      const expected = {
        type: 'SET_FAVORITES',
        favorites
      };
    });

    it('should have a type of CLEAR_FAVORITES', () => {
      const favorites = [{ title: 'Casper' }, { title: 'Thor' }, { title: 'Batman' }];
      const expected = {
        type: 'CLEAR_FAVORITES',
        favorites
      };
    });


    it('should add favorites', () => {

    });

    it('should remove favorites', () => {

    });
  });
});