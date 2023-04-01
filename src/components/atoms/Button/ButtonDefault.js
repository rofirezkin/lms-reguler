import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const ButtonDefault = ({onPress, title, noPadding}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button(noPadding)}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonDefault;

const styles = StyleSheet.create({
  button: noPadding => ({
    backgroundColor: colors.bg.primary,
    padding: noPadding ? 10 : 15,
    borderRadius: 14,
  }),
  textButton: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.text.inverse,
  },
});
