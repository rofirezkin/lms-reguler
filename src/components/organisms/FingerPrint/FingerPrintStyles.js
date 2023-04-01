import {Image} from 'react-native';
import styled from 'styled-components/native';

export const Title = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.primary[700]};
  font-size: 20px;
`;

export const BiometricImage = styled(Image).attrs(props => ({
  source: props.source,
}))`
  width: 110px;
  height: 110px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.primary[500]};
  font-size: 12px;
`;

export const ContainerContent = styled.View`
  flex: 1;
  margin-top: 100%;
  padding: 50px;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const ContainerHeader = styled.View`
  flex: 1;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const Content = styled.View`
  align-self: center;
`;
