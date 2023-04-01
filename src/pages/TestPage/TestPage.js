import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeArea} from '../../utils/theme/area';
import {Camera} from 'react-native-vision-camera';

const TestPAge = ({navigation}) => {
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState('not-determined');
  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...');
    const permission = await Camera.requestCameraPermission();
    console.log(`Camera permission status: ${permission}`);

    if (permission === 'denied') {
      await Linking.openSettings();
    }
    setCameraPermissionStatus(permission);
  }, []);

  useEffect(() => {
    if (cameraPermissionStatus === 'authorized') {
      navigation.navigate('Quiz');
    }
  }, [cameraPermissionStatus, navigation]);

  return (
    <SafeArea>
      <View>
        <Text>sfjjs s ss</Text>
      </View>
      {cameraPermissionStatus !== 'authorized' && (
        <Text style={styles.permissionText}>
          Vision Camera needs <Text style={styles.bold}>Camera permission</Text>{' '}
          <TouchableOpacity onPress={requestCameraPermission}>
            <Text>camera</Text>
          </TouchableOpacity>
        </Text>
      )}
    </SafeArea>
  );
};

export default TestPAge;

const styles = StyleSheet.create({});
