import {
  StyleSheet,
  TextInput as TextInputRN,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ICEmail, ICPassword, ICSecure, ICSecureOff} from '../../../assets/icon';
import {IconTouchable, IconView, LoginBoxView} from './TextInputStyles';
import {colors} from '../../../utils';

const TextInput = ({
  placeholder,
  icon,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <LoginBoxView>
      <IconView>{icon === 'Email' ? <ICEmail /> : <ICPassword />}</IconView>
      <TextInputRN
        autoCapitalize={autoCapitalize}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.text.disabled}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry ? isSecureEntry : false}
        style={styles.input}
      />
      {icon && (
        <IconTouchable
          onPress={() => {
            setIsSecureEntry(prev => !prev);
          }}>
          <>{isSecureEntry ? <ICSecure /> : <ICSecureOff />}</>
        </IconTouchable>
      )}
    </LoginBoxView>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {padding: 10, flex: 1, color: colors.text.primary},
});
