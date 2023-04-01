import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {
  BgCircleBottom,
  BgCircleCenter,
  BgCircleTop,
  LogoSplashScreen,
} from '../../assets/background';

import {
  BgCircle1,
  BgCircle2,
  BgCircle3,
  BgGradient,
  Icon,
} from './SplashScreenStyles';

const SplashScreen = ({navigation}) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Login');
  //   }, 3000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <BgGradient>
        <BgCircle1 source={BgCircleTop} />
        <BgCircle2 source={BgCircleCenter} />
        <BgCircle3 source={BgCircleBottom} />
        <Icon>
          <Image source={LogoSplashScreen} style={{width: 237, height: 229}} />
        </Icon>
      </BgGradient>
    </>
  );
};

export default SplashScreen;
