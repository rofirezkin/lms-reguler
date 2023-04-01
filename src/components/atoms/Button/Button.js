import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.bg.primary,
    flex: 1,
    borderRadius: 20,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 15,
    color: colors.text.inverse,
    textAlign: 'center',
    paddingVertical: 17,
  },
});
