import React from 'react';

import {SafeArea} from '../../utils/theme/area';
import {Gap, Header} from '../../components';
import ListProgressCourse from '../../components/molecules/ListProgressCourse/ListProgressCourse';

import {useSelector} from 'react-redux';
import {View} from 'react-native';
import {ScrollView, SpacingView} from '../../utils';

const GambaranKursus = ({navigation}) => {
  const {gambaranKursus} = useSelector(state => state.gambaranKursusReducer);
  console.log('gambaranKursus ', gambaranKursus);
  return (
    <SafeArea>
      <ScrollView>
        <Header title="Gambaran Kursus" onPress={() => navigation.goBack()} />
        <SpacingView>
          <SpacingView>
            {gambaranKursus.map(res => {
              return (
                <View key={res.id}>
                  <ListProgressCourse
                    tahun={res.tahun}
                    namaMataKuliah={res.namaMatakuliah}
                    progress={res.progress}
                    semester={res.semester}
                    onPress={() => navigation.navigate('DetailMataKuliah')}
                  />
                  <Gap height={20} />
                </View>
              );
            })}

            {/* <ListProgressCourse
              onPress={() => navigation.navigate('DetailMataKuliah')}
            />
            <Gap height={20} />
            <ListProgressCourse
              onPress={() => navigation.navigate('DetailMataKuliah')}
            />
            <Gap height={20} />
            <ListProgressCourse
              onPress={() => navigation.navigate('DetailMataKuliah')}
            /> */}
          </SpacingView>
        </SpacingView>
      </ScrollView>
    </SafeArea>
  );
};

export default GambaranKursus;
