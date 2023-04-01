import React, {useState} from 'react';

import ListMateri from '../../molecules/List/ListMateri';
import {DetailMateri, Gap} from '../../atoms';

import CostumListFile from '../../atoms/CustomList/CostumListFile';
import {SpacingView} from '../../../utils';

const Nilai = () => {
  const [enable, setEnable] = useState([]);
  const role = 'Mahasiswa';
  const DropDownActive = id => {
    const length = 4;
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

    console.log('enable drop down', enableDropDown);
    setEnable(enableDropDown);
  };

  return (
    <SpacingView>
      <Gap height={20} />
      {role === 'Dosen' ? (
        <>
          <ListMateri
            onPress={() => DropDownActive(0)}
            dropDown={enable[0]}
            name="Materi Perkuliahan 1"
          />
          {enable[0] === true && <DetailMateri />}
          <Gap height={10} />
          <ListMateri
            onPress={() => DropDownActive(1)}
            dropDown={enable[1]}
            name="Materi Perkuliahan 2"
          />
          {enable[1] === true && <DetailMateri />}
          <Gap height={10} />
          <ListMateri
            onPress={() => DropDownActive(2)}
            dropDown={enable[2]}
            name="Materi Perkuliahan 3"
          />
          {enable[2] === true && <DetailMateri />}
          <Gap height={10} />
          <ListMateri
            onPress={() => DropDownActive(3)}
            dropDown={enable[3]}
            name="Materi Perkuliahan 4"
          />
          {enable[3] === true && <DetailMateri />}
        </>
      ) : (
        <>
          <CostumListFile nilai="80" icon="quiz" title="Quiz 1" />
          <Gap height={20} />
          <CostumListFile nilai="100" icon="quiz" title="Quiz 2" />
          <Gap height={20} />
          <CostumListFile nilai="100" icon="quiz" title="Quiz 3" />
          <Gap height={20} />
          <CostumListFile nilai="100" icon="quiz" title="Quiz 4" />
          <Gap height={20} />
          <CostumListFile nilai="100" icon="quiz" title="Quiz 5" />
          <Gap height={20} />
          <CostumListFile nilai="100" icon="quiz" title="Quiz 6" />
        </>
      )}
    </SpacingView>
  );
};

export default Nilai;
