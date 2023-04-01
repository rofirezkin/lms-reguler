import {Modal, StyleSheet, View} from 'react-native';
import React from 'react';

import {ICSuccess} from '../../../assets/alert';

const ModalSuccess = ({visible, onRequestClose}) => {
  return (
    <View>
      <Modal
        visible={visible}
        transparent
        onRequestClose={onRequestClose}
        animationType="fade"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <ICSuccess />
        </View>
      </Modal>
    </View>
  );
};

export default ModalSuccess;

const styles = StyleSheet.create({
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
});
