import React from 'react';
import ListUser from '../../components/molecules/ListUser/ListUser';
import {Gap} from '../../components';
import {useNavigation} from '@react-navigation/native';

const Terkumpul = () => {
  const navigation = useNavigation();
  return (
    <>
      <ListUser
        onPress={() => navigation.navigate('DetailPartisipan')}
        status="Sudah Tersubmit"
        penilaian="Sudah Dinilai"
      />
      <Gap height={16} />
      <ListUser status="Belum Tersubmit" penilaian="Belum Dinilai" />
      <Gap height={16} />
      <ListUser status="Sudah Tersubmit" penilaian="Belum Dinilai" />
      <Gap height={16} />
      <ListUser status="Belum Tersubmit" penilaian="Belum Dinilai" />
      <Gap height={16} />
      <ListUser status="Belum Tersubmit" penilaian="Belum Dinilai" />
      <Gap height={16} />
      <ListUser status="Sudah Tersubmit" penilaian="Sudah Dinilai" />
      <Gap height={16} />

      <ListUser status="Sudah Tersubmit" penilaian="Sudah Dinilai" />

      <Gap height={16} />
    </>
  );
};

export default Terkumpul;
