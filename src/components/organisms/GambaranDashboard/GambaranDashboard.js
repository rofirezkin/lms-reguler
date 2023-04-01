import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CourseView} from './GambaranDashboardStyles';
import {ListProgressCourse} from '../../molecules';
import {Gap, LableHome} from '../../atoms';
import {FlexView, ScrollView} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const GambaranDashboard = () => {
  const {gambaranKursus} = useSelector(state => state.dasborReducer);
  const navigation = useNavigation();
  return (
    <CourseView>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('GambaranKursusNavigator')}>
        <LableHome title="Gambaran Kursus" />
      </TouchableOpacity>
      <Gap height={18} />

      <FlexView>
        <ScrollView horizontal={true}>
          <Gap width={26} />
          {gambaranKursus.map((res, index) => {
            return (
              <ListProgressCourse
                key={`gambar-${res.id}`}
                namaMataKuliah={res.namaMataKuliah}
                progress={res.progress}
                semester={res.semester}
                tahun={res.tahun}
                scroll
                onPress={() =>
                  navigation.navigate('GambaranKursusNavigator', {
                    screen: 'DetailMataKuliah',
                  })
                }
              />
            );
          })}

          <Gap width={26} />
        </ScrollView>
      </FlexView>
    </CourseView>
  );
};

export default GambaranDashboard;

const styles = StyleSheet.create({});
