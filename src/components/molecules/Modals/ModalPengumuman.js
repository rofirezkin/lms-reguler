import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BgPengumuman, ICPengumuman} from '../../../assets/background';
import {Text} from '../../atoms/typography/text.component';
import {Gap} from '../../atoms';
import {colors, fonts, RowView} from '../../../utils';

const ModalPengumuman = ({visible, onRequestClose}) => {
  return (
    <View>
      <Modal
        visible={visible}
        transparent
        onRequestClose={onRequestClose}
        animationType="fade"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View>
            <ImageBackground
              source={BgPengumuman}
              resizeMode="cover"
              style={styles.imageBackground}>
              <View style={styles.headerPengumuman}>
                <View style={styles.icon}>
                  <ICPengumuman />
                </View>
                <Text style={styles.textPengumuman}>PENGUMUMAN</Text>
              </View>
            </ImageBackground>
            <View style={styles.description}>
              <Text style={styles.textDesc}>
                Silahkan isi survei tentang “(Nama Survei)”
              </Text>
              <Gap height={20} />
              <View style={styles.border} />
              <Gap height={10} />
              <RowView justifyContent>
                <TouchableOpacity style={styles.button}>
                  <Text style={{color: colors.text.inverse}}>Isi Survey</Text>
                </TouchableOpacity>
                <Gap width={15} />
                <TouchableOpacity
                  onPress={onRequestClose}
                  style={styles.buttonCancel}>
                  <Text style={{color: colors.text.disabled}}>
                    Tidak Sekarang
                  </Text>
                </TouchableOpacity>
              </RowView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalPengumuman;

const styles = StyleSheet.create({
  centered_view: {
    flex: 1,
    paddingTop: '40%',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  headerPengumuman: {
    justifyContent: 'center',
    flex: 1,
  },
  imageBackground: {
    width: 280,
    height: 90,
  },
  icon: {
    position: 'absolute',
    top: -50,
    alignSelf: 'center',
  },
  textPengumuman: {
    textAlign: 'center',
    color: colors.text.inverse,
    fontFamily: fonts.primary[700],
    fontSize: 19,
  },
  description: {
    width: 280,
    height: 150,
    backgroundColor: 'white',
    borderBottomLeftRadius: 26.1,
    borderBottomRightRadius: 26.1,
    justifyContent: 'center',
    padding: 20,
  },
  textDesc: {
    textAlign: 'center',
    fontSize: 16,
  },
  border: {
    borderBottomColor: colors.bg.border,
    borderBottomWidth: 3,
  },
  button: {
    backgroundColor: colors.bg.primary,
    padding: 10,
    borderRadius: 15,
  },
  buttonCancel: {
    padding: 10,
    borderRadius: 15,
  },
});
