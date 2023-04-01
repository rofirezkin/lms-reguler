import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../utils';
import {TouchableOpacity} from 'react-native';

export const BgCircle1 = styled.Image`
  position: absolute;
  bottom: 0;
  height: 40%;
  width: 100%;
`;

export const BgCircle2 = styled.Image`
  width: 145px;
  height: 206px;
  position: absolute;
`;

export const BgCircle3 = styled.Image`
  position: absolute;
  right: 0;
  width: 150px;
  height: 335px;
  top: 20%;
`;

export const Icon = styled.View`
  align-self: flex-end;
  margin-right: 10%;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: white;
`;

export const BgGradient = styled(LinearGradient).attrs({
  colors: [theme.colors.bg.primary, theme.colors.bg.secondary],
})`
  height: 60%;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
`;

export const BgRing1 = styled.Image`
  position: absolute;
  right: 10px;
  width: 120px;
  height: 120px;
  top: 25%;
`;

export const LoginCard = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
`;

export const Card = styled.View`
  align-self: stretch;
  margin-horizontal: 34px;
  border-radius: 20px;
  padding: 20px;
  top: 30%;
  background-color: white;
`;

export const Header = styled.Text`
  font-family: ${props => props.theme.fonts.primary[700]};
  font-size: 30px;
  padding-top: 27px;
  text-align: center;
  color: #353535;
`;

export const Title = styled.Text`
  padding-left: 22px;
  font-family: ${props => props.theme.fonts.primary[600]};
  color: #353535;
  font-size: 15px;
  padding-bottom: 5px;
`;
export const Link = styled.Text`
  font-family: ${props => props.theme.fonts.primary[600]};
  color: #353535;
  font-size: 13px;
  margin-top: 10px;
  text-align: right;
`;

export const ButtonLogin = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonFingerprint = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
}))`
  justify-content: center;
  margin-left: 20px;
`;
