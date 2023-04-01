import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const ButtonBack = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
}))`
  margin-left: -26px;
  padding-horizontal: 20px;
  padding-vertical: 5px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${props => props.theme.colors.bg.primary};
  align-self: flex-start;
  margin-bottom: 15px;
`;
export const IconView = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: 10px;
  border-radius: 10px;
`;
export const AvatarView = styled(Image).attrs(props => ({
  source: props.source,
}))`
  width: 33px;
  height: 33px;
`;

export const DateView = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  position: absolute;
  align-self: flex-end;
  padding: 5px;
  padding-horizontal: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 20px;
`;

export const FeedbackView = styled.View`
  padding: 17px;
  background-color: ${props => props.theme.colors.bg.list};
  border-radius: 25px;
`;

export const DekripsiText = styled.Text`
  text-align: justify;
  font-family: ${props => props.theme.fonts.primary[400]};
  color: ${props => props.theme.colors.text.secondary};
  letter-spacing: 0.7px;
`;

export const HeaderTitle = styled.View`
  justify-content: center;
`;
