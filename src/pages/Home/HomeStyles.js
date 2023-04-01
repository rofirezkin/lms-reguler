import styled from 'styled-components/native';

export const LabelTimeline = styled.View`
  background-color: ${props => props.theme.colors.bg.section};
  height: 5px;
  position: relative;
  top: 50%;
  margin-horizontal: -26px;
`;

export const TitleTimeline = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${props => props.theme.colors.text.primary};
  background-color: white;
  align-self: center;
  padding-horizontal: 30px;
`;

export const CourseView = styled.View`
  background-color: ${props => props.theme.colors.bg.white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
