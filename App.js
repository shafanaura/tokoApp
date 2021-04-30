import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigations';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistedStore from './src/redux/store';
import FlashMessage from 'react-native-flash-message';

const {store, persistor} = persistedStore();
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <AppNavigator />
            <FlashMessage position="top" duration={3000} />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
