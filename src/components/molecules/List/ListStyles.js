import styled from 'styled-components/native';
import {Image, TouchableOpacity} from 'react-native';
import {css} from 'styled-components';

export const TimelineCard = styled(TouchableOpacity)`
  flex-direction: row;
  padding-vertical: 9px;
  justify-content: space-between;
  padding-horizontal: 10px;
  border-radius: 20px;
  margin-top: 26px;
  background-color: ${props => props.theme.colors.bg.white};
  shadow-color: ${props => props.theme.colors.bg.secondary};
  shadow-offset: 1px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  elevation: 10;
`;

export const ListMateriView = styled(TouchableOpacity)`
  flex-direction: row;
  padding-vertical: 9px;
  justify-content: space-between;
  padding-horizontal: 10px;
  border-radius: 20px;

  background-color: ${props => props.theme.colors.bg.white};
  shadow-color: ${props => props.theme.colors.bg.secondary};
  shadow-offset: 1px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  elevation: 10;
`;

export const IconCard = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  padding-vertical: 18px;
  padding-horizontal: 14px;
  border-radius: 15px;
  ${props =>
    props.listMateri &&
    css`
      padding: 10px;
      border-radius: 30px;
    `}
`;

export const TextContainer = styled.View`
  padding-left: 8px;
  justify-content: center;
  flex: 1;
`;

export const TextHeader = styled.Text`
  font-family: ${props => props.theme.fonts.primary[600]};
  font-size: 12px;

  ${props =>
    props.header &&
    css`
      font-size: 14px;
    `}
`;

export const TextBody = styled.Text`
  font-family: ${props => props.theme.fonts.primary[600]};
  font-size: 10px;
  padding-top: 5px;
  color: ${props => props.theme.colors.text.primary};
`;

export const DetailView = styled.View`
  padding-vertical: 25px;
  border-bottom-width: 3px;
  border-color: ${props => props.theme.colors.bg.border};
`;

// deskripsi style

export const DeskripsiView = styled.View`
  padding: 17px;
  border-left-color: ${props => props.theme.colors.bg.section};
  border-left-width: 8px;
  border-radius: 25px;
  background-color: ${props => props.theme.colors.bg.list};
  border-radius: 25px;
`;

export const DekripsiText = styled.Text`
  text-align: justify;
  font-family: ${props => props.theme.fonts.primary[400]};
  color: ${props => props.theme.colors.text.secondary};
  letter-spacing: 0.7px;
`;

export const IconView = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: 10px;
  border-radius: 10px;
`;

export const DeskripsiBalasanView = styled.View`
  padding: 17px;
  width: 93%;

  border-radius: 25px;
  background-color: ${props => props.theme.colors.bg.list};
  border-radius: 25px;
  align-self: flex-end;
`;

export const CardView = styled.View`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: ${props => props.theme.colors.bg.section};
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const AvatarView = styled(Image).attrs(props => ({
  source: props.source,
}))`
  width: 33px;
  height: 33px;
`;

export const HeaderTitle = styled.View`
  justify-content: center;
`;

export const IconArrow = styled.View`
  justify-content: center;
  padding: 5px;
`;

export const DateView = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  position: absolute;
  align-self: flex-end;
  padding: 5px;
  padding-horizontal: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 20px;
`;
