import {Alert, Linking, Platform, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {
  ButtonDefault,
  CustomList,
  Gap,
  Header,
  ModalBasic,
} from '../../components';
import {ICalendar, ICBgBook, ICBulet, ICTime} from '../../assets/icon';

import Description from '../../components/atoms/Description/Description';
import {
  DateCardView,
  HeaderCardVIew,
  ItemView,
  TextDate,
  TextDateDeadline,
  TimelineView,
} from './TaskDetailStyles';
import {Text} from '../../components/atoms/typography/text.component';
import DatePicker from 'react-native-date-picker';
import {Camera} from 'react-native-vision-camera';
import ModalPeringatanKamera from '../../components/molecules/Modals/ModalPeringatanKamera';
import {useSelector} from 'react-redux';
import {Countdown} from '../Quiz/Countdown';
import {
  handleScheduleNotification,
  handleScheduleNotificationiOS,
  SafeArea,
  ScrollView,
  SpacingView,
} from '../../utils';

const QuizDetail = ({navigation, route}) => {
  const {taskDetail} = useSelector(state => state.taskDetailReducer);

  const [open, setOpen] = useState(false);
  const [modalIzinKamera, setMoadalIzinKamera] = useState(false);
  const [modalPeringatanQuiz, setModalPeringatanQuiz] = useState(false);
  const params = route.params;
  const roleUser = 'Mahasiswa';

  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState('not-determined');
  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...');
    const permission = await Camera.requestCameraPermission();
    console.log(`Camera permission status: ${permission}`);

    if (permission === 'denied') {
      setMoadalIzinKamera(true);
    } else if (permission === 'authorized') {
      setModalPeringatanQuiz(true);
    }
    setCameraPermissionStatus(permission);
  }, []);

  const handleQuiz = () => {
    requestCameraPermission();
  };

  const onSuccess = () => {
    setModalPeringatanQuiz(false);
    if (cameraPermissionStatus === 'authorized') {
      navigation.navigate('Quiz');
    }
  };

  const onSuccessIzinKamera = async () => {
    setMoadalIzinKamera(false);
    await Linking.openSettings();
  };

  const dateSchedule = dateDa => {
    console.log('daadaad ', dateDa);
    if (Platform.OS === 'ios') {
      console.log('iosss ', Platform.OS);
      handleScheduleNotificationiOS(
        'Hi ',
        'showed after 5 sec dummy alert',
        dateDa,
        params,
      );
    } else {
      // showNotification('hi ', 'showed in taab bar');
      handleScheduleNotification(
        'Hi',
        'showed after 5 sec dummy alert.',
        dateDa,
      );
    }
    setOpen(false);
  };

  return (
    <SafeArea>
      <ModalBasic
        visible={modalIzinKamera}
        onCancel={() => setMoadalIzinKamera(false)}
        onSuccess={onSuccessIzinKamera}
        title="Tidak Bisa mengakses Quiz karena kamera tidak di izinkan, silahkan ubah di settingan Aplikasi untuk izinkan akses kamera"
      />
      <ModalPeringatanKamera
        onCancel={() => setModalPeringatanQuiz(false)}
        onPress={onSuccess}
        visible={modalPeringatanQuiz}
      />
      <DatePicker
        modal
        open={open}
        date={new Date()}
        onConfirm={dateDa => dateSchedule(dateDa.toISOString())}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <ScrollView>
        <Header
          quiz
          onPressAlarm={() => setOpen(true)}
          title={params.title}
          onPress={() => navigation.goBack()}
        />
        <HeaderCardVIew>
          <ICBgBook />
          <Text variant="label">{params.mataKuliah}</Text>
        </HeaderCardVIew>
        <Gap height={24} />
        <TimelineView>
          <Text variant="body">Tanggal Mulai</Text>
          <Text variant="body">Tanggal Berakhir</Text>
        </TimelineView>
        <SpacingView>
          <DateCardView>
            <View style={{paddingHorizontal: 5, flex: 1}}>
              <ItemView>
                <ICalendar />
                <Gap width={10} />
                <TextDate>{taskDetail[params.id].startDate}</TextDate>
              </ItemView>
              <Gap height={10} />
              <ItemView>
                <ICTime />
                <Gap width={10} />
                <TextDate>{taskDetail[params.id].startTime}</TextDate>
              </ItemView>
            </View>
            <View
              style={{
                paddingHorizontal: 5,
                flex: 1,
              }}>
              <ItemView>
                <ICalendar />
                <Gap width={10} />
                <TextDateDeadline>
                  {taskDetail[params.id].endDate}
                </TextDateDeadline>
              </ItemView>
              <Gap height={10} />
              <ItemView>
                <ICTime />
                <Gap width={10} />
                <TextDateDeadline>
                  {taskDetail[params.id].endTime}
                </TextDateDeadline>
              </ItemView>
            </View>
          </DateCardView>
          <Gap height={40} />
          <ItemView>
            <ICBulet />
            <Gap width={10} />
            <TextDateDeadline>Deskripsi</TextDateDeadline>
          </ItemView>
          <Gap height={10} />
          <Description description={taskDetail[params.id].deskripsi} />

          <Gap height={24} />
          {roleUser === 'Dosen' ? (
            <>
              <CustomList
                onPress={() =>
                  navigation.navigate('MonitoringMahasiswa', {
                    title: 'PARTISIPAN',
                    detail: true,
                  })
                }
                label="Partisipan"
                jumlah="30"
              />
              <CustomList
                label="Terkumpul"
                jumlah="20"
                onPress={() =>
                  navigation.navigate('MonitoringMahasiswa', 'TERKUMPUL')
                }
              />
              {params.type === 'tugas' && (
                <CustomList
                  label="Menunggu Penilaian"
                  jumlah="20"
                  onPress={() =>
                    navigation.navigate(
                      'MonitoringMahasiswa',
                      'MENUNGGU PENILAIAN',
                    )
                  }
                />
              )}
              <CustomList
                label="Waktu  Tersisa"
                subtile="10 jam 25 menit 7 detik"
              />
            </>
          ) : (
            <>
              <CustomList
                label="Status Pengumpulan"
                statusPengumpulan
                statusPenilaian={taskDetail[params.id].statusPenilaian}
                statusSubmit={taskDetail[params.id].statusSubmit}
              />
              <CustomList
                label="Komentar"
                subtile={
                  taskDetail[params.id].komentar === null
                    ? 'Tidak ada komentar'
                    : taskDetail[params.id].komentar
                }
              />
              <CustomList
                label="Waktu  Tersisa"
                subtile={taskDetail[params.id].waktuTersisa}
              />
              <ButtonDefault title="Kerjakan" onPress={handleQuiz} />
            </>
          )}
          <Gap height={30} />
        </SpacingView>
      </ScrollView>
    </SafeArea>
  );
};

export default QuizDetail;
