import React, {useState} from 'react';
import {CustomList, DetailSemester, Gap} from '../../atoms';

import {useNavigation} from '@react-navigation/native';
import {SpacingView} from '../../../utils';

const DetailProgramStudi = () => {
  const navigation = useNavigation();
  const [enable, setEnable] = useState([]);
  const DropDownActive = id => {
    const length = 3;
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
    <SpacingView>
      <CustomList
        onPress={() => DropDownActive(0)}
        dropDown={enable[0]}
        listSemester
        label="Semester 1"
      />
      {enable[0] === true && (
        <DetailSemester
          onPress={() =>
            navigation.navigate('GambaranKursusNavigator', {
              screen: 'DetailMataKuliah',
            })
          }
          namaMataKuliah="Nama Mata Kuliah"
        />
      )}
      <Gap height={20} />
      <CustomList
        onPress={() => DropDownActive(1)}
        dropDown={enable[1]}
        listSemester
        label="Semester 2"
      />
      {enable[1] === true && (
        <DetailSemester namaMataKuliah="Nama Mata Kuliah" />
      )}
      <Gap height={20} />
      <CustomList
        onPress={() => DropDownActive(2)}
        dropDown={enable[2]}
        listSemester
        label="Semester 3"
      />
      {enable[2] === true && (
        <DetailSemester namaMataKuliah="Nama Mata Kuliah" />
      )}
      <Gap height={20} />
    </SpacingView>
  );
};

export default DetailProgramStudi;
