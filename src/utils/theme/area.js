import {
  StatusBar,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native';

import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  ${props => (props.quiz ? '' : 'flex:1')}
  ${Platform === 'ios' &&
  StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px;`}

  background-color: ${props =>
    props.quiz ? 'transparent' : props.theme.colors.bg.white};
`;

export const ButttonView = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
}))`
  position: absolute;
  right: 20px;
  bottom: 30px;
`;
