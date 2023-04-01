import {
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ButtonDefault, Gap} from '../../atoms';

import {Text} from '../../atoms/typography/text.component';

import {ICExit} from '../../../assets/icon';
import {colors, FlexView, fonts, RowView} from '../../../utils';

const ModalBalasan = ({visible, onRequestClose, onSubmit}) => {
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
            <Gap height={20} />
            <RowView justifyContent>
              <FlexView />
              <TouchableOpacity onPress={onRequestClose}>
                <ICExit />
              </TouchableOpacity>
            </RowView>
            <Gap height={20} />

            <Text>Balasan :</Text>

            <Gap height={20} />
            <TextInput
              multiline={true}
              placeholder="Isi Balasan anda"
              style={styles.inputBalasan}
            />
            <Gap height={20} />
            <ButtonDefault onPress={onSubmit} title="Kirim" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalBalasan;

const styles = StyleSheet.create({
  centered_view: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: '100%',
    height: '85%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 25,
    backgroundColor: '#ffffff',
  },

  inputBalasan: {
    fontFamily: fonts.primary[400],
    height: 200,
    padding: 15,
    backgroundColor: colors.bg.list,
    borderRadius: 15,
  },
});
