import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {ScrollView as Scroll} from 'react-native';
import {css} from 'styled-components';
import {colors} from './colors';

export const ScrollView = styled(Scroll).attrs({
  contentContainerStyle: {flexGrow: 1},
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  nestedScrollEnabled: true,
})`
  flex: 1;
  background-color: white;
`;

export const BgCircle2 = styled.Image`
  position: absolute;
  right: 0;
  width: 150px;
  height: 340px;
  top: 20%;
`;

export const BgCircle3 = styled.Image`
  position: absolute;
  bottom: 0;
  width: 230px;
  height: 200px;
`;

export const Icon = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BgGradient = styled(LinearGradient).attrs({
  colors: [colors.bg.primary, colors.bg.secondary],
})`
  flex: 1;
`;

export const SpacingView = styled.View`
  margin-horizontal: 26px;

  ${props =>
    props.flexView === true &&
    css`
      flex: 1;
      justify-content: space-between;
    `}
  ${props =>
    props.borderBottom &&
    css`
      padding-bottom: 20px;
      border-bottom-width: 2px;
      border-bottom-color: ${props.theme.colors.bg.border};
    `}
`;

// flex
export const FlexView = styled.View`
  flex: 1;
`;
export const RowView = styled.View`
  flex-direction: row;

  ${props =>
    props.center &&
    css`
      align-items: center;
    `};

  ${props =>
    props.rightPositions &&
    css`
      align-self: flex-end;
    `};

  ${props =>
    props.aroundContent &&
    css`
      justify-content: space-around;
      flex-wrap: wrap;
    `}

  ${props =>
    props.justifyContent &&
    css`
      justify-content: space-between;
    `}
  ${props =>
    props.listUser &&
    css`
      padding: 17px;
      background-color: ${props.theme.colors.bg.list};
      border-radius: 20px;
    `}
    ${props =>
    props.flexdata &&
    css`
      flex: 1;
    `}
`;

export const PositionView = styled.View`
  justify-content: center;
  align-items: flex-end;
`;
