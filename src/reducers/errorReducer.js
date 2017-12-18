const errorReducer = (state = {status: false, message: ''}, action) => {
  switch (action.type) {
  case 'USER_LOGIN_ERROR':
    return {status: true, message: action.errorMessage};
  case 'USER_SIGNUP_ERROR':
    return {status: true, message: action.errorMessage};
  default:
    return state;
  }
};

export default errorReducer;