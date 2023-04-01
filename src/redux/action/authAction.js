import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Alert} from 'react-native';
import {CLIENT_SECRET, CLIENT_ID, GRANT_TYPE} from '@env';

import {setLoading} from './loading';
import {host, hostAuth} from '../../utils/env';
import {storeData} from '../../utils/storage';
import {getUser} from './userAction';

const checkAtuh = form => {
  if (form.username !== '' && form.password !== '') {
    return true;
  } else {
    return false;
  }
};
export const signIn = form => async dispatch => {
  if (checkAtuh(form)) {
    const bodyAuth = {
      username: form.username,
      password: form.password,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: GRANT_TYPE,
    };

    axios
      .post(`${hostAuth}/oauth/token`, bodyAuth, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(async res => {
        console.log('dataa', res.data.access_token);

        dispatch(getUser(res.data.access_token));
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('resss err ', err);

        alert(`login gagal ${err?.res}`);
      });
    // In a production app, we need to send some data (usually username, password) to server and get a token
    // We will also need to handle errors if sign in failed
    // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
    // In the example, we'll use a dummy token
  } else {
    dispatch(setLoading(false));
    Alert.alert('email atau password kosong');
  }
};

export const signOut = () => async dispatch => {
  dispatch(setLoading(true));
  console.log('data signout');
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');

    dispatch({type: 'SIGN_OUT'});
    dispatch(setLoading(false));
  } catch (e) {
    // remove error
  }
};
