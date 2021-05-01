const initialState = {
  data: {},
  detail: {},
  errorMsg: '',
  message: '',
};

const warungReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_WARUNG': {
      return {
        ...state,
        data: action.payload,
        message: action.message,
      };
    }
    case 'DETAIL_WARUNG': {
      return {
        ...state,
        detail: action.payload,
        message: action.message,
      };
    }
    case 'SET_WARUNG_MESSAGE': {
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

export default warungReducer;
