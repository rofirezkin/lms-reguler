import React from 'react';
import {ScrollView, SpacingView} from '../../utils/theme/styled';
import {Gap, Header, List, TimelineDate} from '../../components';

import {useSelector} from 'react-redux';
import {SafeArea} from '../../utils';

const Timeline = ({navigation}) => {
  const {allTimeline} = useSelector(state => state.allTimelineReducer);
  console.log('dataaxxxa', allTimeline);
  return (
    <SafeArea>
      <ScrollView>
        <Header title="Timeline" onPress={() => navigation.goBack()} />
        <TimelineDate date="Jumat, 24 Maret" />
        <SpacingView>
          {allTimeline.map((res, index) => {
            return (
              <List
                key={`data-${index}`}
                onPress={() =>
                  navigation.navigate(
                    res.type === 'tugas' ? 'TaskDetail' : 'QuizDetail',
                    res,
                  )
                }
                name={res.mataKuliah}
                quiz={res.title}
                time={res.time}
              />
            );
          })}
        </SpacingView>

        <Gap height={30} />
      </ScrollView>
    </SafeArea>
  );
};

export default Timeline;
