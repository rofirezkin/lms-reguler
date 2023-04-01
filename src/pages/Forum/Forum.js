import React, {useState} from 'react';
import {ButttonView, SafeArea} from '../../utils/theme/area';
import {
  Gap,
  Header,
  ListDeskripsi,
  ModalPesan,
  ModalSuccess,
} from '../../components';

import {ICButton} from '../../assets/icon';
import {ScrollView, SpacingView} from '../../utils';

const Forum = ({navigation}) => {
  const [pesan, SetPesan] = useState(false);
  const [success, setSuccess] = useState(false);
  const onDetail = () => {
    SetPesan(true);
  };
  const onSubmit = () => {
    setSuccess(true);
    SetPesan(false);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };
  return (
    <SafeArea>
      <ModalSuccess visible={success} />
      <ModalPesan
        type="detail-va"
        visible={pesan}
        onRequestClose={() => SetPesan(false)}
        onSubmit={onSubmit}
      />
      <ScrollView>
        <Header title="Forum" onPress={() => navigation.goBack()} />
        <Gap height={28} />
        <SpacingView>
          <ListDeskripsi
            onPress={() => navigation.navigate('DetailForum')}
            deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            est, dapibus in orci porta, iaculis sagittis libero. In lobortis
            elit in egestas"
            mode="forum"
            name="Nama Mahasiswa"
            title="Judul Forum"
            date="21/04/2022 | 10:00"
          />
          <Gap height={24} />
          <ListDeskripsi
            onPress={() => navigation.navigate('DetailForum')}
            deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            est, dapibus in orci porta, iaculis sagittis libero. In lobortis
            elit in egestas"
            mode="forum"
            name="Nama Mahasiswa"
            title="Judul Forum"
            date="21/04/2022 | 10:00"
          />
        </SpacingView>
      </ScrollView>
      <ButttonView onPress={onDetail}>
        <ICButton />
      </ButttonView>
    </SafeArea>
  );
};

export default Forum;
