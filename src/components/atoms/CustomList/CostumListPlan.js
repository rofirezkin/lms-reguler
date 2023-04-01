import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Text} from '../typography/text.component';
import {ListPlanView} from './CostumListStyles';
import {colors} from '../../../utils';

const CostumListPlan = () => {
  return (
    <View style={styles.bgList}>
      <ListPlanView />

      <View>
        <Text variant="header">Nama Mata Kuliah</Text>
        <Text variant="caption">KODE MATKUL</Text>
      </View>
      <Text>4 SKS</Text>
    </View>
  );
};

export default CostumListPlan;

const styles = StyleSheet.create({
  bgList: {
    backgroundColor: colors.bg.white,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 15,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    padding: 21,
  },
});
