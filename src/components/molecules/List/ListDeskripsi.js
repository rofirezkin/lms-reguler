import {Image, View} from 'react-native';
import React from 'react';
import {ICComment, ICLikeActive, ICPemberitahuan} from '../../../assets/icon';

import {Gap} from '../../atoms';
import {AvatarProfileMahasiswa} from '../../../assets/dummy';
import {Text} from '../../atoms/typography/text.component';
import {
  AvatarView,
  DekripsiText,
  DeskripsiView,
  HeaderTitle,
  IconView,
} from './ListStyles';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {RowView} from '../../../utils';

const ListDeskripsi = ({title, icon, deskripsi, date, mode, name, onPress}) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const Icon = () => {
    if (mode === 'forum' || mode == 'forum-detail') {
      return <AvatarView source={AvatarProfileMahasiswa} />;
    } else {
      return (
        <IconView>
          <ICPemberitahuan />
        </IconView>
      );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <DeskripsiView>
        <Text variant="hint" style={{textAlign: 'right'}}>
          {date}
        </Text>
        <RowView>
          <Icon />
          <Gap width={15} />

          <HeaderTitle>
            <Text variant="body">{title}</Text>
            {mode === 'forum' && <Text variant="hint">{name}</Text>}
          </HeaderTitle>
        </RowView>
        <Gap height={11} />
        <View>
          <DekripsiText>{deskripsi}</DekripsiText>
          {mode === 'forum' ||
            (mode === 'forum-detail' && (
              <RowView center rightPositions>
                <ICLikeActive />
                <Gap width={5} />
                <Text>12</Text>
                <Gap width={15} />
                <ICComment />
                <Gap width={5} />
                <Text variant="body">12</Text>
              </RowView>
            ))}
        </View>
      </DeskripsiView>
    </TouchableOpacity>
  );
};

export default ListDeskripsi;
