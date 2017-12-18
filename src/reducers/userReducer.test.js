import userReducer from './userReducer';
import * as actions from '../actions';

describe('userReducer tests', () => {
  it('should return a default state', () => {
    const defaultState = {
      signedIn: false,
      info: {}
    };
    expect(userReducer(undefined, {type: ''})).toEqual(defaultState);
  });

  it('login should return a state with a signed in user', () => {
    const expectedState = {
      signedIn: true,
      info: {
        info: 'here'
      }
    };

    const action = actions.userLoginSuccess({info: 'here'});

    expect(userReducer(undefined, action)).toEqual(expectedState);
  });

  it('set user should return a state with a signed in user', () => {
    const expectedState = {
      signedIn: true,
      info: {
        info: 'here'
      }
    };

    const action = actions.setCurrentUser({info: 'here'});

    expect(userReducer(undefined, action)).toEqual(expectedState);
  });

  it('log out should return a new state', () => {
    const expectedState = {
      signedIn: false,
      info: {}
    };

    const action = actions.userLogout();
    expect(userReducer(undefined, action)).toEqual(expectedState);
  });
});