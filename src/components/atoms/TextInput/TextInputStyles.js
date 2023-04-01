import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const LoginBoxView = styled.View`
  flex-direction: row;
  border-radius: 20px;
  height: 50px;
  background-color: ${props => props.theme.colors.bg.list};
`;
export const IconView = styled.View`
  justify-content: center;
  padding-horizontal: 10px;
`;

export const InputView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
  height: 50px;
  padding-horizontal: 15px;
  background-color: ${props => props.theme.colors.bg.list};
`;

export const IconTouchable = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
}))`
  justify-content: center;
  padding-horizontal: 10px;
`;
