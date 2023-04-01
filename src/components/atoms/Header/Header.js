import React from 'react';
import {
  AvatarView,
  HeaderCard,
  HeaderCardBeranda,
  HeaderText,
  IconView,
  SubHeaderText,
  TitleView,
  TouchableView,
} from './HeaderStyles';
import {ICBack, ICBackWhite, ICBulet, ICContact} from '../../../assets/icon';
import {AvatarMahasiswaWhite} from '../../../assets/dummy';

import Gap from '../Gap/Gap';
import {ICAlarm, ICNavigationQuiz} from '../../../assets/Task';
import {StyleSheet, View} from 'react-native';
import {RowView} from '../../../utils';

const Header = ({
  onPress,
  title,
  green,
  photo,
  beranda,
  subTitle,
  quiz,
  onPressAlarm,
  transparentBg,
  onPressNavigationMenu,
}) => {
  if (beranda === true) {
    return (
      <HeaderCardBeranda green={green}>
        {onPress && (
          <TouchableView onPress={onPress}>
            {green === true ? <ICBackWhite /> : <ICBack />}
          </TouchableView>
        )}

        <TitleView align="center">
          <RowView center>
            <ICBulet />
            <Gap width={15} />
            <HeaderText beranda={true} green={green}>
              {title}
            </HeaderText>
          </RowView>
          <SubHeaderText beranda={true} green={green}>
            {subTitle}
          </SubHeaderText>
        </TitleView>
        <Gap width={35} />
      </HeaderCardBeranda>
    );
  }

  return (
    <HeaderCard green={green} transparentBg={transparentBg}>
      {onPress && (
        <TouchableView onPress={onPress}>
          {green === true ? <ICBackWhite /> : <ICBack />}
        </TouchableView>
      )}
      {photo && <AvatarView source={AvatarMahasiswaWhite} />}
      <View style={styles.viewHeader}>
        <HeaderText green={green}>{title}</HeaderText>
      </View>
      {title === 'Pesan' && (
        <IconView align="flex-end">
          <ICContact />
        </IconView>
      )}
      {quiz && (
        <View>
          <IconView onPress={onPressAlarm} align="flex-end">
            <View style={styles.viewAlarm}>
              <ICAlarm />
            </View>
          </IconView>
        </View>
      )}
      {transparentBg === true && (
        <IconView onPress={onPressNavigationMenu} align="flex-end">
          <ICNavigationQuiz />
        </IconView>
      )}
    </HeaderCard>
  );
};

export default Header;
const styles = StyleSheet.create({
  viewHeader: {flex: 1},
  viewAlarm: {
    justifyContent: 'center',
    flex: 1,
  },
});
