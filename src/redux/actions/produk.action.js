import http from '../../helpers/http';

export const produkDetail = token => {
  return async dispatch => {
    try {
      const response = await http(token).get('produk');
      dispatch({
        type: 'DETAIL_PRODUK',
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
