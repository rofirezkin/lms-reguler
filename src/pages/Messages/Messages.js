import React from 'react';
import {SafeArea} from '../../utils/theme/area';
import {Header, TabViewMessages} from '../../components';
import {useFocusEffect} from '@react-navigation/native';
import {BackHandler} from 'react-native';

const Messages = ({navigation}) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.replace('MainApp');
        // Do Whatever you want to do on back button click
        // Return true to stop default back navigaton
        // Return false to keep default back navigaton
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation]),
  );

  return (
    <SafeArea>
      <Header title="Pesan" green />
      <TabViewMessages />
    </SafeArea>
  );
};

export default Messages;
