import http from '../../helpers/http';

export const warungData = (token, search) => {
  return async dispatch => {
    try {
      const response = await http(token).get(
        `warung?search=${search ? search : ''}`,
      );
      dispatch({
        type: 'DATA_WARUNG',
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

export const warungDetail = (token, id) => {
  return async dispatch => {
    try {
      const response = await http(token).get(`warung/${id}`);
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
