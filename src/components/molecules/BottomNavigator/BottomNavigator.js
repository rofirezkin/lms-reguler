import React from 'react';
import {StyleSheet, View} from 'react-native';

import {TabItem} from '../../atoms';

const BottomNavigator = ({state, descriptors, navigation}) => {
  const data = [state.routes[1], state.routes[0], state.routes[2]];

  let dataindex;
  if (state.index === 0) {
    dataindex = 1;
  } else if (state.index === 1) {
    dataindex = 0;
  } else if (state.index === 2) {
    dataindex = 2;
  }
  return (
    <View style={styles.container}>
      {data.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = dataindex === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            title={label}
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 48,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    bottom: 25,
    right: 32,
    height: 62,
    left: 32,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
