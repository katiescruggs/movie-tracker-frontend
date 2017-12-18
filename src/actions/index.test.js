import * as actions from './index';

describe('all actions', () => {
  describe('user actions', () => {
    let userInfo;
    beforeEach( () => {
      userInfo = {
        id: 1, 
        name: 'Yung Jhun', 
        email: 'Jhun@gmail.com', 
        password: 'password'
      };
    });

    it('userLoginSuccess returns an obj with type', () => {
      const expected = {
        type: 'USER_LOGIN_SUCCESS',
        userInfo
      };
      expect(actions.userLoginSuccess(userInfo)).toEqual(expected);
    });

    it('userLoginError returns an obj with type of USER_LOGIN_ERROR', () => {
      const expected = {
        type: 'USER_LOGIN_ERROR',
        errorMessage: 'Login failed, please try again.'
      };

      expect(actions.userLoginError()).toEqual(expected);
    });

    it('userSignupError returns an obj with type of USER_SIGNUP_ERROR', () => {
      const expected = {
        type: 'USER_SIGNUP_ERROR',
        errorMessage: 'Sign up failed, please try again.'
      };

      expect(actions.userSignupError()).toEqual(expected);
    });

    it('setCurrentUser returns an obj with type of SET_CURRENT_USER', () => {
      const user = userInfo;
      const expected = {
        type: 'SET_CURRENT_USER',
        user
      };

      expect(actions.setCurrentUser(user)).toEqual(expected);
    });

    it('userLogout returns an obj with type of USER_LOGOUT', () => {
      const expected = {
        type: 'USER_LOGOUT'
      };
      expect(actions.userLogout()).toEqual(expected);
    });
  });

  describe('movie actions', () => {
    it('setMovies returns an obj with type of SET_MOVIES', () => {
      const movies = [
        { title: 'Casper' }, 
        { title: 'Thor' }, 
        { title: 'Batman' }];
      const expected = {
        type: 'SET_MOVIES',
        movies
      };
      expect(actions.setMovies(movies)).toEqual(expected);
    });  
  });

  describe('favorite actions', () => {
    it('setFavorites returns an obj  with type of SET_FAVORITES', () => {
      const favorites = [
        { title: 'Casper' }, 
        { title: 'Thor' }, 
        { title: 'Batman' }];
      const expected = {
        type: 'SET_FAVORITES',
        favorites
      };
      expect(actions.setFavorites(favorites)).toEqual(expected);
    });

    it('clearFavorites returns an obj with type of CLEAR_FAVORITES', () => {
      const expected = {
        type: 'CLEAR_FAVORITES'
      };

      expect(actions.clearFavorites()).toEqual(expected);
    });
  });
});