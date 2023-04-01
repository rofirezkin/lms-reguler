import styled from 'styled-components/native';

export const DateView = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  padding-vertical: 8px;
  padding-horizontal: 16px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  align-self: flex-start;
`;

export const TextView = styled.Text`
  font-family: ${props => props.theme.fonts.primary[600]};
  font-size: 13px;
  color: ${props => props.theme.colors.text.inverse};
`;
