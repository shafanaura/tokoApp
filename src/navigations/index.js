import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export class AppNavigator extends Component {
  render() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="login-screen" component={LoginScreen} />
        <Stack.Screen name="register-screen" component={RegisterScreen} />
      </Stack.Navigator>
    );
  }
}

export default AppNavigator;
