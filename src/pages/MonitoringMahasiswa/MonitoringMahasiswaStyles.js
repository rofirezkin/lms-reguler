import styled from 'styled-components/native';

export const Title = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.primary[700]};
  color: ${props => props.theme.colors.text.primary};
  letter-spacing: 0.5px;
`;
