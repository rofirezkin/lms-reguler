import React from 'react';

import {Gap, Header} from '../../components';
import {SafeArea, ScrollView, SpacingView} from '../../utils';
import {Title} from './MonitoringMahasiswaStyles';

import Partisipan from './Partisipan';
import Terkumpul from './Terkumpul';

const MonitoringMahasiswa = ({navigation, route}) => {
  const params = route.params;
  return (
    <SafeArea>
      <ScrollView>
        <Header onPress={() => navigation.goBack()} title="Quiz 1" />
        <Title>{params.title}</Title>
        <Gap height={24} />
        <SpacingView>
          {params.detail ? (
            <Terkumpul />
          ) : params.title === 'PARTISIPAN' ? (
            <Partisipan />
          ) : (
            <Terkumpul />
          )}
        </SpacingView>
      </ScrollView>
    </SafeArea>
  );
};

export default MonitoringMahasiswa;
