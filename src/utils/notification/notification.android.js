import PushNotification from 'react-native-push-notification';

const showNotification = (title, message) => {
  PushNotification.localNotification({
    channelId: 'channel-id',
    title: title,
    soundName: 'default',
    message: message,
  });
};

const handleScheduleNotification = (title, message, date, data) => {
  PushNotification.localNotificationSchedule({
    channelId: 'channel-id',
    title: title,
    message: message,
    date: new Date(date),
  });
};

const handleCancelNotification = () => {
  PushNotification.cancelAllLocalNotifications();
};

export {showNotification, handleScheduleNotification, handleCancelNotification};
