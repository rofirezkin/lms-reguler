import styled from 'styled-components/native';
import {Image, TouchableOpacity} from 'react-native';
import {css} from 'styled-components';
export const HeaderCard = styled.View`
  flex-direction: row;
  padding: 20px;
  align-items: center;
  ${props =>
    props.green === true &&
    !props.transparentBg &&
    css`
      background-color: ${props.theme.colors.bg.primary};
    `}
`;

export const HeaderCardBeranda = styled.View`
  flex-direction: row;
  padding: 20px;

  ${props =>
    props.green === true &&
    css`
      background-color: ${props.theme.colors.bg.primary};
    `}
`;

export const HeaderText = styled.Text`
  padding-left: ${props => (props.beranda === true ? '0px' : '20px')};
  font-family: ${props => props.theme.fonts.primary[600]};
  font-size: 17px;
  ${props =>
    props.beranda === true &&
    css`
      text-align: center;
    `}

  ${props =>
    props.green === true
      ? css`
          color: ${props.theme.colors.text.inverse};
        `
      : css`
          color: ${props.theme.colors.text.primary};
        `}
`;

export const TouchableView = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
}))`
  padding: 10px;
`;

export const SubHeaderText = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.primary[400]};
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
`;

export const TitleView = styled.View`
  flex: 1;
  align-items: ${props => props.align};
`;

export const IconView = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
}))`
  flex: 1;
  align-items: ${props => props.align};
`;

export const AvatarView = styled(Image).attrs(props => ({
  source: props.source,
}))`
  width: 27px;
  height: 27px;
`;
