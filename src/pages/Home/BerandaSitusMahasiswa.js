import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {
  DetailFakultas,
  DetailProgramStudi,
  Gap,
  Header,
  TimelineDate,
} from '../../components';
import ListMateri from '../../components/molecules/List/ListMateri';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {SpacingView} from '../../utils';

const BerandaSitusMahasiswa = ({navigation}) => {
  const {fakultas} = useSelector(state => state.berandaMahasiswaReducer);
  const [enable, setEnable] = useState([]);
  const [nameFakultas, setNameFakultas] = useState('');
  const [nameProdi, setNameProdi] = useState('');
  const [navigationPage, setNavigationPage] = useState(false);
  const DropDownActive = (id, resData) => {
    setNameFakultas(resData.category_name);
    const length = fakultas.length;
    console.log('lengthh --------------- ', length);
    var enableDropDown = [];
    for (let i = 0; i < length; i++) {
      if (id === i) {
        if (enable[i] === true) {
          enableDropDown.push(false);
        } else {
          enableDropDown.push(true);
        }
      } else {
        enableDropDown.push(false);
      }
    }
    // setEnable(enableDropDown);

    setEnable(enableDropDown);
  };

  return (
    <>
      <Gap height={20} />
      <TimelineDate date="Kategori Kursus" />

      {navigationPage === false ? (
        <SpacingView>
          <Gap height={20} />
          {fakultas.map((resData, index) => {
            return (
              <View key={`fak-${index}`}>
                <ListMateri
                  icon="fakultas"
                  onPress={() => DropDownActive(index, resData)}
                  dropDown={enable[index]}
                  name={resData.category_name}
                />
                {enable[index] === true && (
                  <DetailFakultas
                    nameProdi={e => setNameProdi(e)}
                    id={resData.category_id}
                    navigatePage={e => setNavigationPage(e)}
                    navigation={navigation}
                  />
                )}
                <Gap height={10} />
              </View>
            );
          })}
          {/* 
          <ListMateri
            icon="fakultas"
            onPress={() => DropDownActive(1)}
            dropDown={enable[1]}
            name="Nama Fakultas"
          />
          {enable[1] === true && (
            <DetailFakultas navigatePage={e => console.log(e)} />
          )}
          <Gap height={10} />
          <ListMateri
            icon="fakultas"
            onPress={() => DropDownActive(2)}
            dropDown={enable[2]}
            name="Nama Fakultas"
          />
          {enable[2] === true && (
            <DetailFakultas navigatePage={e => console.log(e)} />
          )}
          <Gap height={10} />
          <ListMateri
            icon="fakultas"
            onPress={() => DropDownActive(3)}
            dropDown={enable[3]}
            name="Nama Fakultas"
          />
          {enable[3] === true && (
            <DetailFakultas navigatePage={e => console.log(e)} />
          )} */}
        </SpacingView>
      ) : (
        <>
          <Header
            prodi={true}
            subTitle={nameFakultas}
            beranda={true}
            title={nameProdi}
            onPress={() => setNavigationPage(false)}
          />
          <DetailProgramStudi />
        </>
      )}
    </>
  );
};

export default BerandaSitusMahasiswa;
