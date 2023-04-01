import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {SafeArea} from '../../utils/theme/area';
import {
  ButtonDefault,
  Gap,
  Header,
  ModalButton,
  ModalSuccess,
  UploadFile,
} from '../../components';

import {Text} from '../../components/atoms/typography/text.component';

import ImagePicker from 'react-native-image-crop-picker';
import {colors, ScrollView, SpacingView} from '../../utils';

const PengumpulanTugas = ({navigation}) => {
  const [button, setButton] = useState(false);

  const [success, setSuccess] = useState(false);
  const [dataUpload, setDataUpload] = useState([]);
  const addDocument = () => {
    setButton(true);
  };
  const uploadDoc = () => {
    setButton(false);
  };

  const handleDocument = data => {
    console.log('dataaaaa', data);
    setButton(false);
    setDataUpload(prevState => [...prevState, data]);
  };

  const handleSubmit = () => {
    ImagePicker.clean()
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigation.goBack();
        }, 2000);
      })
      .catch(e => {
        alert(e);
      });
  };
  return (
    <SafeArea>
      <ModalButton
        document={e => handleDocument(e)}
        visible={button}
        onRequestClose={uploadDoc}
      />
      <ModalSuccess visible={success} />

      <Header title="Tugas 01" onPress={() => navigation.goBack()} />
      <ScrollView>
        <SpacingView flexView>
          <View>
            <View style={styles.warning}>
              <Text variant="caption">
                Ukuran maksimal file : 5Mb | Jumlah maksimal file : 20
              </Text>
            </View>
            <Gap height={20} />
            {dataUpload.map((res, index) => {
              return (
                <View key={`data-${index}`}>
                  <UploadFile
                    namaFile={res.name}
                    date={res.date}
                    ukuranFile={res.fileSize}
                  />
                </View>
              );
            })}
            <Gap height={20} />
            {dataUpload.length < 20 && (
              <ButtonDefault
                noPadding
                title="+ Tambah File"
                onPress={addDocument}
              />
            )}
          </View>
          <Gap height={20} />
          <View>
            {dataUpload.length > 0 && (
              <ButtonDefault title="Kumpulkan" onPress={handleSubmit} />
            )}
            <Gap height={30} />
          </View>
        </SpacingView>
      </ScrollView>
    </SafeArea>
  );
};

export default PengumpulanTugas;

const styles = StyleSheet.create({
  warning: {
    backgroundColor: colors.bg.list,
    padding: 10,
    borderRadius: 20,
  },
});
