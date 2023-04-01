import React from 'react';

import CostumListFile from '../../atoms/CustomList/CostumListFile';
import {Gap} from '../../atoms';
import {SpacingView} from '../../../utils';

const Kompetensi = () => {
  return (
    <SpacingView>
      <Gap height={20} />
      <CostumListFile title="Nama Kompetensi" />
      <Gap height={20} />
      <CostumListFile title="Nama Kompetensi" />
      <Gap height={20} />
      <CostumListFile title="Nama Kompetensi" />
      <Gap height={20} />
      <CostumListFile title="Nama Kompetensi" />
    </SpacingView>
  );
};

export default Kompetensi;
