import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../../utils';
import ButtonChatting from './ButtonChatting';

const InputChat = ({placeholder, onButtonPress, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <ButtonChatting disable={value.length < 1} onPress={onButtonPress} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.bg.list,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 20,
    fontSize: 14,
    fontWeight: '300',
    maxHeight: 45,
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: colors.bg.white,
  },
});
