import React from 'react';
import {DetailView} from './ListStyles';
import {Text} from '../../atoms/typography/text.component';
import {Gap, Input} from '../../atoms';

const ListDetailPartisipan = ({title, description, input}) => {
  if (input) {
    return (
      <DetailView>
        <Text variant="label">{title}</Text>
        <Gap height={10} />
        <Input />
      </DetailView>
    );
  }
  return (
    <DetailView>
      <Text variant="label">{title}</Text>
      <Gap height={10} />
      <Text variant="hint"> {description}</Text>
    </DetailView>
  );
};

export default ListDetailPartisipan;
