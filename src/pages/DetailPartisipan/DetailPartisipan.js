import React from 'react';

import {Gap, Header, ListUser, TabViewDetailPartisipan} from '../../components';
import {SafeArea, SpacingView} from '../../utils';

const DetailPartisipan = ({navigation}) => {
  return (
    <SafeArea>
      <Header title="Tugas 01" onPress={() => navigation.goBack()} />
      <SpacingView>
        <ListUser status="Sudah Tersubmit" penilaian="Sudah Dinilai" />
        <Gap height={20} />
      </SpacingView>
      <TabViewDetailPartisipan />
    </SafeArea>
  );
};

export default DetailPartisipan;
