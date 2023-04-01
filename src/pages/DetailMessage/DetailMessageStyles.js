import styled from 'styled-components/native';

export const BorderScroll = styled.View`
  background-color: #f2f2f2;
  width: 50px;
  height: 5px;

  align-self: center;
  margin: 20px;
`;

export const ChattingView = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.bg.white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const BgChattingView = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const TextDate = styled.Text`
  font-size: 11px;
  font-weight: 400;
  color: ${props => props.theme.colors.text.disabled};
  margin-vertical: 20px;
  text-align: center;
`;
