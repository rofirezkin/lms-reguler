import React, {useState} from 'react';

import {Gap} from '../../atoms';
import ListUser from '../ListUser/ListUser';

import ModalPesan from '../Modals/ModalPesan';

import {ScrollView, SpacingView} from '../../../utils';

const Notes = () => {
  const [pesan, SetPesan] = useState(false);

  const onDetail = () => {
    console.log('hajaahaha');
    SetPesan(true);
  };
  return (
    <ScrollView>
      <ModalPesan
        type="detail-va"
        visible={pesan}
        onRequestClose={() => SetPesan(false)}
        showWarningFalse={() => SetPesan(false)}
      />
      <SpacingView>
        <Gap height={20} />

        <ListUser onPress={onDetail} akses="2 Hari yang lalu " nextButton />

        <Gap height={20} />

        <ListUser akses="2 Hari yang lalu" nextButton />

        <Gap height={20} />

        <ListUser akses="2 Hari yang lalu" nextButton />

        <Gap height={20} />

        <ListUser akses="2 Hari yang lalu" nextButton />

        <Gap height={20} />

        <ListUser akses="2 Hari yang lalu" nextButton />

        <Gap height={20} />

        <ListUser akses="2 Hari yang lalu" nextButton />

        <Gap height={20} />

        <ListUser akses="2 Hari yang lalu" nextButton />

        <Gap height={20} />

        <ListUser akses="2 Hari yang lalu" nextButton />
      </SpacingView>
    </ScrollView>
  );
};

export default Notes;
