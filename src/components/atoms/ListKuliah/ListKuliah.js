import React from 'react';
import CustomList from '../CustomList/CustomList';
import Gap from '../Gap/Gap';
import Description from '../Description/Description';
import {useNavigation} from '@react-navigation/native';

const ListKuliah = ({description}) => {
  const navigation = useNavigation();
  return (
    <>
      <Gap height={20} />
      <Description title="Deskripsi Mata Kuliah" description={description} />
      <Gap height={20} />

      <CustomList
        onPress={() => navigation.navigate('Forum')}
        listDetailKuliah
        label="Forum"
      />
      <CustomList
        listDetailKuliah
        link
        icon="pembelajaran"
        label="Materi Pembelajaran"
      />
      <CustomList
        listDetailKuliah
        icon="perkuliahan"
        label="Materi Perkuliahan"
      />
      <CustomList
        listDetailKuliah
        icon="video-pembelajaran"
        label="Video Pembelajaran"
        link
      />
      <CustomList listDetailKuliah icon="quiz" label="Quiz" />
      <CustomList listDetailKuliah label="Tugas" icon="tugas" />
    </>
  );
};

export default ListKuliah;
