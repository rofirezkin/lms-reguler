import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../../utils';

const IsMe = ({text, date}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {marginBottom: 20, alignItems: 'flex-end', paddingRight: 16},
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.bg.primary,
    maxWidth: '70%',
    borderRadius: 13,
    borderBottomRightRadius: 0,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.inverse,
  },
  date: {
    fontSize: 11,
    fontWeight: '400',
    color: 'black',
    marginTop: 8,
  },
});
