import React, {useState} from 'react';
import {Gap, Header, ModalButton} from '../../components';

import CostumListFile from '../../components/atoms/CustomList/CostumListFile';

import {ButttonView} from './FilePribadiStyles';
import {SafeArea, SpacingView} from '../../utils';
import {ICButton} from '../../assets/icon';

const FilePribadi = ({navigation}) => {
  const [button, setButton] = useState(false);
  const addDocument = () => {
    setButton(true);
  };
  return (
    <SafeArea>
      <Header onPress={() => navigation.goBack()} title="File Pribadi" />
      <SpacingView>
        <ModalButton
          visible={button}
          onRequestClose={() => setButton(false)}
          showWarningFalse={() => setButton(false)}
        />
        <CostumListFile icon="Document" title="Document" size="5Mb" />
        <Gap height={20} />
        <CostumListFile icon="Foto" title="Foto" size="5Mb" />
        <Gap height={20} />
        <CostumListFile icon="Video" title="Video" size="5Mb" />
      </SpacingView>
      <ButttonView onPress={addDocument}>
        <ICButton />
      </ButttonView>
    </SafeArea>
  );
};

export default FilePribadi;
