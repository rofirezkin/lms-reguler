import {View} from 'react-native';
import React from 'react';
import {ICTask} from '../../../assets/icon';
import {
  IconCard,
  TextBody,
  TextContainer,
  TextHeader,
  TimelineCard,
} from './ListStyles';
import {RowView} from '../../../utils';

const List = ({quiz, name, time, onPress}) => {
  return (
    <TimelineCard activeOpacity={0.8} onPress={onPress}>
      <RowView flexdata>
        <IconCard>
          <ICTask />
        </IconCard>
        <TextContainer>
          <TextHeader>{quiz}</TextHeader>
          <TextBody>{name}</TextBody>
        </TextContainer>
      </RowView>
      <View>
        <TextBody>{time}</TextBody>
      </View>
    </TimelineCard>
  );
};

export default List;
