const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIES': return [...state, ...action.movies]
  }
}