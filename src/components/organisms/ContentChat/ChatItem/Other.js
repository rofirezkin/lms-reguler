import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../../utils';

const Other = ({text, date, photo}) => {
  return (
    <View style={styles.container}>
      {/* <Image source={photo} style={styles.avatar} /> */}
      <View style={styles.lebar}>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingLeft: 16,
    flexDirection: 'row',
  },
  chatContent: {
    padding: 12,
    paddingLeft: 18,
    backgroundColor: colors.bg.list,
    maxWidth: '100%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  avatar: {width: 30, height: 30, borderRadius: 30 / 2, marginRight: 12},
  date: {
    fontSize: 11,
    fontWeight: '400',
    color: 'black',
    marginTop: 8,
  },
  lebar: {
    maxWidth: '80%',
  },
});
