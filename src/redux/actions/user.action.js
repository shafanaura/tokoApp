import http from '../../helpers/http';

export const userDetail = token => {
  return async dispatch => {
    try {
      const response = await http(token).get('user');
      dispatch({
        type: 'DETAIL_USER',
        payload: response.data.results,
        message: response.data.message,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'SET_USER_DETAIL_MESSAGE',
        payload: message,
      });
    }
  };
};
