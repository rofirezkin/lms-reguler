import React from 'react';
import {ICArrowDown, ICArrowUp, ICBulet, ICNext} from '../../../assets/icon';
import Gap from '../Gap/Gap';
import {TouchableOpacity, StyleSheet, View} from 'react-native';

import {
  LabelList,
  LabelText,
  LabelTextBackground,
  LabelWithBackgrounView,
  ListSemesterView,
  RightView,
  TextNotif,
  TimeText,
  ViewNotif,
} from './CostumListStyles';

import {
  ICCheck,
  ICForum,
  ICLink,
  ICPembelajaran,
  ICPerkuliahan,
  ICQuiz,
  ICTugas,
  ICVideoPembelajaran,
} from '../../../assets/DetailKuliah';
import {colors, RowView} from '../../../utils';

const CustomList = ({
  label,
  jumlah,

  onPress,
  onlyLabel,
  listWithBackground,
  listDetailKuliah,
  link,
  icon,
  listSemester,
  dropDown,
  statusPengumpulan,
  statusSubmit,
  statusPenilaian,
  subtile,
}) => {
  const Icon = () => {
    switch (icon) {
      case 'forum':
        return <ICForum />;
      case 'pembelajaran':
        return <ICPembelajaran />;
      case 'perkuliahan':
        return <ICPerkuliahan />;
      case 'video-pembelajaran':
        return <ICVideoPembelajaran />;

      case 'quiz':
        return <ICQuiz />;
      case 'tugas':
        return <ICTugas />;
      default:
        return <ICForum />;
    }
  };

  if (subtile) {
    return (
      <LabelList>
        <RowView center>
          <ICBulet />
          <Gap width={10} />
          <LabelText>{label}</LabelText>
        </RowView>

        <TimeText>{subtile}</TimeText>
      </LabelList>
    );
  }

  if (statusPengumpulan) {
    return (
      <LabelList>
        <RowView center>
          <ICBulet />
          <Gap width={10} />
          <LabelText>{label}</LabelText>
        </RowView>
        <Gap height={10} />
        <RowView>
          <LabelWithBackgrounView>
            <LabelTextBackground>
              {statusSubmit === true ? 'Sudah tersubmit' : 'Belum Tesubmit'}
            </LabelTextBackground>
          </LabelWithBackgrounView>
          <Gap width={20} />
          <LabelWithBackgrounView>
            <LabelTextBackground>
              {statusPenilaian === true ? 'Sudah Diniliai' : 'Belum Diniliai'}
            </LabelTextBackground>
          </LabelWithBackgrounView>
        </RowView>
      </LabelList>
    );
  }

  if (onlyLabel) {
    return (
      <RowView center>
        <ICBulet />
        <Gap width={10} />
        <LabelText>{label}</LabelText>
      </RowView>
    );
  }

  if (listWithBackground) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.bgList}>
        <RowView center>
          <ICBulet />
          <Gap width={10} />
          <LabelText>{label}</LabelText>
          <Gap width={15} />
        </RowView>
        <RightView>{dropDown ? <ICArrowUp /> : <ICArrowDown />}</RightView>
      </TouchableOpacity>
    );
  }

  if (listSemester) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.bgListSemester}>
        <RowView center>
          <ListSemesterView />
          <Gap width={10} />
          <LabelText>{label}</LabelText>
          <Gap width={15} />
        </RowView>
        <RightView listSemester>
          {dropDown ? <ICArrowUp /> : <ICArrowDown />}
        </RightView>
      </TouchableOpacity>
    );
  }

  if (listDetailKuliah) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LabelList row>
          <RowView center>
            <Icon />
            <Gap width={15} />
            <LabelText>{label}</LabelText>
          </RowView>
          <RowView center>
            <ICCheck />
            <Gap width={15} />
            {link && <ICLink />}
            {!link && <View style={{width: 18, height: 18}} />}
          </RowView>
        </LabelList>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <LabelList row>
        <RowView center>
          <ICBulet />
          <Gap width={10} />
          <LabelText>{label}</LabelText>
        </RowView>
        <RowView center>
          <ViewNotif>
            <TextNotif>{jumlah}</TextNotif>
          </ViewNotif>
          <Gap width={15} />
          <ICNext />
        </RowView>
      </LabelList>
    </TouchableOpacity>
  );
};

export default CustomList;

const styles = StyleSheet.create({
  bgList: {
    backgroundColor: colors.bg.white,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
    padding: 15,
  },

  bgListSemester: {
    backgroundColor: colors.bg.white,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
  },
});
