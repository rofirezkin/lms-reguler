import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeArea} from '../../utils/theme/area';
import {Gap} from '../../components';
import {Button} from 'react-native-paper';
import {ScrollView, SpacingView} from '../../utils';

const ImageMapping = ({route, navigation}) => {
  const params = route.params;
  console.log('param daata', params);
  return (
    <SafeArea>
      <ScrollView>
        <SpacingView>
          <Text>ImageMapping</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {params.map((res, index) => {
              return (
                <Image
                  key={`image-${index}`}
                  source={{uri: res}}
                  style={{width: 100, height: 130}}
                />
              );
            })}
          </View>
          <Gap height={20} />
          <Button
            contentStyle={{backgroundColor: 'green'}}
            mode="contained"
            onPress={() =>
              navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
            }>
            Home
          </Button>
        </SpacingView>
      </ScrollView>
    </SafeArea>
  );
};

export default ImageMapping;
