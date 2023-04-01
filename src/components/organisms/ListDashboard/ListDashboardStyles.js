import styled from 'styled-components/native';

export const LabelView = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.colors.bg.primary};
  padding: 8px;
  align-self: flex-start;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  z-index: 1;
`;

export const BoxView = styled.View`
    margin-top: -10px
  background-color: ${props => props.theme.colors.bg.white};
  margin-left: 15px;
  padding: 20px;
  background-color: ${props => props.theme.colors.bg.white};
  shadow-color: ${props => props.theme.colors.bg.secondary};
  shadow-offset: 1px 4px;
  shadow-opacity: 0.4;
  shadow-radius: 3px;
  elevation: 10;
  border-radius: 20px;
  height: 200px;
`;
