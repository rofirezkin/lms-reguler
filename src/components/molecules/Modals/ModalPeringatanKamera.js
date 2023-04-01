import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Text} from '../../atoms/typography/text.component';
import {ICPeringatanQuiz} from '../../../assets/Task';
import {colors} from '../../../utils';

const ModalPeringatanKamera = ({
  visible,
  onRequestClose,
  onPress,
  onCancel,
}) => {
  return (
    <View>
      <Modal
        visible={visible}
        transparent
        onRequestClose={onRequestClose}
        animationType="fade"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View
            style={{
              backgroundColor: colors.bg.white,
              width: '80%',
              borderRadius: 15,
              padding: 20,
              paddingTop: 40,
            }}>
            <View
              style={{
                position: 'absolute',
                alignSelf: 'center',
                top: -40,
                width: 70,
                height: 70,
                borderRadius: 70 / 2,
                backgroundColor: colors.bg.primary,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: 'white',
                borderWidth: 6,
              }}>
              <ICPeringatanQuiz />
            </View>
            <Text style={{textAlign: 'center', color: colors.bg.primary}}>
              Kamera akan menyala secara otomatis ketika quiz dimulai. Apakah
              Anda sudah siap?
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                onPress={onCancel}
                style={{
                  alignSelf: 'center',
                  backgroundColor: colors.bg.list,
                  padding: 5,
                  paddingHorizontal: 18,
                  marginTop: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{textAlign: 'center', color: colors.text.secondary}}>
                  Tidak
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onPress}
                style={{
                  alignSelf: 'center',
                  backgroundColor: colors.bg.primary,
                  padding: 5,
                  paddingHorizontal: 18,
                  marginTop: 10,
                  borderRadius: 10,
                }}>
                <Text style={{textAlign: 'center', color: colors.text.inverse}}>
                  Ya
                </Text>
              </TouchableOpacity>
            </View>
            {/* <ICSuccess /> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalPeringatanKamera;

const styles = StyleSheet.create({
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
});
