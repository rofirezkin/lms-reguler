import {Image} from 'react-native';
import styled from 'styled-components/native';

export const BgView1 = styled(Image).attrs(props => ({
  source: props.source,
}))`
  position: absolute;
  right: 0;
  width: 150px;
  height: 250px;
`;

export const BgView2 = styled(Image).attrs(props => ({
  source: props.source,
}))`
  position: absolute;
  bottom: 0;
  width: 170px;
  height: 200px;
`;

export const PositionProfileView = styled.View`
  align-self: center;
`;

export const AvatarView = styled(Image).attrs(props => ({
  source: props.source,
}))`
  width: 84px;
  height: 84px;
  border-radius: ${84 / 2}px;
`;
export const Title = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.primary[600]};
  font-size: 20px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.primary[400]};
  font-size: 12px;
`;

export const BgProfileTopImage = styled(Image).attrs(props => ({
  source: props.source,
}))`
  position: absolute;
  right: 0px;
  width: 150px;
  height: 250px;
`;

export const BgProfileBottomImage = styled(Image).attrs(props => ({
  source: props.source,
}))`
  position: absolute;
  bottom: 0px;
  width: 170px;
  height: 200px;
`;

export const BorderTop = styled.View`
  border-bottom-color: ${props => props.theme.colors.bg.border};
  border-bottom-width: 2px;
`;
