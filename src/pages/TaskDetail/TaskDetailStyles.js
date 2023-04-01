import styled from 'styled-components/native';

export const HeaderCardVIew = styled.View`
  align-items: center;
  flex-direction: row;

  border-radius: 40px;
  align-self: center;
  padding-horizontal: 47px;
  padding-vertical: 10px;
  background-color: ${props => props.theme.colors.bg.white};
  shadow-color: ${props => props.theme.colors.bg.secondary};
  shadow-offset: 1px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  elevation: 10;
`;

export const TimelineView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const DateCardView = styled.View`
  margin-top: 13px;
  flex-direction: row;
  background-color: ${props => props.theme.colors.bg.list};
  justify-content: space-between;
  padding: 20px;
  border-radius: 15px;
`;

export const ItemView = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const TextDate = styled.Text`
  font-family: ${props => props.theme.fonts.primary[400]};
  font-size: 12px;
  flex: 1;
  color: ${props => props.theme.colors.text.primary};
`;

export const TextDateDeadline = styled.Text`
  font-family: ${props => props.theme.fonts.primary[700]};
  font-size: 12px;
  flex: 1;
  color: ${props => props.theme.colors.text.primary};
`;
