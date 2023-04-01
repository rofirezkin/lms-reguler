import {View} from 'react-native';
import React from 'react';

import {TextDate} from './ContentChatStyles';

import {chat} from '../../../../dummyData/chat';
import ChatItem from './ChatItem/ChatItem';

const ContentChat = () => {
  const dataSnapshot = chat.allChat;
  const allDataChat = [];
  Object.keys(dataSnapshot).map(key => {
    const dataChat = dataSnapshot[key];
    const newDataChat = [];
    Object.keys(dataChat).map(itemChat => {
      newDataChat.push({
        id: itemChat,
        data: dataChat[itemChat],
      });
    });
    allDataChat.push({
      id: key,
      data: newDataChat,
    });
  });
  console.log('alll data chattt ', allDataChat);
  return (
    <>
      {allDataChat.map(chatData => {
        return (
          <View key={chatData.id}>
            <TextDate>{chatData.id}</TextDate>
            {chatData.data.map((itemChat, index) => {
              const isMe =
                itemChat.data.sendBy === 'bMS11JaHH0R2j8nxZUySFEFVnfS2';

              return (
                <ChatItem
                  key={`${index}-chat`}
                  isMe={isMe}
                  text={itemChat.data.chatContent}
                  date={itemChat.data.chatTime}
                />
              );
            })}
          </View>
        );
      })}
    </>
  );
};

export default ContentChat;
