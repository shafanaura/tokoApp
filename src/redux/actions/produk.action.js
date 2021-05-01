import http from '../../helpers/http';

export const produkData = (token, search) => {
  return async dispatch => {
    try {
      const response = await http(token).get(
        `produk?search=${search ? search : ''}`,
      );
      dispatch({
        type: 'DATA_PRODUK',
        payload: response.data.results,
        message: response.data.message,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'SET_PRODUK_MESSAGE',
        payload: message,
      });
    }
  };
};
