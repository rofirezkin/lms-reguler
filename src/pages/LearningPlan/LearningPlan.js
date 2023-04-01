import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {SafeArea} from '../../utils/theme/area';
import {CostumListPlan, Gap, Header} from '../../components';

import {RingAtas, RingBawah} from '../../assets/background';
import {
  BgViewBottom,
  BgViewTop,
  HeaderStyle,
  Label,
} from './LearningPlanStyles';

import DropDownPicker from 'react-native-dropdown-picker';
import {Text} from '../../components/atoms/typography/text.component';
import {selectSemester} from '../../Constant';
import {ScrollView, SpacingView} from '../../utils';

const LearningPlan = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <SafeArea>
      <ScrollView>
        <Header
          green={true}
          title="Learning Plan"
          onPress={() => navigation.goBack()}
        />
        <Gap height={25} />
        <SpacingView>
          <HeaderStyle>
            <BgViewTop source={RingAtas} />
            <BgViewBottom source={RingBawah} />
            <Label>PROGRAM STUDI</Label>
          </HeaderStyle>
          <Gap height={30} />
          <Text>Pilihan Semester</Text>
          <Gap height={15} />
          <View style={styles.inputContainer}>
            <DropDownPicker
              placeholder="Pilih Semester"
              listMode="SCROLLVIEW"
              style={styles.inputButton}
              dropDownContainerStyle={{
                borderColor: 'white',
              }}
              open={open}
              value={value}
              items={selectSemester}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
          <Gap height={30} />
          <Text variant="label">Mata Kuliah</Text>
          <Gap height={6} />
          <CostumListPlan />
          <Gap height={20} />
          <CostumListPlan />
          <Gap height={20} />
          <CostumListPlan />
          <Gap height={20} />
          <CostumListPlan />
          <Gap height={20} />
          <CostumListPlan />
        </SpacingView>
      </ScrollView>
    </SafeArea>
  );
};

export default LearningPlan;

const styles = StyleSheet.create({
  inputButton: {borderColor: 'white', borderRadius: 15},
  inputContainer: {
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 999,
    borderRadius: 15,
    elevation: 5,
  },
});
