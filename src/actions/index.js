import { fetchRecentMovies } from '../helpers/apiCalls.js';

export const fetchMovies = () => async (dispatch) => {
  const movies = await fetchRecentMovies();
  dispatch(setMovies(movies));
}

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies  
})

export const userLoginAttempt = (user) => ({
  type: 'USER_LOGIN_ATTEMPT',
  user
});

export const userLoginSuccess = (userInfo) => ({
  type: 'USER_LOGIN_SUCCESS', 
  userInfo
});

export const userLoginError = (user) => ({
  type: 'USER_LOGIN_ERROR',
  user
});

export const userSignupAttempt = (user) => ({
  type: 'USER_SIGNUP_ATTEMPT',
  user
});

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
