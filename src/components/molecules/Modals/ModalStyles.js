import styled from 'styled-components/native';
import {css} from 'styled-components';
import {TouchableOpacity} from 'react-native';

export const TitleQuiz = styled.Text`
  font-family: ${props => props.theme.fonts.primary[600]};
  color: ${props => props.theme.colors.text.primary};
  font-size: 12px;
  text-align: center;
  ${props =>
    props.active === true &&
    css`
      color: ${props.theme.colors.text.inverse};
    `}
`;

export const TouchableQuiz = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
  disabled: props.disabled,
}))`
  height: 40px;
  width: 40px;
  border-radius: ${40 / 2}px;
  justify-content: center;
  margin-top: 20px;

  border-width: ${props => (props.active ? '0px' : '4px')};
  border-color: ${props => props.theme.colors.bg.border};

  ${props =>
    props.active === true &&
    css`
      background-color: ${props.theme.colors.bg.primary};
    `}
  ${props =>
    props.disabled === true &&
    css`
      background-color: ${props.theme.colors.text.disabled};
    `}
`;

export const IndicatorCurrentView = styled.View`
  background-color: ${props => props.theme.colors.bg.section};
  height: 20px;
  width: 20px;
  border-radius: ${20 / 2}px;
  position: absolute;
  bottom: -5px;
  right: -5px;
`;
