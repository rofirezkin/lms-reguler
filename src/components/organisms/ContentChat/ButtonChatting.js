import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ICSendChat} from '../../../assets/icon';

const ButtonChatting = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <ICSendChat />
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(disable)}>
      <ICSendChat />
    </TouchableOpacity>
  );
};
export default ButtonChatting;

const styles = StyleSheet.create({
  container: disable => ({
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  button: {width: 36, height: 36},
});
