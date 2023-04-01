import React from 'react';
import {SpacingView} from '../../../utils';
import {CostumListFile, Gap} from '../../atoms';

const Terselesaikan = () => {
  return (
    <SpacingView>
      <Gap height={20} />
      <CostumListFile icon="Book" title="Nama Kompetensi" success pageSuccess />
      <Gap height={20} />
      <CostumListFile icon="Book" title="Nama Kompetensi" pageSuccess />
      <Gap height={20} />
      <CostumListFile icon="Book" title="Nama Kompetensi" pageSuccess />
      <Gap height={20} />
      <CostumListFile icon="Book" title="Nama Kompetensi" success pageSuccess />
    </SpacingView>
  );
};

export default Terselesaikan;
