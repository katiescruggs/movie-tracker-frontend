import { fetchRecentMovies, postLogin, postCreateUser } from '../helpers/apiCalls.js';

export const fetchMovies = () => async (dispatch) => {
  const movies = await fetchRecentMovies();
  dispatch(setMovies(movies));
};

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies  
});

export const userLoginAttempt = (userPayload) => async (dispatch) => {
  const userResponse = await postLogin(userPayload);
  dispatch(userLoginSuccess(userResponse));
};

export const userLoginSuccess = (userInfo) => ({
  type: 'USER_LOGIN_SUCCESS', 
  userInfo
});

export const userLoginError = (user) => ({
  type: 'USER_LOGIN_ERROR',
  user
});

export const userSignupAttempt = (userPayload) => async (dispatch) => {
  const newUserResponse = await postCreateUser(userPayload);
  dispatch(userSignupSuccess(newUserResponse));
};

export const userSignupSuccess = (userId) => ({
  type: 'USER_SIGNUP_SUCCESS',
  userId
});

export const userSignupError = (user) => ({
  type: 'USER_SIGNUP_ERROR',
  user
});

export const getCurrentUser = (user) => ({
  type: 'GET_CURRENT_USER',
  user
});

export const userLogout = (user) => ({
  type: 'USER_LOGOUT',
  user
});
