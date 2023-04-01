import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../utils';
import {TouchableOpacity} from 'react-native';
import normalize from 'react-native-normalize';
import {css} from 'styled-components';

export const BgCircle1 = styled.Image`
  width: 145px;
  height: 206px;
  position: absolute;
`;

export const BgCircle2 = styled.Image`
  position: absolute;
  right: 0;
  width: 150px;
  height: 340px;
  top: 20%;
`;

export const BgCircle3 = styled.Image`
  position: absolute;
  bottom: 0;
  width: 230px;
  height: 200px;
`;

export const Icon = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BgGradient = styled(LinearGradient).attrs({
  colors: [theme.colors.bg.primary, theme.colors.bg.secondary],
})`
  flex: 1;
`;

export const ContentQuiz = styled.View`
position: absolute;
width: 100%;
height: 100%;
}
`;

export const TimerText = styled.Text`
  text-align: center;
  color: ${props => props.theme.colors.text.inverse};
  font-size: 15px;
  font-family: ${props => props.theme.fonts.primary[600]};
`;

export const CardQuizView = styled.View`
  height: 75%;
  background-color: ${props => props.theme.colors.bg.white};
  border-radius: 15px;
`;

export const DescriptionQuizText = styled.Text`
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.primary[500]};
  text-align: justify;
  font-size: ${normalize(15)}px;
  letter-spacing: 1px;
`;

export const OptionText = styled.Text`
  color: ${props =>
    props.active === true
      ? props.theme.colors.text.inverse
      : props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.primary[500]};
  font-size: ${normalize(15)}px;

  ${props =>
    props.active === true &&
    css`
      color: ${props.theme.colors.text.inverse};
    `}
`;

export const OptionButton = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
}))`
    background-color : ${props =>
      props.active ? props.theme.colors.bg.primary : 'transparent'}
  padding: 10px;
  border-radius: 15px;
  border-width:  ${props => (props.active ? '0px' : '3px')}
  border-color: ${props => props.theme.colors.bg.border};
  ${props =>
    props.active === true &&
    css`
      background-color: ${props.theme.colors.bg.primary};
    `}
`;
