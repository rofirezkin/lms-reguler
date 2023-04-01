import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SpacingView} from '../../../utils';
import {Gap} from '../../atoms';
import {List} from '../../molecules';
import {MoreText} from './TaskStyles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Task = () => {
  const navigation = useNavigation();
  const {timeline} = useSelector(state => state.dasborReducer);
  return (
    <>
      <SpacingView>
        <Gap height={32} />
        {timeline.map((dataTimeline, index) => {
          return (
            <List
              key={`timeline-${index}`}
              onPress={() =>
                navigation.navigate('TaskNavigator', {
                  screen:
                    dataTimeline.type === 'quiz' ? 'QuizDetail' : 'TaskDetail',
                  params: dataTimeline,
                })
              }
              name={dataTimeline.mataKuliah}
              quiz={dataTimeline.title}
              time="20:30"
            />
          );
        })}

        {/* <List
          name="Elektromagnetika"
          onPress={() =>
            navigation.navigate('TaskNavigator', {screen: 'TaskDetail'})
          }
          quiz="Tugas 02 Berakhir"
          time="21:30"
        /> */}
        <TouchableOpacity onPress={() => navigation.navigate('TaskNavigator')}>
          <MoreText>Selengkapnya {'>'} </MoreText>
        </TouchableOpacity>
      </SpacingView>
    </>
  );
};

export default Task;

const styles = StyleSheet.create({});
