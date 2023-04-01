import React from 'react';

import ListUser from '../../molecules/ListUser/ListUser';
import {Gap} from '../../atoms';
import {SpacingView} from '../../../utils';

const Partisipan = () => {
  return (
    <SpacingView>
      <Gap height={17} />
      <ListUser akses="2 Hari yang lalu" />
      <Gap height={13} />
      <ListUser akses="2 Hari yang lalu" />
      <Gap height={13} />
      <ListUser akses="2 Hari yang lalu" />
      <Gap height={13} />
      <ListUser akses="2 Hari yang lalu" />
      <Gap height={13} />
      <ListUser akses="2 Hari yang lalu" />
    </SpacingView>
  );
};

export default Partisipan;
