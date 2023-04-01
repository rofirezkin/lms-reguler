import React, {useState} from 'react';
import {SafeArea} from '../../utils/theme/area';
import {ContentChat, Gap, Header, InputChat} from '../../components';

import {
  BgChattingView,
  BorderScroll,
  ChattingView,
} from './DetailMessageStyles';

import {ScrollView} from 'react-native';

const DetailMessage = ({navigation}) => {
  const [chatContent, setChatContent] = useState('');

  return (
    <SafeArea>
      <Header
        photo
        green
        title="Nama Mahasiswa"
        onPress={() => navigation.goBack()}
      />
      <BgChattingView>
        <ChattingView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <BorderScroll />
            <Gap height={30} />
            <ContentChat />
          </ScrollView>
        </ChattingView>

        <InputChat
          value={chatContent}
          placeholder="tulis pesan untuk nama mahasiswa"
          onChangeText={value => setChatContent(value)}
        />
      </BgChattingView>
    </SafeArea>
  );
};

export default DetailMessage;
