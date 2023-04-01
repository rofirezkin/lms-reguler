import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {css} from 'styled-components';
import normalize from 'react-native-normalize';
export const TabBarView = styled.View`
  flex-direction: row;
  justify-content: space-around;

  background-color: ${props => props.theme.colors.bg.white};
  shadow-color: ${props => props.theme.colors.bg.secondary};
  shadow-offset: 1px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  elevation: 2;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.primary[600]};
  color: ${props => props.theme.colors.text.primary};
  font-size: 12px;
`;

export const TouchableView = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
}))`
  height: 100%;
  height: 40px;
  justify-content: center;

  ${props =>
    props.active === true &&
    css`
      border-bottom-color: ${props.theme.colors.bg.section};
      border-bottom-width: 3px;
    `}
`;
// shadow-color: '#000';
// shadow-offset: {width: 1px, height: 1px}
// shadow-opacity: 0.4px;
// shadow-radius: 3px;
// elevation: 5px;

export const TabBarQuizView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 8px;
`;

export const TitleQuiz = styled.Text`
  font-family: ${props => props.theme.fonts.primary[600]};
  color: ${props => props.theme.colors.text.inverse};
  font-size: ${normalize(12)}px;
  text-align: center;
  ${props =>
    props.active === true &&
    css`
      color: ${props.theme.colors.text.primary};
    `}
`;

export const TouchableQuiz = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
  disabled: props.disabled,
}))`
  height: ${normalize(35)}px;
  width: ${normalize(35)}px;
  border-radius: ${normalize(35 / 2)}px;
  justify-content: center;

  border-width: 1px;
  border-color: ${props => props.theme.colors.text.inverse};

  ${props =>
    props.active === true &&
    css`
      background-color: ${props.theme.colors.bg.white};
    `}
  ${props =>
    props.disabled === true &&
    css`
      background-color: ${props.theme.colors.text.disabled};
    `}
`;
