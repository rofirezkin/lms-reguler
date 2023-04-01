import React from 'react';
import ListUser from '../../components/molecules/ListUser/ListUser';
import {Gap} from '../../components';

const Partisipan = () => {
  return (
    <>
      <ListUser status="Sudah Tersubmit" nilai="100" />
      <Gap height={16} />
      <ListUser status="Sudah Tersubmit" nilai="100" />
      <Gap height={16} />
      <ListUser status="Sudah Tersubmit" nilai="100" />
      <Gap height={16} />
      <ListUser status="Belum Tersubmit" nilai="100" />
      <Gap height={16} />
      <ListUser status="Belum Tersubmit" nilai="100" />
      <Gap height={16} />
      <ListUser status="Sudah Tersubmit" nilai="100" />
      <Gap height={16} />

      <ListUser status="Sudah Tersubmit" nilai="100" />
      <Gap height={16} />

      <ListUser status="Sudah Tersubmit" nilai="100" />

      <Gap height={16} />
      <ListUser status="Sudah Tersubmit" nilai="100" />
      <Gap height={16} />
    </>
  );
};

export default Partisipan;
