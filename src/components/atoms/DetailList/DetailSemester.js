import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {ICBulet, ICDetailSemester, ICNext} from '../../../assets';
import Gap from '../Gap/Gap';

import {ButtonList, DetailListView, IconView} from './DetailListStyles';
import {RowView} from '../../../utils';

const DetailSemester = ({namaMataKuliah, onPress}) => {
  return (
    <DetailListView detailSemester>
      <ButtonList onPress={onPress}>
        <RowView center>
          <ICDetailSemester />
          <Gap width={10} />
          <Text>{namaMataKuliah}</Text>
        </RowView>
        <IconView>
          <ICNext />
        </IconView>
      </ButtonList>
      <ButtonList>
        <RowView center>
          <ICDetailSemester />
          <Gap width={10} />
          <Text>{namaMataKuliah}</Text>
        </RowView>
        <IconView>
          <ICNext />
        </IconView>
      </ButtonList>
      <ButtonList>
        <RowView center>
          <ICDetailSemester />
          <Gap width={10} />
          <Text>{namaMataKuliah}</Text>
        </RowView>
        <IconView>
          <ICNext />
        </IconView>
      </ButtonList>
    </DetailListView>
  );
};

export default DetailSemester;
