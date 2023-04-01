import {
  Alert,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';

import {SafeArea} from '../../../utils/theme/area';
import {BorderScroll} from '../../../utils/theme/border';
import {Gap} from '../../atoms';

import {ICChecklist} from '../../../assets/dummy';
import {
  BiometricImage,
  ContainerContent,
  ContainerHeader,
  Content,
  Subtitle,
  Title,
} from './FingerPrintStyles';
import TouchID from 'react-native-touch-id';

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};
const FingerPrint = ({showModal, responseHandling}) => {
  let [animateModal, setanimateModal] = useState(false);
  const [modelComment, setModelComment] = useState(true);
  const [successLogin, setSuccessLogin] = useState(false);
  const SplashGif = require('../../../assets/dummy/biometricGif.gif');

  const pressHandler = () => {
    TouchID.authenticate(
      'to demo this react-native component',
      optionalConfigObject,
    )
      .then(success => {
        Alert.alert('Authenticated Successfully');
      })
      .catch(error => {
        Alert.alert('Authentication Failed');
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccessLogin(showModal);
    }, 5000);
  }, [showModal]);

  return (
    <SafeArea>
      <SwipeUpDownModal
        modalVisible={showModal}
        PressToanimate={animateModal}
        //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
        ContentModal={
          <ContainerContent>
            <Content>
              {successLogin === false ? (
                <BiometricImage source={SplashGif} />
              ) : (
                <ICChecklist />
              )}
            </Content>
            <Gap height={20} />
            {successLogin === false ? (
              <Title>Mendeteksi</Title>
            ) : (
              <Title>Berhasil Login!</Title>
            )}

            <Gap height={20} />
            {successLogin === false ? (
              <Subtitle>Pindai Sidik Jari anda untuk login</Subtitle>
            ) : (
              <Subtitle>Selamat Datang Dosen</Subtitle>
            )}
          </ContainerContent>
        }
        HeaderStyle={styles.headerContent}
        ContentModalStyle={styles.Modal}
        HeaderContent={
          <ContainerHeader>
            <TouchableOpacity
              onPress={() => {
                setanimateModal(true);
              }}>
              <BorderScroll />
            </TouchableOpacity>
          </ContainerHeader>
        }
        onClose={() => {
          setModelComment(false);
          setanimateModal(false);
          responseHandling(false);
        }}
      />
    </SafeArea>
  );
};

export default FingerPrint;

const styles = StyleSheet.create({
  headerContent: {
    marginTop: '100%',
  },
  Modal: {
    marginTop: 0,
  },
});
