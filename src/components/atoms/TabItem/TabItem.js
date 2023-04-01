import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  CalendarActive,
  CalenderInactive,
  HomeActive,
  HomeInactive,
  MessageActive,
  MessageInactive,
} from '../../../assets/bottomNavigator';

const TabItem = ({title, active, onPress, onLongPress}) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const Icon = () => {
    if (title === 'Calendar') {
      return active ? <CalendarActive /> : <CalenderInactive />;
    }
    if (title === 'Home') {
      return active ? <HomeActive /> : <HomeInactive />;
    }
    if (title === 'Messages') {
      return active ? <MessageActive /> : <MessageInactive />;
    }

    return <HomeActive />;
  };
  return (
    <TouchableOpacity
      style={styles.container(active)}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: active => ({
    alignItems: 'center',
    padding: 20,
    height: '100%',
    backgroundColor: active ? '#267B18' : 'white',
    borderRadius: 20,
  }),
  text: active => ({
    fontSize: 10,
    color: active ? '#FDA45E' : '#A57C7C',
    fontWeight: '600',
    marginTop: 4,
  }),
});
