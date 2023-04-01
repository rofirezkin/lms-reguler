import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';
import {
  ContenBoxText,
  FlexViewEnd,
  HeaderText,
  ListProgressView,
  PersentasiText,
  SubContentText,
} from './ListProgressCourseStyles';
import {ProgressView} from '@react-native-community/progress-view';

const ListProgressCourse = ({
  onPress,
  scroll,
  namaMataKuliah,
  progress,
  semester,
  tahun,
}) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <ListProgressView scroll={scroll}>
          <SubContentText>{`${tahun}/${semester}`}</SubContentText>
          <ContenBoxText>{namaMataKuliah}</ContenBoxText>
          <Gap height={50} />
          <ProgressView
            progressTintColor="#FFD600"
            trackTintColor="white"
            progress={progress / 100}
          />
          <Gap height={12} />
          <FlexViewEnd>
            <HeaderText>
              Selesai <PersentasiText>{progress}%</PersentasiText>
            </HeaderText>
          </FlexViewEnd>
        </ListProgressView>
      </TouchableOpacity>
      <Gap width={30} />
    </>
  );
};

export default ListProgressCourse;
