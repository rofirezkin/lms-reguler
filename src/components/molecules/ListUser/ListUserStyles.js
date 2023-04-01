import styled from 'styled-components/native';
import {Image} from 'react-native';
import {AvatarProfileMahasiswa} from '../../../assets/dummy';
import {css} from 'styled-components';

export const StatusUser = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};

  border-radius: 10px;
  ${props =>
    props.status === 'Belum Tersubmit' || props.status === 'Belum Dinilai'
      ? css`
          background-color: ${props.theme.colors.bg.error};
        `
      : css`
          background-color: ${props.theme.colors.bg.primary};
        `}
`;
export const StatusText = styled.Text`
  text-align: center;


  padding-horizontal : 15px;
    font-family: ${props => props.theme.fonts.primary[400]}
    font-size : ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.text.inverse};

`;

export const Avatar = styled(Image).attrs({
  source: AvatarProfileMahasiswa,
})`
  width: 42px;
  height: 42px;
  align-self: center;
`;

export const RowStatus = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`;
