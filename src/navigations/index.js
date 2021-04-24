import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProductScreen from '../screens/ProductScreen';
import WarungScreen from '../screens/WarungScreen';

const Stack = createStackNavigator();

export class AppNavigator extends Component {
  render() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="login-screen" component={LoginScreen} />
        <Stack.Screen name="register-screen" component={RegisterScreen} />
        <Stack.Screen name="product-screen" component={ProductScreen} />
        <Stack.Screen name="warung-screen" component={WarungScreen} />
      </Stack.Navigator>
    );
  }
}

export default AppNavigator;
