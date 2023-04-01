import {View, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {BoxView, LabelView} from './ListDashboardStyles';
import {Gap} from '../../atoms';
import {ICSmallCourse, ICSmallItem} from '../../../assets/icon';
import {Text} from '../../atoms/typography/text.component';

const ListDashboard = ({label, caption, header}) => {
  const {course} = useSelector(state => state.dasborReducer);

  return (
    <View>
      <LabelView>
        {header === 'Course' ? <ICSmallCourse /> : <ICSmallItem />}
        <Gap width={6} />
        <Text variant="smallLabel">{header}</Text>
      </LabelView>

      <BoxView>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={{flexGrow: 1}}>
          <View>
            <Gap width={20} />
            {course.map((res, index) => {
              return (
                <View key={res.id}>
                  <Text variant="label">{res.namaMatakuliah}</Text>
                  <Text variant="caption">{`${res.namaDosen} | ${res.kodeDosen}`}</Text>
                  <Gap height={15} />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </BoxView>
    </View>
  );
};

export default ListDashboard;
