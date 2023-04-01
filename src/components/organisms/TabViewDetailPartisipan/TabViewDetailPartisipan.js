import * as React from 'react';
import {View, useWindowDimensions, StyleSheet, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {AvatarImage} from '../../../assets/dummy';
import {ICUnduh} from '../../../assets/icon';

import {
  BorderScroll,
  colors,
  fonts,
  PositionView,
  RowView,
  ScrollView,
  SpacingView,
} from '../../../utils';

import {Gap} from '../../atoms';
import {Text} from '../../atoms/typography/text.component';
import {ListDetailPartisipan} from '../../molecules';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStyle}
    style={styles.topBar}
    tabStyle={styles.tabStyle}
    renderLabel={({route, focused, color}) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />
);

const Pengumpulan = () => {
  return (
    <ScrollView>
      <SpacingView>
        <Gap height={20} />
        <View>
          <Text variant="label">File Tersubmit</Text>
          <Gap height={10} />
          <RowView justifyContent listUser>
            <RowView>
              <Image source={AvatarImage} style={{width: 30, height: 40}} />
              <Gap width={14} />
              <View>
                <Text variant="body">NAMA FILE.JPG</Text>
                <Text variant="hint">Ukuran File</Text>
                <Text variant="hint">Tanggal/Bulan/Tahun, Waktu</Text>
              </View>
            </RowView>
            <PositionView>
              <ICUnduh />
            </PositionView>
          </RowView>
          <Gap height={20} />
          <BorderScroll />
          <ListDetailPartisipan
            title="Akses Terakhir"
            description="Sabtu, 2 April 2022, 6:10 PM"
          />
          <ListDetailPartisipan
            title="Sisa Waktu Pengerjaan"
            description="Pengumpulan tersubmit 5 jam lebih cepat"
          />
          <ListDetailPartisipan
            title="Status Pengeditan"
            description="Mahasiswa dapat mengedit pengumpulam"
          />
        </View>
      </SpacingView>
    </ScrollView>
  );
};

const Nilai = () => {
  return (
    <ScrollView>
      <SpacingView>
        <Gap height={20} />
        <ListDetailPartisipan title="Nilai" input />
        <ListDetailPartisipan title="Nilai" description="tidak ada" />
        <ListDetailPartisipan title="Komentar" input />
      </SpacingView>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  pengumpulan: Pengumpulan,
  nilai: Nilai,
});

export default function TabViewDetailPartisipan() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'pengumpulan', title: 'Pengumpulan'},
    {key: 'nilai', title: 'Nilai'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}

const styles = StyleSheet.create({
  tabView: {backgroundColor: 'white'},
  topBar: {
    backgroundColor: colors.bg.white,

    borderBottomColor: '#F2F2F2',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  indicatorStyle: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: colors.bg.section,
    height: 4,
  },
  tabStyle: {
    marginHorizontal: 10,
  },
  tabText: focused => ({
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: focused ? '#020202' : '#8D92A3',
  }),
});
