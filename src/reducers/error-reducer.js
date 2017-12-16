const errorReducer = (state = {}, action) => {
    console.log(action.type)
  switch(action.type) {
    case 'USER_LOGIN_ERROR':
      console.log('error reducer login error');
      return {status: true, message: action.errorMessage};
    case 'USER_SIGNUP_ERROR':
      return {status: true, message: action.errorMessage};
    default:
      return {status: false, message: ''};
  }
}

export default errorReducer;