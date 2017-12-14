import apiKey from '../apiKey.js';

export const fetchRecentMovies = async () => {
  try {
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
    const movies = await movieResponse.json();
    return movies.results;

  } catch (error) {
    throw Error('Fetch movies failed!');
  }
};

export const postLogin = async (userPayload) => {
  try {
    const fetchUser = await fetch('/api/users/', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userPayload)
    });

    const user = await fetchUser.json();
    return user;

  } catch (error) {
    alert('Email/password not found');
  }
};

export const postCreateUser = async () => {

};

export const getCurrentUser = async () => {

};