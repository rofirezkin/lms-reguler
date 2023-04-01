import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const ButttonView = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
}))`
  position: absolute;
  right: 20px;
  bottom: 30px;
`;
