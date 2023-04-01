import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Gap} from '../../atoms';
import {colors} from '../../../utils';

const ModalBasic = ({visible, onRequestClose, onCancel, onSuccess, title}) => {
  return (
    <View>
      <Modal
        visible={visible}
        transparent
        onRequestClose={onRequestClose}
        animationType="fade"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.modal_logout}>
            <Gap height={20} />
            <View>
              <Text style={{textAlign: 'center'}}>{title}</Text>
            </View>
            <Gap height={20} />
            <View style={styles.sectionConfirm}>
              <TouchableOpacity style={styles.button_batal} onPress={onCancel}>
                <Text style={{color: colors.text.disabled}}>Batal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button_confirm}
                onPress={onSuccess}>
                <Text style={{color: colors.text.inverse}}>Ya</Text>
              </TouchableOpacity>
            </View>
            <Gap height={20} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalBasic;

const styles = StyleSheet.create({
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  modal_logout: {
    backgroundColor: colors.bg.white,
    width: '80%',
    borderRadius: 15,
  },
  button_batal: {
    paddingVertical: 4,
    paddingHorizontal: 25,
    borderRadius: 15,
  },
  button_confirm: {
    backgroundColor: colors.bg.primary,
    paddingVertical: 4,
    paddingHorizontal: 25,
    borderRadius: 15,
  },
  sectionConfirm: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
