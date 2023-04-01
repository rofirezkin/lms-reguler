import {TouchableOpacity} from 'react-native';
import {css} from 'styled-components';
import styled from 'styled-components/native';

export const SearchBarCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.bg.primary};
  padding-horizontal: 26px;
  padding-vertical: 16px;
`;

export const IconView = styled.View`
  justify-content: center;
`;
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
