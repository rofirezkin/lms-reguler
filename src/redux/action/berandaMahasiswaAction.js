import axios from 'axios';
import {hostApiReg} from '../../utils/env';
import {getData} from '../../utils/storage';
import {setLoading} from './loading';

export const getFakultas = () => dispatch => {
  getData('token').then(resToken => {
    axios
      .get(`${hostApiReg}/filter/faculty`, {
        headers: {
          Authorization: `Bearer ${resToken.access_token}`,
        },
      })
      .then(res => {
        // console.log('res data fakulty ', res);
        dispatch({type: 'SET_FAKULTAS', value: res.data});
      })
      .catch(err => {
        console.log('eror get faculty ', err);
      });
  });
};

export const getProdi = id => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(resToken => {
    axios
      .get(`${hostApiReg}/filter/studyprogram/${id}`, {
        headers: {
          Authorization: `Bearer ${resToken.access_token}`,
        },
      })
      .then(res => {
        dispatch(setLoading(false));
        dispatch({type: 'SET_PRODI', value: res.data});
        console.log('res data prodi ', res);
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log(err);
      });
  });
};
