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
      const user = await fetchUser.json();
      return user.data;
    } else {
      return null;
    }

  } catch (error) {
    alert('Email/password not found');
  }
};

export const postCreateUser = async (userPayload) => {
  try {
    console.log('trying to postcreateuser')
    const postUser = await fetch('/api/users/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userPayload)
    });

    const newUser = await postUser.json();
    return newUser.id;
  } catch (error) {
    alert('Failed to create user');
  }
};

export const getCurrentUser = async () => {

};