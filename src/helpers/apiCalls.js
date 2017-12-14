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