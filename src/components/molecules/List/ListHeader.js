import React from 'react';
import {ICCategory, ICPengumuman} from '../../../assets/icon';
import {RowView} from '../../../utils';
import {IconCard, TextContainer, TextHeader, TimelineCard} from './ListStyles';

const ListHeader = ({name, iconPengumuman, onPress}) => {
  return (
    <TimelineCard onPress={onPress}>
      <RowView>
        <IconCard>
          {iconPengumuman ? <ICPengumuman /> : <ICCategory />}
        </IconCard>
        <TextContainer>
          <TextHeader header>{name}</TextHeader>
        </TextContainer>
      </RowView>
    </TimelineCard>
  );
};

export default ListHeader;
