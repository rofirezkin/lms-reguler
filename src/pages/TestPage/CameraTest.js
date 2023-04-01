import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo, useRef} from 'react';
import {
  Camera,
  CameraDeviceFormat,
  CameraRuntimeError,
  FrameProcessorPerformanceSuggestion,
  PhotoFile,
  sortFormats,
  useCameraDevices,
  useFrameProcessor,
  VideoFile,
} from 'react-native-vision-camera';
import {SafeArea} from '../../utils/theme/area';
import {ButtonDefault} from '../../components';
import Draggable from 'react-native-draggable';
import {useState} from 'react';

const CameraTest = ({navigation}) => {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.front;
  const [imageStorage, setImageStorage] = useState([]);

  const MINUTE_MS = 10000;

  useEffect(() => {
    const interval = setInterval(async () => {
      const snapshot = await camera.current.takeSnapshot({
        quality: 85,
        skipMetadata: true,
      });
      console.log('data snapshot ', snapshot);
      const pathFile = `file://${snapshot.path}`;

      setImageStorage(i => [...i, pathFile]);
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  console.log('image storage', imageStorage);
  if (device == null) {
    return (
      <View>
        <Text>haalo</Text>
      </View>
    );
  }
  return (
    <SafeArea>
      <View>
        <Draggable
          x={75}
          y={100}
          renderSize={56}
          renderColor="black"
          renderText="A"
          isCircle
          shouldReverse
          onShortPressRelease={() => alert('touched!!')}
        />
        <Draggable x={200} y={300} renderColor="red" renderText="B" />
        <Draggable />
        <Draggable
          x={50}
          y={50}
          onShortPressRelease={() =>
            navigation.replace('ImageMapping', imageStorage)
          }>
          <Camera
            ref={camera}
            style={{
              borderRadius: 10,
              width: 50,
              height: 80,
              zIndex: 1000,
              right: 0,
              top: 50,
            }}
            device={device}
            isActive={true}
          />
        </Draggable>
      </View>

      <ButtonDefault title="data" />
    </SafeArea>
  );
};

export default CameraTest;
