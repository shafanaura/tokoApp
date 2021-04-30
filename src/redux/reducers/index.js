import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import produkReducer from './produk.reducer';
import warungReducer from './warung.reducer';

const persistConfigAuth = {
  key: 'auth',
  storage: AsyncStorage,
};

const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer);

const reducers = combineReducers({
  auth: persistedReducerAuth,
  user: userReducer,
  produk: produkReducer,
  warung: warungReducer,
});

export default reducers;
