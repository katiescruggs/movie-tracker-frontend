const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_USER':
      console.log('set user');
      return action.user;
    case 'CREATE_USER':
      console.log('create user')
      // return action.
    default: 
      return state;
  }
}

export default userReducer;