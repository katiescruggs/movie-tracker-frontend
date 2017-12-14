const userReducer = (state = {signedIn: false, info: {}}, action) => {
  switch(action.type) {
    case 'USER_LOGIN_ATTEMPT':
      console.log(action);
      return state;

    case 'USER_LOGIN_SUCCESS':
      const info = action.userInfo;
      return {signedIn: true, info};

    case 'USER_LOGIN_ERROR': 
      console.log(action);
      return state;

    case 'USER_SIGNUP_ATTEMPT':
      console.log(action);
      return state;

    case 'USER_SIGNUP_SUCCESS':
      console.log(action);
      return state;

    case 'USER_SIGNUP_ERROR':
      console.log(action);
      return state;

    case 'GET_CURRENT_USER':
      console.log(action);
      return state;

    case 'USER_LOGOUT':
      console.log(action);
      return state;

    default: 
      return state;
  }
}

export default userReducer;