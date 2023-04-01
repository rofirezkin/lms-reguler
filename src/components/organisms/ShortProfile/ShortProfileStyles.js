import styled from 'styled-components/native';

export const ShortProfileCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: 26px;
`;

export const IconView = styled.View`
  justify-content: center;
`;

export const TextTitle = styled.Text`
  font-family: ${props => props.theme.fonts.primary[600]};
  font-size: 24px;
  color: ${props => props.theme.colors.text.primary};
`;
export const TextSubTitle = styled.Text`
  font-family: ${props => props.theme.fonts.primary[400]};
  font-size: 10px;
  color: ${props => props.theme.colors.text.primary};
`;

export const CenterView = styled.View`
  justify-content: center;
  padding-right: 10px;
`;
