const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_USER':
      console.log('set user');
      return action.user;
    default: 
      return state;
  }
}

export default userReducer;