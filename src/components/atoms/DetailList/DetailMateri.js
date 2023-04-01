import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {ICQuiz, ICTugas} from '../../../assets/DetailKuliah';
import {ICNext} from '../../../assets/icon';
import Gap from '../Gap/Gap';

import {
  ButtonList,
  CardMateriView,
  DetailListView,
  IconView,
} from './DetailListStyles';
import {RowView} from '../../../utils';

const DetailMateri = () => {
  return (
    <DetailListView>
      <CardMateriView>
        <RowView>
          <ICQuiz />
          <Gap width={10} />
          <Text>Quiz</Text>
        </RowView>
        <IconView>
          <ICNext />
        </IconView>
      </CardMateriView>
      <ButtonList>
        <RowView>
          <ICTugas />
          <Gap width={10} />
          <Text>Tugas 1</Text>
        </RowView>
        <IconView>
          <ICNext />
        </IconView>
      </ButtonList>
    </DetailListView>
  );
};

export default DetailMateri;
