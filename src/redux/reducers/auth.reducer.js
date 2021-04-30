const initialState = {
  token: null,
  message: '',
  errorMsg: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        token: action.payload,
        message: action.message,
        errorMsg: '',
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        token: null,
        message: '',
        errorMsg: '',
      };
    }
    case 'REGISTER': {
      return {
        ...state,
        token: null,
        message: action.payload,
        errorMsg: '',
      };
    }
    case 'SET_AUTH_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default authReducer;
