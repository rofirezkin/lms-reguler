import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

import {AvatarProfileDosen} from '../../../assets/dummy';
import Gap from '../Gap/Gap';
import {TouchableOpacity} from 'react-native';
import {ICNext} from '../../../assets/icon';
import {Text} from '../typography/text.component';
import {RowView} from '../../../utils';

const ProfileUser = ({onPress, name, kode}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <RowView justifyContent listUser>
        <RowView>
          <Image source={AvatarProfileDosen} style={styles.avatar} />
          <Gap width={10} />
          <View>
            <Text variant="headerProfile">{name}</Text>
            <Text variant="caption">KODE DOSEN</Text>
            <Text variant="caption">{kode}</Text>
          </View>
        </RowView>
        <View style={styles.next}>
          <ICNext />
        </View>
      </RowView>
    </TouchableOpacity>
  );
};

export default ProfileUser;

const styles = StyleSheet.create({
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 84 / 2,
  },
  next: {justifyContent: 'center'},
});
