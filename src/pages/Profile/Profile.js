import {View} from 'react-native';
import React, {useState} from 'react';
import {SafeArea} from '../../utils/theme/area';
import {
  Gap,
  Header,
  ListDefault,
  ModalBasic,
  ProfileUser,
} from '../../components';

import {BgProfileTop, BgProfileBottom} from '../../assets/background';

import {BgProfileBottomImage, BgProfileTopImage} from './ProfileStyles';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../redux/action';
import {colors, SpacingView} from '../../utils';

const Profile = ({navigation}) => {
  const {userReducer} = useSelector(state => state);
  console.log('user ', userReducer);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const onLogout = () => {
    setShowModal(true);
  };
  const onSuccess = () => {
    setShowModal(false);
    dispatch(signOut());
  };
  console.log('dataa profile');

  return (
    <SafeArea>
      <ModalBasic
        title="Apakah Anda Yakin ingin keluar ?"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        onSuccess={onSuccess}
      />
      <BgProfileTopImage source={BgProfileTop} />
      <BgProfileBottomImage source={BgProfileBottom} />
      <Header onPress={() => navigation.goBack()} title="Profile" />
      <SpacingView>
        <ProfileUser
          name={userReducer.name}
          kode="000060664"
          onPress={() => navigation.navigate('DetailProfile')}
        />
        <Gap height={13} />

        <Gap height={30} />
        <View
          style={{
            borderBottomColor: colors.bg.border,
            borderBottomWidth: 2,
          }}
        />
        <ListDefault icon="toga" title="Nilai - Nilai" />
        <ListDefault icon="blog" title="Situs Blog" />
        <ListDefault icon="file" title="File" />
        <ListDefault icon="situs" title="Situs Web" />
        <ListDefault icon="preferensi" title="Preferensi" />
        <ListDefault onPress={onLogout} icon="logout" title="Keluar" />
      </SpacingView>
    </SafeArea>
  );
};

export default Profile;
