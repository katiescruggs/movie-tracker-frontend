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

    if(fetchUser.status >= 400) {
      return null;
    } else {
      const user = await fetchUser.json();
      return user.data;
    }

  } catch (error) {
    return null;
  }
};

export const postCreateUser = async (userPayload) => {
  try {
    const postUser = await fetch('/api/users/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userPayload)
    });
    if(postUser.status >= 400) {
      return null;
    } else {
      const newUser = await postUser.json();
      return newUser.id;
    }
  } catch (error) {
    return null;
  }
};

export const getCurrentUser = async () => {

};

export const postAddFavorite = async (userId, movie) => {
  const addFavPayload = {
    movie_id: movie.id,
    user_id: userId,
    title: movie.title,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    overview: movie.overview
  };
  console.log(addFavPayload)
  try {
    const addFavResponse = await fetch('/api/users/favorites/new', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addFavPayload)
    });
    const favId = await addFavResponse.json();
    return favId;
  } catch (error) {
    return null;
  }
}

export const postRemoveFavorite = async (userId, movieId) => {
  const removeFavPayload = {user_id: userId, movie_id: movieId};
  try {
    const removeFavResponse = await fetch(`/api/users/${userId}/favorites/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(removeFavPayload)
    });
    const removeFav = await removeFavResponse.json();
    return removeFav;
  } catch (error) {
    return null;
  }
}

export const fetchFavorites = async (userId) => {
  const favoritesResponse = await fetch(`api/users/${userId}/favorites`);
  const favorites = await favoritesResponse.json();
  return favorites;
}






