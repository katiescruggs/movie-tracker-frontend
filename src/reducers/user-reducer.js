const userReducer = (state = {signedIn: false, info: {}}, action) => {
  switch(action.type) {

    case 'USER_LOGIN_SUCCESS':
      const info = action.userInfo;
      return {signedIn: true, info};

    // case 'USER_LOGIN_ERROR':
    //   return state;

    case 'USER_SIGNUP_SUCCESS':
      return state;

    // case 'USER_SIGNUP_ERROR':
    //   return state;

    case 'SET_CURRENT_USER':
      return {signedIn: true, info: action.user};

    case 'USER_LOGOUT':
      return {signedIn: false, info: {}};

    default: 
      return state;
  }
}

export default userReducer;