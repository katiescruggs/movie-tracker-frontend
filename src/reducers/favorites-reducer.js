const favoritesReducer = (state = [], action) => {
  console.log(action.type);
  switch(action.type) {
    case 'SET_FAVORITES':
      console.log(action.favorites);
      return action.favorites;
    default:
      return state;
  }
}

export default favoritesReducer;