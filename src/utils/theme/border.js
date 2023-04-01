import {StyleSheet, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {colors} from './colors';

export const BorderScroll = styled.View`
  background-color: #f2f2f2;
  width: 50px;
  height: 5px;

  align-self: center;
  margin: 20px;
`;

const Border = () => {
  return <View style={styles.border} />;
};

export default Border;

const styles = StyleSheet.create({
  border: {
    borderColor: colors.bg.border,
    borderBottomWidth: 3,

    flex: 1,
  },
});
