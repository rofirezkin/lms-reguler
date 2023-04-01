import React from 'react';

import ListHeader from '../../components/molecules/List/ListHeader';
import {SpacingView} from '../../utils';

const BerandaSitus = () => {
  return (
    <SpacingView>
      <ListHeader iconPengumuman name="Pengumuman Situs" />
      <ListHeader name="Kategori Kursus" />
    </SpacingView>
  );
};

export default BerandaSitus;
