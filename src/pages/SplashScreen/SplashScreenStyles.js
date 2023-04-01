import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../utils';

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
