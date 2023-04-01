import axios from 'axios';
import {hostApi, hostApiReg} from '../../utils/env';
import {storeData} from '../../utils/storage';
import {setLoading} from './loading';

export const getUser = token => dispatch => {
  axios
    .all([
      axios.get(`${hostApi}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Cookie: `XSRF-TOKEN=${token}`,
        },
      }),
    ])
    // .get(`${hostApi}profile`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     Cookie: `XSRF-TOKEN=${token}`,
    //   },
    // })
    .then(
      axios.spread(res1 => {
        dispatch(setLoading(false));
        storeData('token', {value: token});
        // console.log('ress roleee  ', res2.data[0]);
        const dataUser = {
          ...res1.data,
        };

        dispatch({type: 'SIGN_IN', token: token});
        storeData('user', {value: dataUser});
      }),
    )
    .catch(err => {
      dispatch(setLoading(false));
      alert(`login gagal ${err}`);
    });
};
