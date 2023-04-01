import React from 'react';
import {SafeArea} from '../../utils/theme/area';
import {Gap, Header, List, TimelineDate} from '../../components';
import {ScrollView, SpacingView} from '../../utils';

const Agenda = ({navigation}) => {
  return (
    <SafeArea>
      <ScrollView>
        <Header onPress={() => navigation.goBack()} title="Agenda Mendatang" />
        <TimelineDate date="Jumat, 24 Maret" />
        <SpacingView>
          <List
            onPress={() => navigation.navigate('TaskDetail')}
            name="Bengkel Pemograman II"
            quiz="Quiz 01 Berakhir"
            time="20:30"
          />
          <List
            name="Bengkel Pemograman II"
            quiz="Quiz 01 Berakhir"
            time="20:30"
          />
        </SpacingView>
        <Gap height={40} />
        <TimelineDate date="Kamis, 25 Maret" />
        <SpacingView>
          <List
            name="Bengkel Pemograman II"
            quiz="Quiz 01 Berakhir"
            time="20:30"
          />
          <List
            name="Bengkel Pemograman II"
            quiz="Quiz 01 Berakhir"
            time="20:30"
          />
          <List
            name="Bengkel Pemograman II"
            quiz="Quiz 01 Berakhir"
            time="20:30"
          />
        </SpacingView>
        <Gap height={40} />
        <TimelineDate date="Rabu, 25 Maret" />
        <SpacingView>
          <List
            name="Bengkel Pemograman II"
            quiz="Quiz 01 Berakhir"
            time="20:30"
          />
          <List
            name="Bengkel Pemograman II"
            quiz="Quiz 01 Berakhir"
            time="20:30"
          />
          <List
            onPress={() => navigation.navigate('TaskDetail')}
            name="Bengkel Pemograman II"
            quiz="Quiz 01 Berakhir"
            time="20:30"
          />
        </SpacingView>
        <Gap height={30} />
      </ScrollView>
    </SafeArea>
  );
};

export default Agenda;
