import apiKey from '../apiKey.js';

export const fetchRecentMovies = async () => {
  try {
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
    
    //debugger;
    //movieResponse.ok


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

export const addFavorite = async (userId, movie) => {
  const addFavPayload = Object.assign({}, {user_id: userId}, movie);
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

export const removeFavorite = async (userId, movieId) => {
  const removeFavPayload = {user_id: userId, movie_id: movieId};
  try {
    const removeFavResponse = await fetch(`/api/users/${userId}/favorites/${movieId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(removeFavPayload)
    });
  } catch (error) {
    return null;
  }
}

export const fetchFavorites = async (userId) => {
  const favoritesResponse = await fetch(`api/users/${userId}/favorites`);
  const favorites = await favoritesResponse.json();
  return favorites;
}






