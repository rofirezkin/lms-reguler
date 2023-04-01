import {Text, View} from 'react-native';
import React from 'react';
import {ICArrowDown, ICArrowUp, ICBook, ICFakultas} from '../../../assets/icon';
import {
  IconArrow,
  IconCard,
  ListMateriView,
  TextContainer,
  TextHeader,
} from './ListStyles';

import {Gap} from '../../atoms';
import {RowView} from '../../../utils';

const ListMateri = ({name, onPress, dropDown, icon}) => {
  const Icon = () => {
    if (icon === 'fakultas') {
      return <ICFakultas />;
    } else {
      return <ICBook />;
    }
  };
  console.log('name ', name);
  return (
    <>
      <ListMateriView onPress={onPress}>
        <RowView flexdata>
          <IconCard listMateri>
            <Icon />
          </IconCard>
          <TextContainer>
            <TextHeader header>{name} </TextHeader>
          </TextContainer>
        </RowView>
        <IconArrow>
          {dropDown === true ? <ICArrowUp /> : <ICArrowDown />}
        </IconArrow>
      </ListMateriView>
      <Gap height={10} />
    </>
  );
};

export default ListMateri;
