import React, {useState} from 'react';
import {CustomList, ListKuliah} from '../../atoms';

const ListAccordionCustom = ({dropDown, enable, onPress, id}) => {
  console.log('testing data', dropDown);
  console.log('enablee ', enable);
  const [activePage, setActivePage] = useState(false);

  const ActiveDropDown = () => {
    setActivePage(!activePage);
  };

  return (
    <>
      <CustomList
        onPress={ActiveDropDown}
        dropDown={activePage}
        listWithBackground
        label="P1 - Judul Materi Perkuliahan"
      />
      {activePage === true && <ListKuliah />}
    </>
  );
};

export default ListAccordionCustom;
