import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CourseView, LabelTimeline, MoreText, TitleTimeline} from './HomeStyles';
import {
  GambaranDashboard,
  Gap,
  LableHome,
  ListDashboard,
  ListDashboardItem,
  Task,
  TimelineDate,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTimeline} from '../../redux/action';
import {getDayName, SpacingView} from '../../utils';
const Dashboard = () => {
  const {course} = useSelector(state => state.dasborReducer);

  const date = new Date();
  const dayName = getDayName(date);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getTimeline());
  }, [dispatch]);

  return (
    <>
      <View>
        <LabelTimeline />
        <TitleTimeline>Timeline</TitleTimeline>
      </View>
      <Gap height={25} />
      <TimelineDate date={dayName} />

      <Task />
      <Gap height={13} />
      <GambaranDashboard />
      <Gap height={20} />
      <LableHome title="Mata Kuliah Sekarang" />
      <Gap height={10} />
      <SpacingView>
        <ListDashboard
          course={course}
          header="Mata Kuliah"
          label="Nama Mata Kuliah"
          caption="NAMA DOSEN | KODE DOSEN"
        />
      </SpacingView>
      <Gap height={20} />
      <SpacingView>
        <ListDashboardItem header="Items" />
      </SpacingView>
      <Gap height={30} />
      {/* <LableHome
        title="Agenda Mendatang"
        next={() => navigation.navigate('Agenda')}
      /> */}
      <Gap height={15} />
      <LableHome
        title="File Pribadi"
        next={() => navigation.navigate('FilePribadi')}
      />
      <Gap height={15} />
      <LableHome
        title="Rencana Pembelajaran"
        next={() => navigation.navigate('LearningPlan')}
      />
    </>
  );
};

export default Dashboard;
