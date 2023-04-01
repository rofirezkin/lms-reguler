import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  MonitoringMahasiswa,
  PengumpulanTugas,
  Quiz,
  QuizDetail,
  TaskDetail,
  Timeline,
} from '../pages';

const Stack = createStackNavigator();
const TaskNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Timeline"
        component={Timeline}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TaskDetail"
        component={TaskDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizDetail"
        component={QuizDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PengumpulanTugas"
        component={PengumpulanTugas}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MonitoringMahasiswa"
        component={MonitoringMahasiswa}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default TaskNavigator;
