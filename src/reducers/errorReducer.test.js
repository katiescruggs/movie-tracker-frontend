import errorReducer from './errorReducer';
import * as actions from '../actions';

describe('errorReducer tests', () => {
  let state;
  beforeEach(()=> {
    state = {};
  })
  it('should return null by default', () => {
    const expected = {status: false, message: ''};
    expect(errorReducer(undefined, actions)).toEqual(expected)
  })

  it('should return a login error', () => {
    const expected = {status: true, message: 'login error'}
    const mockAction = {type: 'USER_LOGIN_ERROR', errorMessage: 'login error'}
    expect(errorReducer(state, mockAction)).toEqual(expected)
  })

  it('should return a sign up error', () => {
    const expected = {status: true, message: 'sign up error'}
    const mockAction = {type: 'USER_LOGIN_ERROR', errorMessage: 'sign up error'}
    expect(errorReducer(state, mockAction)).toEqual(expected)
  })
})