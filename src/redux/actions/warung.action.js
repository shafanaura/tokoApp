import http from '../../helpers/http';

export const warungDetail = token => {
  return async dispatch => {
    try {
      const response = await http(token).get('warung');
      dispatch({
        type: 'DETAIL_WARUNG',
        payload: response.data.results,
        message: response.data.message,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'SET_WARUNG_MESSAGE',
        payload: message,
      });
    }
  };
};
