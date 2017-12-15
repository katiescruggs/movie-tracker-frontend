import * as actions from './index';

describe('all actions', () => {

  it('has a type of SET_MOVIES', () => {
    const movies = [{ title: 'Casper' }, { title: 'Thor' }, { title: 'Batman' }]
    const expected = {
      type: 'SET_MOVIES',
      movies
    }
    expect(actions.setMovies(movies)).toEqual(expected)
  })

  it('has a type of USER_LOGIN_SUCCESS', () => {
    const userInfo = {id: 1, name: 'Yung Jhun', email: 'Jhun@gmail.com', password: 'password'}
      const expected = {
        type: 'USER_LOGIN_SUCCESS',
        userInfo
      }
      expect(actions.userLoginSuccess(userInfo)).toEqual(expected)
  })
});