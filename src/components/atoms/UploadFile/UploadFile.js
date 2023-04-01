import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

import Gap from '../Gap/Gap';
import {AvatarImage} from '../../../assets/dummy';

import {Text} from '../typography/text.component';
import {RowView} from '../../../utils';

const UploadFile = ({namaFile, ukuranFile, date}) => {
  return (
    <View style={{marginBottom: 20}}>
      <RowView justifyContent listUser>
        <RowView flexdata>
          <Image source={AvatarImage} style={styles.avatar} />
          <Gap width={14} />
          <View style={{flex: 1}}>
            <Text variant="body">{namaFile}</Text>
            <Text variant="hint">{ukuranFile}</Text>
            <Text variant="hint">{date}</Text>
          </View>
        </RowView>
      </RowView>
    </View>
  );
};

export default UploadFile;

const styles = StyleSheet.create({
  avatar: {width: 30, height: 40},
});
