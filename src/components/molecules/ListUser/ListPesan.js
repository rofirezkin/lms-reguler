import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';
import {Text} from '../../atoms/typography/text.component';
import {AvatarGroup, AvatarProfileMahasiswa} from '../../../assets/dummy';
import {useNavigation} from '@react-navigation/native';
import {RowView} from '../../../utils';

const ListPesan = ({pesan, nama, waktu, mode}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailMessage')}>
      <RowView justifyContent listUser>
        <RowView flexdata>
          {mode === 'personal' ? (
            <Image
              style={{width: 42, height: 42}}
              source={AvatarProfileMahasiswa}
            />
          ) : (
            <Image style={{width: 42, height: 42}} source={AvatarGroup} />
          )}

          <Gap width={14} />
          <View style={{flex: 1}}>
            <Text variant="body">{nama}</Text>
            {pesan && <Text variant="caption">Anda : {pesan} ....</Text>}
          </View>
        </RowView>

        {pesan && (
          <View>
            <Text variant="caption">{waktu}</Text>
          </View>
        )}
      </RowView>
    </TouchableOpacity>
  );
};

export default ListPesan;

const styles = StyleSheet.create({
  penilaian: penilaian => ({
    flex: penilaian !== '' ? 1 : 0,
  }),
});
