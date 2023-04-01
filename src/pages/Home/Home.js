import {BackHandler, View} from 'react-native';
import React, {useState} from 'react';
import {
  Gap,
  ModalPengumuman,
  Navbar,
  SearchBar,
  ShortProfile,
  TabBar,
} from '../../components';

import {ScrollView} from '../../utils/theme/styled';
import {SafeArea} from '../../utils/theme/area';
import Dashboard from './Dashboard';
import BerandaSitus from './BerandaSitus';
import BerandaSitusMahasiswa from './BerandaSitusMahasiswa';
import {useFocusEffect} from '@react-navigation/native';
import {useEffect} from 'react';
import {getData} from '../../utils/storage';
import {useDispatch, useSelector} from 'react-redux';
import {getFakultas} from '../../redux/action';
import {useCallback} from 'react';

import PushNotificationIOS from '@react-native-community/push-notification-ios';

const Home = ({navigation}) => {
  const {role, jenis} = useSelector(state => state.userReducer);
  console.log('user ', role);
  const dispatch = useDispatch();
  const [dasbor, setDasbor] = useState(true);
  const [pengumuman, setPengumuman] = useState(true);

  console.log('dasbord false ', dasbor);
  const handleData = value => {
    console.log('value', value);
    setDasbor(value);
  };

  const handleClosePengumuman = () => {
    setPengumuman(false);
  };

  // React.useEffect(() => {
  //   console.log('ddaaaa==========');
  //   const onBackPress = () => {
  //     BackHandler.exitApp();
  //     // Do Whatever you want to do on back button click
  //     // Return true to stop default back navigaton
  //     // Return false to keep default back navigaton
  //     return true;
  //   };

  //   BackHandler.addEventListener('hardwareBackPress', onBackPress);

  //   return () =>
  //     BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  // }, []);

  const getDataUser = useCallback(() => {
    getData('user')
      .then(res => {
        console.log('res data ', res.value);
        dispatch({type: 'SET_USER', value: res.value});
      })
      .catch(err => {
        console.log('err', err);
      });
    dispatch(getFakultas());
  }, [dispatch]);

  useEffect(() => {
    // messaging().onNotificationOpenedApp(remoteMessage => {
    //   console.log(
    //     'Notification caused app to open from background state:',
    //     remoteMessage.data,
    //   );
    //   navigation.navigate('DetailCatatMeter', remoteMessage.data);
    // });

    // // Check whether an initial notification is available
    // messaging()
    //   .getInitialNotification()
    //   .then(remoteMessage => {
    //     if (remoteMessage) {
    //       console.log(
    //         'Notification caused app to open from quit state:',
    //         remoteMessage.data,
    //       );
    //       navigation.navigate('DetailCatatMeter', remoteMessage.data);
    //     }
    //   });

    const type = 'notification';
    PushNotificationIOS.addEventListener(type, onRemoteNotification);
    return () => {
      PushNotificationIOS.removeEventListener(type);
    };
  });

  const onRemoteNotification = notification => {
    const isClicked = notification.getData().userInteraction === 1;

    if (isClicked) {
      console.log('dataaa navigation ');
      navigation.navigate('TaskNavigator', {
        screen: 'TaskDetail',
        params: 1,
      });
      // Navigate user to another screen
    } else {
      // Do something else with push notification
    }
    // Use the appropriate result based on what you needed to do for this notification
    const result = PushNotificationIOS.FetchResult.NoData;
    notification.finish(result);
  };

  useEffect(() => {
    getDataUser();
  }, [getDataUser]);

  return (
    <SafeArea>
      {/* <ModalPengumuman
        visible={pengumuman}
        onRequestClose={handleClosePengumuman}
  /> */}
      <Navbar handleData={handleData} />
      <ScrollView>
        <View>
          <Gap height={21} />
          <ShortProfile role={role} />

          {dasbor === true ? (
            <>
              <Gap height={30} />
              <Dashboard />
            </>
          ) : (
            <>
              {jenis === 'MAHASISWA' ? (
                <BerandaSitus />
              ) : (
                <BerandaSitusMahasiswa navigation={navigation} />
              )}
            </>
          )}
        </View>
        <Gap height={90} />
      </ScrollView>
    </SafeArea>
  );
};

export default Home;
