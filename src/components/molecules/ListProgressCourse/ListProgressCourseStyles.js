import styled from 'styled-components/native';
import {css} from 'styled-components';
export const ListProgressView = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};

  border-radius: 22px;
  padding: 21px;
  ${props =>
    props.scroll === true &&
    css`
      width: 220px;
    `}
`;

export const HeaderText = styled.Text`
  color: ${props => props.theme.colors.text.inverse};
  font-family: ${props => props.theme.fonts.primary[500]};
  font-size: 10px;
`;

export const PersentasiText = styled.Text`
  color: ${props => props.theme.colors.text.inverse};
  font-family: ${props => props.theme.fonts.primary[700]};
  font-size: 12px;
`;

export const FlexViewEnd = styled.View`
  align-self: flex-end;
`;

export const ContenBoxText = styled.Text`
  font-family: ${props => props.theme.fonts.primary[600]};
  color: white;
  font-size: 15px;
`;

export const SubContentText = styled.Text`
  font-family: ${props => props.theme.fonts.primary[600]};
  color: white;
  font-size: 10px;
`;
