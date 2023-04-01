import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  DetailForum,
  DetailMataKuliah,
  FormInputBalasan,
  Forum,
  GambaranKursus,
} from '../pages';

const Stack = createStackNavigator();
const GambaranKursusNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GambaranKursus"
        component={GambaranKursus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailMataKuliah"
        component={DetailMataKuliah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forum"
        component={Forum}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FormInputBalasan"
        component={FormInputBalasan}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <Stack.Screen
        name="DetailForum"
        component={DetailForum}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default GambaranKursusNavigator;

const styles = StyleSheet.create({});
