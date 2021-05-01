const initialState = {
  data: [],
  errorMsg: '',
  message: '',
};

const produkReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_PRODUK': {
      return {
        ...state,
        data: action.payload,
        message: action.message,
      };
    }
    case 'SET_PRODUK_MESSAGE': {
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

export default produkReducer;
