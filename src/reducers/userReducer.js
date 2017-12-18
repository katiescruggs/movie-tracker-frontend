const userReducer = (state = {signedIn: false, info: {}}, action) => {
  switch (action.type) {
  case 'USER_LOGIN_SUCCESS':
    return {signedIn: true, info: action.userInfo};

  case 'SET_CURRENT_USER':
    return {signedIn: true, info: action.user};

  case 'USER_LOGOUT':
    return {signedIn: false, info: {}};

  default: 
    return state;
  }
};

export default userReducer;