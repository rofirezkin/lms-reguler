import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CameraTest, Login, SplashScreen} from '../pages';

const Stack = createStackNavigator();
const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CameraTest"
        component={CameraTest}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
