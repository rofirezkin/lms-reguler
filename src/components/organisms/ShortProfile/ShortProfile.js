import {Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICNotification, ICProfile} from '../../../assets/icon';

import {useNavigation} from '@react-navigation/native';
import {
  CenterView,
  ShortProfileCard,
  TextSubTitle,
  TextTitle,
} from './ShortProfileStyles';
import {RowView} from '../../../utils';

const ShortProfile = ({role}) => {
  const navigation = useNavigation();

  return (
    <ShortProfileCard>
      <View>
        <TextSubTitle>Selamat Datang</TextSubTitle>
        <TextTitle>{role}</TextTitle>
      </View>
      <RowView>
        <CenterView>
          <TouchableOpacity
            onPress={() => navigation.navigate('Pemberitahuan')}>
            <ICNotification />
          </TouchableOpacity>
        </CenterView>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileNavigator')}>
          <Image source={ICProfile} />
        </TouchableOpacity>
      </RowView>
    </ShortProfileCard>
  );
};

export default ShortProfile;
