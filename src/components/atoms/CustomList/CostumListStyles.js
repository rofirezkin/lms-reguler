import styled from 'styled-components/native';
import {css} from 'styled-components';
import {TouchableOpacity} from 'react-native';

export const ViewNotif = styled.View`
  background-color: ${props => props.theme.colors.bg.error};
  border-radius: 20px;
  padding-vertical: 4px;
  padding-horizontal: 9px;
`;

export const TextNotif = styled.Text`
  color: ${props => props.theme.colors.text.inverse};
`;

export const LabelList = styled.View`
  border-bottom-color: ${props => props.theme.colors.bg.border};
  padding-bottom: 13px;
  border-bottom-width: 3px;
  margin-bottom: 20px;
  ${props =>
    props.row &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}
`;

export const LabelText = styled.Text`
  font-family: ${props => props.theme.fonts.primary[700]};
  font-size: 12px;
  color: ${props => props.theme.colors.text.primary};
`;

export const TimeText = styled.Text`
  font-family: ${props => props.theme.fonts.primary[400]};
  font-size: 12px;
  margin-top: 10px;
  margin-left: 20px;
`;

export const LabelWithBackgrounView = styled.View`
  background-color: ${props => props.theme.colors.bg.error};
  padding-vertical: 2px;
  padding-horizontal: 20px;
  border-radius: 15px;
`;

export const LabelTextBackground = styled.Text`
  color: ${props => props.theme.colors.text.inverse};
  font-size: 12px;
  font-family: ${props => props.theme.fonts.primary[400]};
`;

export const ListPlanView = styled.View`
  position: absolute;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 10px;
  height: 100%;
  flex: 1;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const ListDefaultButton = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
}))`
  border-bottom-color: ${props => props.theme.colors.bg.border};
  border-bottom-width: 2px;
  padding-bottom: 19px;
  margin-top: 19px;
`;

export const RightView = styled.View`
  flex: 1;
  align-self: center;
  align-items: flex-end;
  ${props =>
    props.listSemester &&
    css`
      padding-right: 15px;
    `}
`;

export const ListSemesterView = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  width: 15px;
  height: 40px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
`;
