import React from 'react';

import {
  Calendar as CalendarPackage,
  LocaleConfig,
} from 'react-native-calendars';

import {Gap, Header} from '../../components';
import {colors, SafeArea, SpacingView} from '../../utils';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ],

  dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  dayNamesShort: ['M', 'S', 'S', 'R', 'K', 'J', 'S'],
  today: 'hari ini',
};
LocaleConfig.defaultLocale = 'fr';

const Calendar = ({navigation}) => {
  // useFocusEffect(
  //   React.useCallback(() => {
  //     const onBackPress = () => {
  //       navigation.replace('MainApp');
  //       // Do Whatever you want to do on back button click
  //       // Return true to stop default back navigaton
  //       // Return false to keep default back navigaton
  //       return true;
  //     };

  //     BackHandler.addEventListener('hardwareBackPress', onBackPress);

  //     return () =>
  //       BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  //   }, [navigation]),
  // );

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  const hari = yyyy + '-' + mm + '-' + dd;
  console.log('todaay ', hari);
  return (
    <SafeArea>
      <Header title="Kalendar Acara" />

      <SpacingView>
        <CalendarPackage
          markingType={'period'}
          markedDates={{
            '2022-06-15': {marked: true, dotColor: colors.bg.section},
            '2022-06-16': {marked: true, dotColor: colors.bg.section},
            '2022-06-21': {
              startingDay: true,
              color: colors.bg.marking,
              textColor: 'white',
            },
            '2022-06-22': {
              color: colors.bg.marking,
              textColor: 'white',
            },
            '2022-06-23': {
              color: colors.bg.marking,
              textColor: 'white',
              marked: true,
              dotColor: colors.bg.section,
            },
            '2022-06-24': {color: colors.bg.marking, textColor: 'white'},
            '2022-06-25': {
              endingDay: true,
              color: colors.bg.marking,
              textColor: 'white',
            },
            hari: {
              endingDay: true,
              color: colors.bg.marking,
            },
          }}
          disabledDaysIndexes={[0, 6]}
          theme={{
            arrowColor: colors.bg.primary,

            todayTextColor: colors.text.inverse,
            todayBackgroundColor: colors.bg.marking,
            dayTextColor: colors.text.primary,
          }}
        />
        <Gap height={20} />
      </SpacingView>
    </SafeArea>
  );
};

export default Calendar;
