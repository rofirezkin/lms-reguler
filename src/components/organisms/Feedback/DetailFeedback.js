import {Text, View} from 'react-native';
import React from 'react';

import {Gap} from '../../atoms';
import {ListBalasanForum} from '../../molecules';
import ListFeedback from './ListFeedback';

const DetailFeedback = () => {
  return (
    <View>
      <ListFeedback
        deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            est, dapibus in orci porta, iaculis sagittis libero. In lobortis
            elit in egestas"
        mode="forum"
        detailFeedback
        name="Judul Feedback"
        title="Nama Mahasiswa"
        date="21/04/2022 | 10:00"
      />
      <Gap height={25} />
      <Text variant="label">Balasan</Text>
      <Gap height={25} />
      <ListBalasanForum
        feedback={true}
        deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            est, dapibus in orci porta, iaculis sagittis libero. In lobortis
            elit in egestas"
        mode="forum"
        title="Nama Mahasiswa"
        date="21/04/2022 | 10:00"
      />
    </View>
  );
};

export default DetailFeedback;
