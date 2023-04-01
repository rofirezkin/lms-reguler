import React, {useState} from 'react';
import {
  Content,
  Feedback,
  Header,
  Kompetensi,
  Nilai,
  Notes,
  Partisipan,
  TabBarCustom,
  Terselesaikan,
} from '../../components';
import {SafeArea} from '../../utils/theme/area';

const DetailMataKuliah = ({navigation}) => {
  const [dasbor, setDasbor] = useState(true);
  const [activePage, setActivePage] = useState(0);

  const handleData = value => {
    console.log('value', value);
    setDasbor(value);
  };
  const handleActivePage = value => {
    setActivePage(value);
    setDasbor(true);
  };

  const role = 'Mahasiswa';
  return (
    <SafeArea>
      <Header
        green={true}
        title="Nama Mata Kuliah"
        onPress={() => navigation.goBack()}
      />
      <TabBarCustom
        role={role}
        activePage={handleActivePage}
        activeDashboard={handleData}
      />
      {activePage === 0 && (
        <>{dasbor === true ? <Content /> : <Partisipan />}</>
      )}

      {activePage === 1 && <>{dasbor === true ? <Nilai /> : <Kompetensi />}</>}
      {activePage === 2 && (
        <>
          {dasbor === true ? (
            role === 'Dosen' ? (
              <Notes />
            ) : (
              <Feedback />
            )
          ) : (
            <Terselesaikan />
          )}
        </>
      )}
    </SafeArea>
  );
};

export default DetailMataKuliah;
