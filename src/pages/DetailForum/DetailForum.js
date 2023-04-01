import React, {useState} from 'react';
import {ButttonView, SafeArea} from '../../utils/theme/area';
import {
  Gap,
  Header,
  ListBalasanForum,
  ListDeskripsi,
  ModalBalasan,
  ModalSuccess,
} from '../../components';

import {Text} from '../../components/atoms/typography/text.component';

import {ICButton} from '../../assets/icon';
import {ScrollView} from 'react-native-gesture-handler';
import {SpacingView} from '../../utils';

const DetailForum = ({navigation}) => {
  const [button, setButton] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleInput = () => {
    setButton(true);
  };
  const onSubmit = () => {
    setSuccess(true);
    setButton(false);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };
  return (
    <SafeArea>
      <ModalSuccess visible={success} />
      <ModalBalasan
        visible={button}
        onRequestClose={() => setButton(false)}
        onSubmit={onSubmit}
      />
      <ScrollView>
        <Header title="Judul Forum" onPress={() => navigation.goBack()} />
        <SpacingView>
          <ListDeskripsi
            onPress={() => navigation.navigate('DetailForum')}
            deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            est, dapibus in orci porta, iaculis sagittis libero. In lobortis
            elit in egestas"
            mode="forum-detail"
            title="Nama Mahasiswa"
            date="21/04/2022 | 10:00"
          />
          <Gap height={25} />
          <Text variant="label">Balasan</Text>
          <Gap height={25} />
          <ListBalasanForum
            deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            est, dapibus in orci porta, iaculis sagittis libero. In lobortis
            elit in egestas"
            mode="forum"
            title="Nama Mahasiswa"
            date="21/04/2022 | 10:00"
          />
          <Gap height={20} />
          <ListBalasanForum
            deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            est, dapibus in orci porta, iaculis sagittis libero. In lobortis
            elit in egestas"
            mode="forum"
            title="Nama Mahasiswa"
            date="21/04/2022 | 10:00"
          />
        </SpacingView>
      </ScrollView>
      <ButttonView onPress={handleInput}>
        <ICButton />
      </ButttonView>
    </SafeArea>
  );
};

export default DetailForum;
