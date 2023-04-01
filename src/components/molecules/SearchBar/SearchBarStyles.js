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
