import * as React from 'react';
import {View, useWindowDimensions, Text, StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {colors, fonts, ScrollView, SpacingView} from '../../../utils';

import {Gap} from '../../atoms';
import {ListPesan} from '../../molecules';

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

const All = () => {
  return (
    <ScrollView>
      <SpacingView>
        <Gap height={20} />
        <ListPesan
          pesan="Halo kawan kawan "
          nama="Nama Mahasiswa "
          waktu="07:00"
          mode="personal"
        />
        <Gap height={15} />
        <ListPesan
          pesan="Halo kawan kawan"
          nama="Nama Group"
          waktu="07:00"
          mode="group"
        />
        <Gap height={15} />
        <ListPesan
          pesan="Halo kawan kawan"
          nama="Nama Mahasiswa"
          waktu="07:00"
          mode="personal"
        />
        <Gap height={15} />
        <ListPesan
          pesan="Halo kawan kawan"
          nama="Nama Mahasiswa"
          waktu="07:00"
          mode="personal"
        />
      </SpacingView>
    </ScrollView>
  );
};

const Personal = () => {
  return (
    <ScrollView>
      <SpacingView>
        <Gap height={20} />
        <ListPesan
          pesan="Halo kawan kawan "
          nama="Nama Mahasiswa"
          waktu="07:00"
          mode="personal"
        />
        <Gap height={15} />
        <ListPesan
          pesan="Halo kawan kawan"
          mode="personal"
          nama="Nama Mahasiswa"
          waktu="07:00"
        />
        <Gap height={15} />
        <ListPesan
          pesan="Halo kawan kawan"
          mode="personal"
          nama="Nama Mahasiswa"
          waktu="07:00"
        />
      </SpacingView>
    </ScrollView>
  );
};
const Group = () => {
  return (
    <ScrollView>
      <SpacingView>
        <Gap height={20} />
        <ListPesan pesan="Halo kawan kawan" nama="Nama Group" waktu="07:00" />
        <Gap height={15} />
        <ListPesan pesan="Halo kawan kawan" nama="Nama Group" waktu="07:00" />
        <Gap height={15} />
        <ListPesan pesan="Halo kawan kawan" nama="Nama Group" waktu="07:00" />
      </SpacingView>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  semua: All,
  personal: Personal,
  group: Group,
});

export default function TabViewMessages() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'semua', title: 'Semua'},
    {key: 'personal', title: 'Personal'},
    {key: 'group', title: 'Group'},
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
