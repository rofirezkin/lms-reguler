import axios from 'axios';
import {setDateFormatDDDMMMYYY} from '../../utils';
import {hostApi, hostApiReg} from '../../utils/env';
import {getData} from '../../utils/storage';

export const getTimeline = () => dispatch => {
  const date = new Date();
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const dateTime = setDateFormatDDDMMMYYY(date);
  const dateTimeLastDay = setDateFormatDDDMMMYYY(lastDay);
  // console.log('oke  ', dateTimeLastDay);
  // console.log(
  //   'adpi ',
  //   `${hostApiReg}schedule/exam/verify/view/10/1/13/${dateTime}/${dateTimeLastDay}/150000/170000/Waiting Topic & Activity Verification/test`,
  // );
  getData('token')
    .then(resToken => {
      console.log('res ', resToken);
      axios
        .get(
          `${hostApiReg}/schedule/exam/verify/view/10/1/13/${dateTime}/${dateTimeLastDay}/150000/170000/Waiting Topic & Activity Verification/test`,
          {
            headers: {
              Authorization: `Bearer ${resToken.access_token}`,
            },
          },
        )
        .then(res => {
          console.log('respon data ', res);
          dispatch({type: 'SET_QUIZ_TIMELINE', value: res.data.data});
        })
        .catch(err => {
          console.log('eror data ', err);
        });
    })
    .catch(err => {
      console.log('errore ', err);
    });
};
