import {View} from 'react-native';
import React from 'react';
import {ICComment, ICLikeActive} from '../../../assets/icon';

import {Gap} from '../../atoms';
import {AvatarProfileMahasiswa} from '../../../assets/dummy';
import {Text} from '../../atoms/typography/text.component';
import {
  AvatarView,
  CardView,
  DateView,
  DekripsiText,
  DeskripsiBalasanView,
  HeaderTitle,
} from './ListStyles';
import {colors, RowView} from '../../../utils';

const ListBalasanForum = ({title, deskripsi, date, mode, feedback, name}) => {
  return (
    <DeskripsiBalasanView>
      <CardView />
      {feedback === true ? (
        <>
          <DateView>
            <Text
              variant="hint"
              style={{textAlign: 'right', color: colors.text.inverse}}>
              5 Hari yang lalu
            </Text>
          </DateView>
          <Gap height={10} />
        </>
      ) : (
        <Text variant="hint" style={{textAlign: 'right'}}>
          {date}
        </Text>
      )}
      <RowView>
        <AvatarView source={AvatarProfileMahasiswa} />
        <Gap width={15} />

        <HeaderTitle>
          <Text variant="body">{title}</Text>
        </HeaderTitle>
      </RowView>
      <Gap height={11} />

      <View>
        <DekripsiText>{deskripsi}</DekripsiText>
        {feedback === false && (
          <>
            {mode === 'forum' && (
              <RowView center rightPositions>
                <ICLikeActive />
                <Gap width={5} />
                <Text>12</Text>
                <Gap width={15} />
                <ICComment />
                <Gap width={5} />
                <Text variant="body">12</Text>
              </RowView>
            )}
          </>
        )}
      </View>
    </DeskripsiBalasanView>
  );
};

export default ListBalasanForum;
