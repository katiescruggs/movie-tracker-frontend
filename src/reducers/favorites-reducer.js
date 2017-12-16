const favoritesReducer = (state = [], action) => {
  console.log(action.type);
  switch(action.type) {
    case 'SET_FAVORITES':
      return action.favorites;
    case 'CLEAR_FAVORITES':
      return [];
    default:
      return state;
  }
}

export default favoritesReducer;