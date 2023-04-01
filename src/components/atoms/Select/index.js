import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, Text, View} from 'react-native';

const Select = ({label, onValueChange, value, selectItem, order}) => {
  if (order) {
    <View>
      {selectItem && (
        <View>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.inputOrder}>
            <Picker selectedValue={value} onValueChange={onValueChange}>
              {selectItem.map(item => {
                return (
                  <Picker.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
      )}
    </View>;
  }
  return (
    <View>
      {selectItem && (
        <View>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.input}>
            <Picker selectedValue={value} onValueChange={onValueChange}>
              {selectItem.map(item => {
                return (
                  <Picker.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
      )}
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {fontSize: 16, color: '#020202'},
  text: {
    fontSize: 16,
    color: '#020202',
  },

  input: {borderRadius: 8, backgroundColor: '#F9EFEF'},
});
