import React from 'react';
import {SafeArea} from '../../utils/theme/area';
import {Gap, Header, ListDeskripsi} from '../../components';

import {useSelector} from 'react-redux';
import {View} from 'react-native';
import {ScrollView, SpacingView} from '../../utils';

const Pemberitahuan = ({navigation}) => {
  const {pemberitahuanReducer} = useSelector(state => state);

  console.log('dett ', pemberitahuanReducer);
  return (
    <SafeArea>
      <ScrollView>
        <Header title="Pemberitahuan" onPress={() => navigation.goBack()} />
        <SpacingView>
          {pemberitahuanReducer.pemberitahuan.map(res => {
            return (
              <View key={res.id}>
                <ListDeskripsi
                  title={res.title}
                  date={res.datetime}
                  deskripsi={res.deskripsi}
                />
                <Gap height={20} />
              </View>
            );
          })}
        </SpacingView>
        <Gap height={20} />
      </ScrollView>
    </SafeArea>
  );
};

export default Pemberitahuan;
