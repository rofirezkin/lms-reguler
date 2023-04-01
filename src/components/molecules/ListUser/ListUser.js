import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {Gap} from '../../atoms';
import {Text} from '../../atoms/typography/text.component';
import {RowStatus, StatusText, StatusUser} from './ListUserStyles';
import {ICNext} from '../../../assets/icon';
import {AvatarProfileMahasiswa} from '../../../assets/dummy';
import {PositionView, RowView} from '../../../utils';

const ListUser = ({status, nilai, penilaian, akses, onPress, nextButton}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <RowView justifyContent listUser>
        <RowView flexdata>
          <Image
            style={{width: 42, height: 42}}
            source={AvatarProfileMahasiswa}
          />

          <Gap width={14} />
          <View style={styles.penilaian(penilaian)}>
            <Text variant="body">Nama Mahasiswa</Text>

            {nilai && (
              <>
                <Gap height={10} />
                <RowStatus>
                  <StatusUser status={status}>
                    <StatusText>{status}</StatusText>
                  </StatusUser>
                  <StatusUser />
                </RowStatus>
              </>
            )}

            {akses && <Text variant="caption">Akses Terakhir : {akses}</Text>}

            {penilaian && (
              <>
                <Gap height={10} />
                <RowStatus>
                  <StatusUser status={status}>
                    <StatusText>{status}</StatusText>
                  </StatusUser>
                  <StatusUser status={penilaian}>
                    <StatusText>{penilaian}</StatusText>
                  </StatusUser>
                </RowStatus>
              </>
            )}
          </View>
        </RowView>
        {nilai && (
          <PositionView>
            <Text variant="header">{nilai}</Text>
          </PositionView>
        )}
        {nextButton && (
          <PositionView>
            <ICNext />
          </PositionView>
        )}
      </RowView>
    </TouchableOpacity>
  );
};

export default ListUser;

const styles = StyleSheet.create({
  penilaian: penilaian => ({
    flex: penilaian !== '' ? 1 : 0,
  }),
});
