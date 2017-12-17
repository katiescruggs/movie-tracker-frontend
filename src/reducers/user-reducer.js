const userReducer = (state = {signedIn: false, info: {}}, action) => {
  switch(action.type) {

    case 'USER_LOGIN_SUCCESS':
      console.log('login success');
      const info = action.userInfo;
      return {signedIn: true, info};

    case 'USER_LOGIN_ERROR':
      return state;

    case 'USER_SIGNUP_SUCCESS':
      console.log(action);
      return state;

    case 'SET_CURRENT_USER':
      return {signedIn: true, info: action.user};

    case 'USER_LOGOUT':
      console.log('logout');
      return {signedIn: false, info: {}};

    default: 
      return state;
  }
}

export default userReducer;