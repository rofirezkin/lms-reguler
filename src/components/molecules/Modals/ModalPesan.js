import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ButtonDefault, Gap} from '../../atoms';
import {fonts} from '../../../utils/theme/fonts';
import {colors} from '../../../utils';

const ModalPesan = ({visible, onRequestClose, onSubmit, feedback}) => {
  return (
    <View>
      <Modal
        visible={visible}
        transparent
        onRequestClose={onRequestClose}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View>
              <Gap height={20} />
              {feedback === true ? (
                <Text style={{fontFamily: fonts.primary[400]}}> Judul </Text>
              ) : (
                <Text style={{fontFamily: fonts.primary[400]}}> Untuk </Text>
              )}
              {feedback === true ? (
                <TextInput style={styles.title} />
              ) : (
                <View style={styles.title}>
                  <Text style={{fontFamily: fonts.primary[600]}}>
                    Nama Mahasiswa
                  </Text>
                </View>
              )}
              <Gap height={20} />
              <Text style={{fontFamily: fonts.primary[400]}}> Isi Pesan </Text>
              <View style={styles.inputView}>
                <TextInput
                  multiline={true}
                  placeholder="Isi Pesan"
                  style={styles.text}
                />
              </View>
              <Gap height={20} />
              <ButtonDefault title="Kirim" onPress={onSubmit} />

              <Gap height={20} />
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={onRequestClose}
                style={styles.position}>
                <Text
                  style={{
                    color: colors.text.secondary,
                    fontFamily: fonts.primary[500],
                  }}>
                  Batal
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalPesan;

const styles = StyleSheet.create({
  centered_view: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: '100%',
    height: '80%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 25,
    backgroundColor: '#ffffff',
  },
  title: {
    marginTop: 15,
    backgroundColor: colors.bg.list,
    padding: 20,
    borderRadius: 15,
  },
  inputView: {
    marginTop: 15,
    backgroundColor: colors.bg.list,
    padding: 20,
    borderRadius: 15,
  },
  text: {
    fontFamily: fonts.primary[400],
    height: 200,
  },
  position: {alignSelf: 'center'},
});
