import {Text} from 'react-native';
import React from 'react';

import Gap from '../Gap/Gap';
import {ButtonList, DetailListView, IconView} from './DetailListStyles';
import {useDispatch, useSelector} from 'react-redux';
import {getProdi} from '../../../redux/action';
import {useEffect} from 'react';
import {RowView} from '../../../utils';
import {ICBulet, ICNext} from '../../../assets';

const DetailFakultas = ({navigatePage, id, nameProdi}) => {
  const {prodi} = useSelector(state => state.berandaMahasiswaReducer);
  const dispatch = useDispatch();
  const navigationHandling = res => {
    nameProdi(res);
    navigatePage(true);
  };
  useEffect(() => {
    dispatch(getProdi(id));
  }, [id, dispatch]);

  console.log('data prodiiiii id ', prodi);
  return (
    <DetailListView>
      {prodi.map(res => {
        return (
          <ButtonList
            key={`prodi-${res.category_id}`}
            onPress={() => navigationHandling(res.category_name)}>
            <RowView flexdata center>
              <ICBulet />
              <Gap width={10} />
              <Text style={{flex: 1}}>{res.category_name}</Text>
            </RowView>
            <IconView>
              <ICNext />
            </IconView>
          </ButtonList>
        );
      })}
      {/* <ButtonList onPress={navigationHandling}>
        <RowView center>
          <ICBulet />
          <Gap width={10} />
          <Text>Nama Program Studi</Text>
        </RowView>
        <IconView>
          <ICNext />
        </IconView>
      </ButtonList>
      <ButtonList onPress={navigationHandling}>
        <RowView center>
          <ICBulet />
          <Gap width={10} />
          <Text>Nama Program Studi</Text>
        </RowView>
        <IconView>
          <ICNext />
        </IconView>
      </ButtonList> */}
    </DetailListView>
  );
};

export default DetailFakultas;
