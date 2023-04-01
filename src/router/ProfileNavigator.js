import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DetailProfile, Profile} from '../pages';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator();
const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        name="DetailProfile"
        component={DetailProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
