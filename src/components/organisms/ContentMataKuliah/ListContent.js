import React, {useState} from 'react';
import {View} from 'react-native';
import {CustomList, Gap, ListKuliah} from '../../atoms';

const ListContent = ({materiKuliah}) => {
  const [enable, setEnable] = useState([]);
  console.log('mRWEI KUliah ', materiKuliah);
  const DropDownActive = id => {
    const length = materiKuliah.length;
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
      {materiKuliah.map((res, index) => {
        return (
          <View key={`mater-${index}`}>
            <CustomList
              onPress={() => DropDownActive(index)}
              dropDown={enable[index]}
              listWithBackground
              label={res.judulMateri}
            />
            {enable[index] === true && (
              <ListKuliah description={res.deskripsi} />
            )}
            <Gap height={20} />
          </View>
        );
      })}
    </>
  );
};

export default ListContent;
