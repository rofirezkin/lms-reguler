import {Alert, Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Gap} from '../../atoms';
import ImagePicker from 'react-native-image-crop-picker';
import {Text} from '../../atoms/typography/text.component';

import DocumentPicker from 'react-native-document-picker';
import {
  ICAlbum,
  ICCamera,
  ICDocument,
  ICExit,
  ICMusik,
  ICVideo,
} from '../../../assets/icon';
import {RowView, setDateSlash, showMessage} from '../../../utils';

const ModalButton = ({visible, onRequestClose, document}) => {
  const [singleFile, setSingleFile] = useState('');
  const date = new Date();
  const dataDate = setDateSlash(date);
  const handleOpenImageGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,

      cropping: true,
    })
      .then(image => {
        const filnename = image.path.substring(image.path.lastIndexOf('/') + 1);
        console.log('data imageee ', image);
        console.log('dataa ', filnename);
        let nilaiFile = niceBytes(image.size);
        const dataDocument = {
          fileSize: nilaiFile,
          name: filnename,
          date: dataDate,
          data: image,
        };
        document(dataDocument);
      })

      .catch(err => {
        showMessage('batal mengambil foto pada galery');
      });
  };
  const handleOpenVideoGallery = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
    })
      .then(video => {
        const filnename = video.path.substring(video.path.lastIndexOf('/') + 1);
        console.log('data videoee ', video);
        console.log('dataa ', filnename);
        let nilaiFile = niceBytes(video.size);
        const dataDocument = {
          fileSize: nilaiFile,
          name: filnename,
          date: dataDate,
          data: video,
        };
        document(dataDocument);
      })
      .catch(err => {
        showMessage('Batal memilih video');
      });
  };
  const handleOpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        const filnename = image.path.substring(image.path.lastIndexOf('/') + 1);
        console.log('data imageee ', image);
        console.log('dataa ', filnename);
        let nilaiFile = niceBytes(image.size);
        const dataDocument = {
          fileSize: nilaiFile,
          name: filnename,
          date: dataDate,
          data: image,
        };
        document(dataDocument);
      })
      .catch(err => {
        console.log('dataa', err);
        showMessage('batal mengambil foto pada galery');
      });
  };

  const handleOpenDoc = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.zip],

        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      // console.log('res : ' + JSON.stringify(res));
      // console.log('URI : ' + res.uri);
      // console.log('Type : ' + res.type);
      // console.log('File Name : ' + res.name);
      // console.log('File Size : ' + res.size);

      let nilaiFile = niceBytes(res.size);
      console.log('nbilaiiiii size ', nilaiFile);

      const dataDocument = {
        fileSize: nilaiFile,
        name: res.name,
        date: dataDate,
        data: res,
      };
      document(dataDocument);

      //Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        showMessage('batal mengambil Dokumen');
        //nothing
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const handlePickAudio = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.audio],

        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      // console.log('res : ' + JSON.stringify(res));
      // console.log('URI : ' + res.uri);
      // console.log('Type : ' + res.type);
      // console.log('File Name : ' + res.name);
      // console.log('File Size : ' + res.size);

      let nilaiFile = niceBytes(res.size);
      console.log('nbilaiiiii size ', nilaiFile);

      const dataDocument = {
        fileSize: nilaiFile,
        name: res.name,
        date: dataDate,
        data: res,
      };
      document(dataDocument);

      //Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        showMessage('batal mengambil musik audio');
        //nothing
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const niceBytes = x => {
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0,
      n = parseInt(x, 10) || 0;
    while (n >= 1024 && ++l) {
      n = n / 1024;
    }
    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
  };
  return (
    <View>
      <Modal
        visible={visible}
        transparent
        onRequestClose={onRequestClose}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <Gap height={20} />
            <RowView justifyContent>
              <Text variant="headerProfile"> Pilih File </Text>
              <TouchableOpacity onPress={onRequestClose}>
                <ICExit />
              </TouchableOpacity>
            </RowView>
            <Gap height={27} />
            <TouchableOpacity onPress={handleOpenImageGallery}>
              <RowView>
                <ICAlbum />
                <Gap width={15} />
                <Text variant="body">Galeri</Text>
              </RowView>
            </TouchableOpacity>
            <Gap height={25} />
            <TouchableOpacity onPress={handleOpenCamera}>
              <RowView>
                <ICCamera />
                <Gap width={15} />
                <Text variant="body">Kamera</Text>
              </RowView>
            </TouchableOpacity>
            <Gap height={25} />
            <TouchableOpacity onPress={handlePickAudio}>
              <RowView>
                <Gap width={5} />
                <ICMusik />
                <Gap width={15} />
                <Text variant="body">Musik</Text>
              </RowView>
            </TouchableOpacity>
            <Gap height={25} />
            <TouchableOpacity onPress={handleOpenVideoGallery}>
              <RowView>
                <ICVideo />
                <Gap width={15} />
                <Text variant="body">Video</Text>
              </RowView>
            </TouchableOpacity>
            <Gap height={25} />
            <TouchableOpacity onPress={handleOpenDoc}>
              <RowView>
                <ICDocument />
                <Gap width={15} />
                <Text variant="body">Dokumen</Text>
              </RowView>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalButton;

const styles = StyleSheet.create({
  centered_view: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: '100%',
    height: '50%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 25,
    backgroundColor: '#ffffff',
  },
});
