import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigations';

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
  }
}

export default App;
