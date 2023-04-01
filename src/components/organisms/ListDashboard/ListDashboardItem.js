import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {ICSmallCourse, ICSmallItem} from '../../../assets/icon';
import {ScrollView} from '../../../utils';
import {Gap} from '../../atoms';
import {Text} from '../../atoms/typography/text.component';
import {BoxView, LabelView} from './ListDashboardStyles';
import React from 'react';

const ListDashboardItem = ({label, caption, header}) => {
  console.log('label ', label);
  const {items} = useSelector(state => state.dasborReducer);

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
            {items.map((res, index) => {
              return (
                <View key={res.id}>
                  <Text variant="label">{res.title}</Text>
                  <Text variant="caption">{res.aksesTerakhir}</Text>
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

export default ListDashboardItem;
