import { 
  fetchRecentMovies, 
  postLogin, 
  postCreateUser, 
  fetchFavorites, 
  postAddFavorite, 
  postRemoveFavorite } from '../helpers/apiCalls.js';

export const fetchMovies = () => async (dispatch) => {
  const movies = await fetchRecentMovies();
  dispatch(setMovies(movies));
};

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies  
});

export const userLoginAttempt = (userPayload) => async (dispatch) => {
  const user = await postLogin(userPayload);
  if (user === null) {
    dispatch(userLoginError());
  } else {
    dispatch(userLoginSuccess(user));
    dispatch(getFavorites(user.id));
  }
};

export const userLoginSuccess = (userInfo) => ({
  type: 'USER_LOGIN_SUCCESS', 
  userInfo
});

export const userLoginError = () => ({
  type: 'USER_LOGIN_ERROR',
  errorMessage: 'Login failed, please try again.'
});

export const userSignupAttempt = (userPayload) => async (dispatch) => {
  const newUserResponse = await postCreateUser(userPayload);

  if (newUserResponse === null) {
    dispatch(userSignupError()); 
  } else {
    dispatch(userSignupSuccess(newUserResponse));
  }
};

export const userSignupSuccess = (userId) => async (dispatch) => {
  dispatch(getCurrentUser(userId));
};

export const userSignupError = () => ({
  type: 'USER_SIGNUP_ERROR',
  errorMessage: 'Sign up failed, please try again.'
});

export const getCurrentUser = (id) => async dispatch => {
  const allUsersResponse = await fetch('/api/users/');
  const allUsersJson = await allUsersResponse.json();
  const allUsers = allUsersJson.data;

  const currentUser = allUsers.find(user => user.id === id);
  
  dispatch(setCurrentUser(currentUser));
};

export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  user
});

export const logout = () => (dispatch) => {
  dispatch(userLogout());
  dispatch(clearFavorites());
};

export const userLogout = () => ({
  type: 'USER_LOGOUT'
});

export const addFavorite = (userId, movie) => async (dispatch) => {
  await postAddFavorite(userId, movie);
  dispatch(getFavorites(userId));
};

export const removeFavorite = (userId, movieId) => async (dispatch) => {
  await postRemoveFavorite(userId, movieId);
  dispatch(getFavorites(userId));
};

export const getFavorites = (userId) => async (dispatch) => {
  const favorites = await fetchFavorites(userId);
  dispatch(setFavorites(favorites.data));
};

export const setFavorites = (favorites) => ({
  type: 'SET_FAVORITES',
  favorites
});

export const clearFavorites = () => ({
  type: 'CLEAR_FAVORITES'
});

