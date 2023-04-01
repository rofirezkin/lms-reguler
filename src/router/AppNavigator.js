import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomNavigator} from '../components';
import {
  Agenda,
  Calendar,
  DetailMessage,
  FilePribadi,
  Home,
  ImageMapping,
  LearningPlan,
  Messages,
  Pemberitahuan,
} from '../pages';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import GambaranKursusNavigator from './GambaranKursusNavigator';
import TaskNavigator from './TaskNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="Quiz"
      tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Calendar"
        component={Calendar}
      />

      <Tab.Screen
        options={{headerShown: false}}
        name="Messages"
        component={Messages}
      />
    </Tab.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name="MainApp"
        component={MainApp}
      />
      <Stack.Screen
        name="Agenda"
        component={Agenda}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LearningPlan"
        component={LearningPlan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GambaranKursusNavigator"
        component={GambaranKursusNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TaskNavigator"
        component={TaskNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FilePribadi"
        component={FilePribadi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pemberitahuan"
        component={Pemberitahuan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ImageMapping"
        component={ImageMapping}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailMessage"
        component={DetailMessage}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
