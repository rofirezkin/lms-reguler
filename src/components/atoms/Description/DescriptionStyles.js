import styled from 'styled-components/native';
export const MoreText = styled.Text`
  text-align: right;
  padding-top: 15px;
  font-family: ${props => props.theme.fonts.primary[600]};
  font-size: 12px;
  color: ${props => props.theme.colors.text.primary};
`;

export const DescriptionCardView = styled.View`
  background-color: ${props => props.theme.colors.bg.list};
  padding-vertical: 27px;
  padding-horizontal: 24px;
  border-radius: 15px;
`;

export const DescriptionText = styled.Text`
  font-family: ${props => props.theme.fonts.primary[400]};
  font-size: 14px;
  text-align: justify;
  letter-spacing: 1px;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.primary[600]};
  font-size: 12px;
  margin-bottom: 10px;
`;
