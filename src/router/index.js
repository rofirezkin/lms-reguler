import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../pages';
import AccountNavigator from './AccountNavigator';
import AppNavigator from './AppNavigator';
import {useDispatch, useSelector} from 'react-redux';

import {getData} from '../utils/storage';

const Stack = createStackNavigator();

const Router = ({navigation}) => {
  const dispatch = useDispatch();
  const {isLoading, userToken} = useSelector(state => state.loginReducer);

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userTokenData;

      getData('token').then(res => {
        userTokenData = res;
      });

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setTimeout(() => {
        dispatch({type: 'RESTORE_TOKEN', token: userTokenData});
      }, 4000);
    };

    bootstrapAsync();
  }, [dispatch]);

  return (
    <Stack.Navigator>
      {isLoading ? (
        // We haven't finished checking for the token yet
        <Stack.Screen
          options={{headerShown: false}}
          name="SplashScreen"
          component={SplashScreen}
        />
      ) : userToken == null ? (
        <Stack.Screen
          options={{headerShown: false}}
          name="AccountNavigator"
          component={AccountNavigator}
        />
      ) : (
        <Stack.Screen
          options={{headerShown: false}}
          name="AppNavigator"
          component={AppNavigator}
        />
      )}
    </Stack.Navigator>
  );
};

export default Router;
