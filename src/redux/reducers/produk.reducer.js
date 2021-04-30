const initialState = {
  detail: {},
  errorMsg: '',
  message: '',
};

const produkReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DETAIL_PRODUK': {
      return {
        ...state,
        detail: action.payload,
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
