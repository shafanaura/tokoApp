import AsyncStorage from '@react-native-async-storage/async-storage';
import http from '../../helpers/http';

export const login = (email, password) => {
  return async dispatch => {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    try {
      const response = await http().post('auth/login', params);
      AsyncStorage.setItem('token', response.data.token);
      dispatch({
        type: 'LOGIN',
        payload: response.data.token,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message,
      });
    }
  };
};

export const register = (email, password, nama) => {
  return async dispatch => {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    params.append('nama', nama);
    try {
      const response = await http().post('auth/register', params);
      dispatch({
        type: 'REGISTER',
        payload: response.data.message,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message,
      });
    }
  };
};

export const autoLogin = payload => ({
  type: 'LOGIN',
  payload,
});

export const logout = () => ({
  type: 'LOGOUT',
});
