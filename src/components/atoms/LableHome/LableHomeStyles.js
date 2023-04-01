import styled from 'styled-components/native';
export const LableText = styled.Text`
  font-family: ${props => props.theme.fonts.primary[700]};
  font-size: 16px;
  color: ${props => props.theme.colors.text.primary};
`;
export const LableStyle = styled.View`
  position: absolute;

  left: -10px;
`;

export const IconView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconNext = styled.View`
  flex: 1;
  padding-left: 20px;
`;
