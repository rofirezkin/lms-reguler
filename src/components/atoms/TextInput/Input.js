import {TextInput} from 'react-native';
import React from 'react';
import {IconView, InputView} from './TextInputStyles';
import {ICWrite} from '../../../assets/icon';

const Input = () => {
  return (
    <InputView>
      <TextInput style={{flex: 1}} placeholder="Input Nilai" />
      <IconView>
        <ICWrite />
      </IconView>
    </InputView>
  );
};

export default Input;
