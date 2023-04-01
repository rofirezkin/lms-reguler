import {View} from 'react-native';
import React from 'react';

import {ButtonDefault, CustomList, Gap, Header} from '../../components';
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
import {useSelector} from 'react-redux';
import {SafeArea, ScrollView, SpacingView} from '../../utils';

const TaskDetail = ({navigation, route}) => {
  const {taskDetail} = useSelector(state => state.taskDetailReducer);
  const params = route.params;
  const roleUser = 'Mahasiswa';
  return (
    <SafeArea>
      <ScrollView>
        <Header title={params.title} onPress={() => navigation.goBack()} />
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
              <ButtonDefault
                title="Upload File"
                onPress={() => navigation.navigate('PengumpulanTugas')}
              />
            </>
          )}
          <Gap height={30} />
        </SpacingView>
      </ScrollView>
    </SafeArea>
  );
};

export default TaskDetail;
