import styled from 'styled-components/native';
import {css} from 'styled-components';
import {TouchableOpacity} from 'react-native';

export const DetailListView = styled.View`
  margin-left: 15px;
  background-color: ${props => props.theme.colors.bg.list};
  border-radius: 15px;
  padding: 15px;
  ${props =>
    props.detailSemester &&
    css`
      margin-top: 10px;
    `}
`;

export const ButtonList = styled(TouchableOpacity).attrs(props => ({
  onPress: props.onPress,
}))`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
`;

export const IconView = styled.View`
  justify-content: center;
`;

export const CardMateriView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  border-bottom-color: #efefef;
  border-bottom-width: 2px;
  margin-bottom: 12px;
`;
