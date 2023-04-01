import styled from 'styled-components/native';
import {Image} from 'react-native';

export const HeaderStyle = styled.View`
  back-groundcolor: white;
  padding: 26px;
  border-radius: 25px;
  background-color: ${props => props.theme.colors.bg.white};
  shadow-color: ${props => props.theme.colors.bg.secondary};
  shadow-offset: 1px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
  margin-horizontal: 10px;
`;

export const BgViewBottom = styled(Image).attrs(props => ({
  source: props.source,
}))`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 40px;
  height: 29px;
`;

export const BgViewTop = styled(Image).attrs(props => ({
  source: props.source,
}))`
  position: absolute;
  width: 35px;
  height: 29px;
`;

export const Label = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.primary[700]};
  font-size: 17px;
`;

export const DropDownView = styled.View`
  border-color: white;
  background-color: ${props => props.theme.colors.bg.white};
  shadow-color: ${props => props.theme.colors.bg.secondary};
  shadow-offset: 1px 1px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;
